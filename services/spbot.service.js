const builder = require('botbuilder'),
    appConfig = require('../statics/app.config'),
    authService = require('../services/auth.service'),
    khongDau = require('khong-dau'),
    constants = require("../common/constants"),
    FloatingButtons = constants.FloatingButtons,
    enums = require("../common/enums"),
    BookStatus = enums.BookStatus,
    _ = require('lodash'),
    sessionHelper = require('../helpers/bot/facebook/session.helper'),
    dialogFlowService = require('../services/dialogFlow.service'),
    _trans = require('../services/localization.service'),
    helperSPBotService = require('./spbot/helper.spbotservice'),
    quickrepliesHelper = require('../helpers/bot/facebook/quickreplies.helper'),
    answerFaqService = require('../services/answerFaq.Service');

//====================================================================
//======================== INTERNAL METHOD ===========================
//====================================================================

module.exports.main = (username, session, results) => {
    helperSPBotService.checkSess(session, session.message.user.id);
    handleUserInput(username, session, results);
}

module.exports.validateState = function (session, next) {
    helperSPBotService.checkSess(session, session.message.user.id);
    var chattingState = session.userData.sessInfo.chatting;
    if (chattingState) {
        if (session.message.text == "ZZZZZZ_STOP_CHATTING_AAAAAA_" || session.message.text == '#STOP') {
            session.beginDialog('/stopChatting');
        } else
            session.endDialog();
    } else
        next();
}

module.exports.restart = (username, session) => {
    const text = `Xin chào ${session.message.user.name}!\nChào bạn đến với page Du lịch Đà Nẵng.\nXin mời nhấn nút bên dưới để bắt đầu`;
    session.sendTyping();
    sessionHelper.sendTextMessage(session,text);
    session.endConversation();




    // helperSPBotService.checkSess(session, session.message.user.id);
    // let lang = session.userData.sessInfo.lang ? session.userData.sessInfo.lang : session._locale;
    // providerService.getByFanpageId(session.message.sourceEvent.recipient.id).then(provider => {
    //     if (provider) {
    //         session.userData.sessInfo.providerId = provider._id;
    //         session.userData.sessInfo.provider = provider;
    //         customerService.getOrAddUserInfoBySession(provider._id, session).then(profil => {
    //             session.userData.sessInfo.userProfil = profil;
    //             session.sendTyping();
    //             let hiText = _trans.getField('hi', lang);
    //             session.send(`${hiText} ${session.message.user.name} :D`);
    //             sendMessageHome(username, session, provider);
    //         }).catch(err => console.log(err));
    //     }
    // });
}

function sendMessageHome(username, session, provider) {
    const lang = session.userData.sessInfo.lang ? session.userData.sessInfo.lang : session._locale;
    const welcomeText = _trans.getField('welcome-to', lang);
    const addressText = _trans.getField('address', lang);
    const background = provider.background || 'no_place.png';
    const imageUrl = `${appConfig.staticServer.host}/bg/${background}`;

    let providerElements = [];
    let providerElement = {};
    providerElement["title"] = `${welcomeText} ${provider.name}`;
    providerElement["image_url"] = imageUrl;
    providerElement["subtitle"] = `🏠${addressText}: ${provider.address} \n📱Phone: ${provider.tel}`;

    providerElement["buttons"] = [
        {
            "title": _trans.getField("SPBOT_BUTTON_SHIP", lang),
            type: 'web_url',
            url: appConfig.apiServer.host + "/ship?token=" + authService.generateProviderActionAPIToken(session.userData.sessInfo.userProfil._id, session.userData.sessInfo.providerId, username),
            webview_height_ratio: 'tall',
            messenger_extensions: appConfig.isProd
        },
        {
            "title": _trans.getField("SPBOT_BUTTON_BOOK", lang),
            type: 'web_url',
            url: appConfig.apiServer.host + "/book?token=" + authService.generateProviderActionAPIToken(session.userData.sessInfo.userProfil._id, session.userData.sessInfo.providerId, username),
            webview_height_ratio: 'tall',
            messenger_extensions: appConfig.isProd
        },
        {
            "type": "phone_number",
            "title": _trans.getField("SPBOT_BUTTON_CALL", lang),
            "payload": helperSPBotService.formatPhoneNumber(provider.tel.toString())
        }
    ];
    providerElements.push(providerElement);

    let floatingButtons = [FloatingButtons.ChatWithAdmin, FloatingButtons.Promotion, FloatingButtons.Menu, FloatingButtons.AboutUs];
    let card = {
        facebook: {
            quick_replies: quickrepliesHelper.buildQuickRepliesSPBot(session, floatingButtons),
            attachment: {
                type: "template",
                payload: {
                    template_type: "generic",
                    elements: providerElements,
                }
            }
        }
    };

    const msg = new builder.Message(session).sourceEvent(card);
    session.endDialog(msg);
    session.endConversation();
}

function isNotScope(message) {
    if (message.match(/^[a-f0-9]{24}$/i) || message.length == 0 || message.length > 250 || !khongDau(message).match(/[a-zA-Z]/i)) {
        return true;
    } else {
        return false;
    }
}

function handleUserInput(username, session, results) {
    session.sendTyping();
    if (session.message.attachments.length > 0) {
        for (let i = 0; i < session.message.attachments.length; i++) {
            if (session.message.attachments[i].contentType.indexOf("video") > -1 || session.message.attachments[i].contentType.indexOf("audio") > -1) {
                //[TODO]: handel
            }
        }
    }
    let message = session.message.text;
    if (isNotScope(message)) {
        sendSorry(session);
    } else {
        let messageKhongDau = khongDau(message);
        dialogFlowService.queryIntent(messageKhongDau).then(res => {
            handleAfterQueryIntent(session, res);
        })
    }
}

function handleAfterQueryIntent(session, res) {
    if (res && res.success) {
        if (res.answer) {
            let answer = res.answer;
            sessionHelper.sendTextMessage(session, answer);
        } else {
            sendSorry(session);
        }
    }
}

function sendSorry(session) {
    helperSPBotService.checkSess(session);
    var lang = session.userData.sessInfo.lang;
    session.userData.sessInfo.label_nlp = undefined;
    let dontUnderstandText = _trans.getField('sorry-we-dont-understand', lang);
    session.send(`${dontUnderstandText} :(`);
    session.beginDialog("/contactUs");
}


