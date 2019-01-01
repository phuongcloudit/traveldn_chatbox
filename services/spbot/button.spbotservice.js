const builder = require('botbuilder'),
    appConfig = require('../../statics/app.config'),
    constants = require("../../common/constants"),
    FloatingButtons = constants.FloatingButtons,
    validUrl = require('valid-url'),
    authService = require('../../services/auth.service'),
    helperSPBotService = require('./helper.spbotservice'),
    bridgeService = require('../bridge.service'),
    aboutdnService = require('../aboutdn.service'),
    vanhoaService = require('../vanhoa.service'),
    sukienService = require('../sukien.service'),
    natureService = require('../nature.service'),
    sessionHelper = require('../../helpers/bot/facebook/session.helper'),
    quickrepliesHelper = require('../../helpers/bot/facebook/quickreplies.helper'),
    fcmService = require('../../services/fcm.service'),
    _trans = require('../../services/localization.service');

module.exports.sendBridge = (session) => {
    let message = "Xin chào bạn đến với những cây cầu của Đà Nẵng.";
    sessionHelper.sendTextMessage(session, message);
    bridgeService.getAll().then(bridges => {
        let bridgeElements = [];
        for (let i = 0; Math.min(i < bridges.length, constants.N_DISPLAY); i++) {
            let bridgeElem = {};
            bridgeElem["title"] = bridges[i].name;
            bridgeElem["image_url"] = bridges[i].image;
            bridgeElem["subtitle"] = bridges[i].description;
            bridgeElem["default_action"] = {
                type: 'web_url',
                url: bridges[i].url,
                webview_height_ratio: 'tall',
                messenger_extensions: appConfig.isProd
            };

            const buttons = [{
                "title": "Khám phá",
                "type": "postback",
                payload: `ZZZ_BRIDGE_KHAM_PHA_AAA:${bridges[i]._id.toString()}`
            },
            {
                "title": "Bản đồ",
                "type": "web_url",
                "url": bridges[i].map
            },
            {
                "title": "Chi tiết",
                "type": "web_url",
                "url": bridges[i].url
            }];
            bridgeElem["buttons"] = buttons;

            bridgeElements.push(bridgeElem);
        }
        if (bridgeElements && bridgeElements.length > 0) {
            sessionHelper.sendElementsMessage(session, bridgeElements);
        } else {
            let message = "Xin lỗi, chúng hiện không có chương trình khuyến mãi nào cả.";
            sessionHelper.sendTextMessage(session, message);
        }
    })
}

module.exports.sendNature = (username, session) => {
    let message = "Xin chào bạn đến với những cảnh quan thiên nhiên tại Đà Nẵng.";
    sessionHelper.sendTextMessage(session, message);
    natureService.getAll().then(natures => {
        let tnElements = [];
        for (let i = 0; Math.min(i < natures.length, constants.N_DISPLAY); i++) {
            let tnElement = {};
            tnElement["title"] = natures[i].name;
            tnElement["image_url"] = natures[i].image;
            tnElement["subtitle"] = natures[i].description;
            tnElement["default_action"] = {
                type: 'web_url',
                url: natures[i].url
            };

            const buttons = [{
                "title": "Khám phá",
                "type": "postback",
                payload: `ZZZ_NATURE_KHAM_PHA_AAA:${natures[i]._id.toString()}`
            },
            // {
            //     "title": "Bản đồ",
            //     "type": "web_url",
            //     "url": natures[i].map
            // },
            {
                "title": "Chi tiết",
                "type": "web_url",
                "url": natures[i].url
            }];
            tnElement["buttons"] = buttons;

            tnElements.push(tnElement);
        }
        if (tnElements && tnElements.length > 0) {
            sessionHelper.sendElementsMessage(session, tnElements);
        } else {
            let message = "Xin lỗi, chúng hiện không có chương trình khuyến mãi nào cả.";
            sessionHelper.sendTextMessage(session, message);
        }
    })
}

module.exports.sendVanhoa = (username, session) => {
    let message = "Xin chào bạn đến với Văn hóa Đà Nẵng.";
    sessionHelper.sendTextMessage(session, message);
    vanhoaService.getAll().then(vanhoas => {
        let vhElements = [];
        for (let i = 0; Math.min(i < vanhoas.length, constants.N_DISPLAY); i++) {
            let vhElement = {};
            vhElement["title"] = vanhoas[i].name;
            vhElement["image_url"] = vanhoas[i].image;
            vhElement["subtitle"] = vanhoas[i].description;
            vhElement["default_action"] = {
                type: 'web_url',
                url: vanhoas[i].url
            };

            const buttons = [{
                "title": "Khám phá",
                "type": "postback",
                payload: `ZZZ_VANHOA_KHAM_PHA_AAA:${vanhoas[i]._id.toString()}`
            },
            // {
            //     "title": "Bản đồ",
            //     "type": "web_url",
            //     "url": vanhoas[i].map
            // },
            {
                "title": "Chi tiết",
                "type": "web_url",
                "url": vanhoas[i].url
            }];
            vhElement["buttons"] = buttons;

            vhElements.push(vhElement);
        }
        if (vhElements && vhElements.length > 0) {
            sessionHelper.sendElementsMessage(session, vhElements);
        } else {
            let message = "Xin lỗi, chúng hiện không có chương trình khuyến mãi nào cả.";
            sessionHelper.sendTextMessage(session, message);
        }
    })
}

module.exports.sendSukien = (username, session) => {
    sukienService.getAll().then(sukiens => {
        let skElements = [];
        for (let i = 0; Math.min(i < sukiens.length, constants.N_DISPLAY); i++) {
            let skElement = {};
            skElement["title"] = sukiens[i].name;
            skElement["image_url"] = sukiens[i].image;
            skElement["subtitle"] = sukiens[i].description;
            skElement["default_action"] = {
                type: 'web_url',
                url: sukiens[i].url
            };
            const buttons = [{
                "title": "Chi tiết",
                "type": "web_url",
                "url": sukiens[i].url
            }];
            skElement["buttons"] = buttons;
            skElements.push(skElement);
        }
        if (skElements && skElements.length > 0) {
            sessionHelper.sendElementsMessage(session, skElements);
        } else {
            let message = "Xin lỗi, chúng hiện không có chương trình khuyến mãi nào cả.";
            sessionHelper.sendTextMessage(session, message);
        }
    })
}

module.exports.sendAbout = (username, session) => {
    aboutdnService.getAll().then(aboutdns => {
        let promoElements = [];
        for (let i = 0; Math.min(i < aboutdns.length, constants.N_DISPLAY); i++) {
            let promoElem = {};
            promoElem["title"] = aboutdns[i].name;
            promoElem["image_url"] = aboutdns[i].image;
            promoElem["subtitle"] = aboutdns[i].description;
            promoElem["default_action"] = {
                type: 'web_url',
                url: aboutdns[i].url
            };

            const buttons = [{
                "title": "Chi tiết",
                "type": "web_url",
                "url": aboutdns[i].url
            }];
            promoElem["buttons"] = buttons;

            promoElements.push(promoElem);
        }
        if (promoElements && promoElements.length > 0) {
            sessionHelper.sendElementsMessage(session, promoElements);
        } else {
            let message = "Xin lỗi, chúng hiện không có chương trình khuyến mãi nào cả.";
            sessionHelper.sendTextMessage(session, message);
        }
    })
}

module.exports.sendThamquan = (username, session) => {
    let quick_replies = [];

    let quick_reply1 = {
        content_type: "text",
        title: "Các cây cầu",
        payload: 'ZZZZZZ_COMMAND_BRIDGE_AAAAAA_'
    }

    let quick_reply2 = {
        content_type: "text",
        title: "Thiên nhiên",
        payload: 'ZZZZZZ_COMMAND_NATURE_AAAAAA_'
    }

    let quick_reply3 = {
        content_type: "text",
        title: "Văn hóa",
        payload: 'ZZZZZZ_COMMAND_VANHOA_AAAAAA_'
    }
    quick_replies.push(quick_reply1);
    quick_replies.push(quick_reply2);
    quick_replies.push(quick_reply3);

    let card = {
        facebook: {
            text: "Tôi sẽ giúp bạn tìm hiểu nhiều hơn về Đà Nẵng. \nGõ tin nhắn hoặc nhấn vào những nút dưới  để bắt đầu!",
            quick_replies: quick_replies,
        }
    };
    session.send(new builder.Message(session).sourceEvent(card));
    session.endConversation();
}


module.exports.bridgeKhamPha = (session) => {
    const bridgeId = session.message.text.split(':').pop();
    bridgeService.getById(bridgeId).then(bridge => {
        session.send(bridge.description);
        const textMsg = 'Bạn có muốn khám phá tiếp không?';
        const quick_replies = [
            {
                content_type: "text",
                title: "Có",
                payload: `ZZZ_KHAM_PHA_YES_AAA:${bridgeId}`
            },
            {
                content_type: "text",
                title: "Không",
                payload: `ZZZZZZ_COMMAND_THAMQUAN_AAAAAA`
            }
        ]
        let card = {
            facebook: {
                text: textMsg,
                quick_replies: quick_replies
            }
        };
        session.send(new builder.Message(session).sourceEvent(card));
        session.endConversation();
    })
}

module.exports.natureKhamPha = (session) => {
    const natureId = session.message.text.split(':').pop();
    natureService.getById(natureId).then(nature => {
        session.send(nature.description);
        const textMsg = 'Bạn có muốn khám phá tiếp không?';
        const quick_replies = [
            {
                content_type: "text",
                title: "Có",
                payload: `ZZZ_KHAM_PHA_YES_NA_AAA:${natureId}`
            },
            {
                content_type: "text",
                title: "Không",
                payload: `ZZZZZZ_COMMAND_THAMQUAN_AAAAAA`
            }
        ]
        let card = {
            facebook: {
                text: textMsg,
                quick_replies: quick_replies
            }
        };
        session.send(new builder.Message(session).sourceEvent(card));
        session.endConversation();
    })
}

module.exports.vanhoaKhamPha = (session) => {
    const vanhoaId = session.message.text.split(':').pop();
    vanhoaService.getById(vanhoaId).then(vanhoa => {
        session.send(vanhoa.description);
        const textMsg = 'Bạn có muốn khám phá tiếp không?';
        const quick_replies = [
            {
                content_type: "text",
                title: "Có",
                payload: `ZZZ_KHAM_PHA_YES_VA_AAA:${vanhoaId}`
            },
            {
                content_type: "text",
                title: "Không",
                payload: `ZZZZZZ_COMMAND_THAMQUAN_AAAAAA`
            }
        ]
        let card = {
            facebook: {
                text: textMsg,
                quick_replies: quick_replies
            }
        };
        session.send(new builder.Message(session).sourceEvent(card));
        session.endConversation();
    })
}

module.exports.chatWithAdmin = (username, session) => {
    session.userData.sessInfo.chatting = true;
    let floatingButtons = [FloatingButtons.StopChatting];
    let waitAMinuteText = "Đợi 1 chút admin sẽ trả lời bạn trong giây lát.";
    if (session.message.text == "ZZZZZZ_CHAT_WITH_ADMIN_AAAAAA_") {
        let card = {
            facebook: {
                text: waitAMinuteText,
                quick_replies: quickrepliesHelper.buildQuickRepliesSPBot(session, floatingButtons),
            }
        };
        sessionHelper.sendMessage(session, new builder.Message(session).sourceEvent(card));
    }
}

module.exports.stopChatting = (username, session) => {
    session.userData.sessInfo.chatting = false;
    let thanksText = "Cảm ơn, bạn cần thông tin gì nữa không?";
    sessionHelper.sendTextMessage(session, thanksText);
}

module.exports.sendGiaVeB = (username, session) => {

    let text = session.message.text;

    let bridgeId = text.split(':').pop();
    bridgeService.getById(bridgeId).then(bridge => {
        console.log(bridge)
        session.send('Price: ' + bridge.price);
        session.endConversation();
    })

}
module.exports.sendGiaVeN = (username, session) => {

    let text = session.message.text;

    let natureId = text.split(':').pop();
    natureService.getById(natureId).then(nature => {
        console.log(nature)
        session.send('Price: ' + nature.price);
        session.endConversation();
    })

}
module.exports.sendGiaVeV = (username, session) => {

    let text = session.message.text;

    let vanhoaId = text.split(':').pop();
    vanhoaService.getById(vanhoaId).then(vanhoa => {
        console.log(vanhoa)
        session.send('Price: ' + vanhoa.price);
        session.endConversation();
    })

}
module.exports.sendDiachiB = (username, session) => {

    let text = session.message.text;

    let bridgeId = text.split(':').pop();
    bridgeService.getById(bridgeId).then(bridge => {
        console.log(bridge)
        session.send('Địa chỉ: ' + bridge.add);
        session.endConversation();
    })

}
module.exports.sendDiachiN = (username, session) => {

    let text = session.message.text;

    let natureId = text.split(':').pop();
    natureService.getById(natureId).then(nature => {
        console.log(nature)
        session.send('Địa chỉ: ' + nature.add);
        session.endConversation();
    })

}
module.exports.sendDiachiV = (username, session) => {

    let text = session.message.text;

    let vanhoaId = text.split(':').pop();
    vanhoaService.getById(vanhoaId).then(vanhoa => {
        console.log(vanhoa)
        session.send('Địa chỉ: ' + vanhoa.add);
        session.endConversation();
    })

}
module.exports.sendVideoB = (username, session) => {

    let text = session.message.text;

    let bridgeId = text.split(':').pop();
    bridgeService.getById(bridgeId).then(bridge => {
        console.log(bridge)
        session.send('Địa chỉ: ' + bridge.video);
        session.endConversation();
    })

}
module.exports.sendVideoN = (username, session) => {

    let text = session.message.text;

    let natureId = text.split(':').pop();
    natureService.getById(natureId).then(nature => {
        console.log(nature)
        session.send('Địa chỉ: ' + nature.video);
        session.endConversation();
    })

}
module.exports.sendVideoV = (username, session) => {

    let text = session.message.text;

    let vanhoaId = text.split(':').pop();
    vanhoaService.getById(vanhoaId).then(vanhoa => {
        console.log(vanhoa)
        session.send('Địa chỉ: ' + vanhoa.video);
        session.endConversation();
    })

}
module.exports.sendMapB = (username, session) => {

    let text = session.message.text;

    let bridgeId = text.split(':').pop();
    bridgeService.getById(bridgeId).then(bridge => {
        console.log(bridge)
        session.send('Địa chỉ: ' + bridge.map);
        session.endConversation();
    })

}
module.exports.sendMapN = (username, session) => {

    let text = session.message.text;

    let natureId = text.split(':').pop();
    natureService.getById(natureId).then(nature => {
        console.log(nature)
        session.send('Địa chỉ: ' + nature.map);
        session.endConversation();
    })

}
module.exports.sendMapV = (username, session) => {

    let text = session.message.text;

    let vanhoaId = text.split(':').pop();
    vanhoaService.getById(vanhoaId).then(vanhoa => {
        console.log(vanhoa)
        session.send('Địa chỉ: ' + vanhoa.map);
        session.endConversation();
    })

}
module.exports.yesKhamPhaBr = (session) => {
    const bridgeId = session.message.text.split(':').pop();

    bridgeService.getById(bridgeId).then(bridge => {
        const elements = [
            {
                "title": bridge.name,
                "image_url": bridge.image,
                "buttons": [
                    {
                        "title": "Giá vé",
                        "type": "postback",
                        payload: `ZZZ_BRIDGE_GIA_VE_AAA:${bridge._id.toString()}`
                    },
                    {
                        "title": "Địa chỉ",
                        "type": "postback",
                        payload: `ZZZ_BRIDGE_DIA_CHI_AAA:${bridge._id.toString()}`
                    },
                    {
                        "title": "Video",
                        "type": "web_url",
                        "url": bridge.video
                    },
                    // {
                    //     "title": "Visit website",
                    //     "type": "postback",
                    //     payload: `ZZZ_BRIDGE_URL_AAA:${bridge._id.toString()}`
                    // },
                ]
            }
        ]

        sessionHelper.sendElementsMessage(session, elements);
    })

}

module.exports.yesKhamPhaNa = (session) => {
    const natureId = session.message.text.split(':').pop();

    natureService.getById(natureId).then(nature => {
        const elements = [
            {
                "title": nature.name,
                "image_url": nature.image,
                "buttons": [
                    {
                        "title": "Giá vé",
                        "type": "postback",
                        payload: `ZZZ_NATURE_GIA_VE_AAA:${nature._id.toString()}`
                    },
                    {
                        "title": "Địa chỉ",
                        "type": "postback",
                        payload: `ZZZ_NATURE_DIA_CHI_AAA:${nature._id.toString()}`
                    },
                    {
                        "title": "Video",
                        "type": "web_url",
                        "url": nature.video
                    },
                    // {
                    //     "title": "Visit website",
                    //     "type": "postback",
                    //     payload: `ZZZ_BRIDGE_URL_AAA:${bridge._id.toString()}`
                    // },
                ]
            }
        ]

        sessionHelper.sendElementsMessage(session, elements);
    })

}

module.exports.yesKhamPhaVa = (session) => {
    const vanhoaId = session.message.text.split(':').pop();

    vanhoaService.getById(vanhoaId).then(vanhoa => {
        const elements = [
            {
                "title": vanhoa.name,
                "image_url": vanhoa.image,
                "buttons": [
                    {
                        "title": "Giá vé",
                        "type": "postback",
                        payload: `ZZZ_VANHOA_GIA_VE_AAA:${vanhoa._id.toString()}`
                    },
                    {
                        "title": "Địa chỉ",
                        "type": "postback",
                        payload: `ZZZ_VANHOA_DIA_CHI_AAA:${vanhoa._id.toString()}`
                    },
                    {
                        "title": "Video",
                        "type": "web_url",
                        "url": vanhoa.video
                    },
                    // {
                    //     "title": "Visit website",
                    //     "type": "postback",
                    //     payload: `ZZZ_BRIDGE_URL_AAA:${bridge._id.toString()}`
                    // },
                ]
            }
        ]

        sessionHelper.sendElementsMessage(session, elements);
    })

}