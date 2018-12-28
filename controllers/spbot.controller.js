const builder = require('botbuilder'),
    buttonSPBotService = require("../services/spbot/button.spbotservice"),
    responseBotService = require("../services/spbot/response.botservice"),
    spBotService = require('../services/spbot.service');

module.exports.bindDialogsToBot = (bot, username) => {
    bot.use(builder.Middleware.dialogVersion({
        version: 10,
        resetCommand: /^reset/i
    }));

    bot.use({
        botbuilder: spBotService.validateState
    });

    //=========================================================
    // Bots Global Actions
    //=========================================================

    bot.beginDialogAction('introduction', '/restart', {
        matches: /^ZZZZZZ_INTRODUCTION_AAAAAA_.*|Get Started|get started|GET_STARTED_PAYLOAD/i
    });
    bot.beginDialogAction('restart', '/restart', {
        matches: /^good morning$|^hi ad$|^chào bạn$|^chào ad$|^chao ad$|^ad oi$|^ad ơi$|^ad$|^ad$|^restart$|^retry$|^'restart'$|^chao ban$|^bat dau$|^start$|^hi$|^hi $|^hello $|^hello$|^bắt đầu$|^xin chào$|^xin chao$/i
    });
    bot.dialog('/', [function (session) {
        spBotService.main(username, session);
    }]);
    bot.beginDialogAction('aboutUs', '/aboutUs', {
        matches: /^ZZZZZZ_ABOUT_US_AAAAAA_.*/i
    });
    bot.beginDialogAction('sendBridge', '/sendBridge', {
        matches: /^ZZZZZZ_COMMAND_BRIDGE_AAAAAA_.*/i
    });
    bot.beginDialogAction('sendSukien', '/sendSukien', {
        matches: /^ZZZZZZ_COMMAND_SUKIEN_AAAAAA_.*/i
    });
    bot.beginDialogAction('sendThamquan', '/sendThamquan', {
        matches: /^ZZZZZZ_COMMAND_THAMQUAN_AAAAAA.*/i
    });
    bot.beginDialogAction('sendVanhoa', '/sendVanhoa', {
        matches: /^ZZZZZZ_COMMAND_VANHOA_AAAAAA_.*/i
    });
    bot.beginDialogAction('sendNature', '/sendNature', {
        matches: /^ZZZZZZ_COMMAND_NATURE_AAAAAA_.*/i
    });
    bot.beginDialogAction('sendGiaVe', '/sendGiaVe', {
        matches: /^ZZZ_BRIDGE_GIA_VE_AAA.*/i
    });
    bot.beginDialogAction('sendDiachiB', '/sendDiachiB', {
        matches: /^ZZZ_BRIDGE_DIA_CHI_AAA.*/i
    });
    bot.beginDialogAction('sendDiachiN', '/sendDiachiN', {
        matches: /^ZZZ_NATURE_DIA_CHI_AAA.*/i
    });
    bot.beginDialogAction('sendDiachiV', '/sendDiachiV', {
        matches: /^ZZZ_VANHOA_DIA_CHI_AAA.*/i
    });
    bot.beginDialogAction('sendVideo', '/sendVideo', {
        matches: /^ZZZ_BRIDGE_VIDEO_AAA.*/i
    });
    bot.beginDialogAction('sendMap', '/sendMap', {
        matches: /^ZZZ_BRIDGE_MAP_AAA.*/i
    });
    bot.beginDialogAction('sendGiaVe2', '/sendGiaVe2', {
        matches: /^ZZZ_NATURE_GIA_VE_AAA.*/i
    });
    bot.beginDialogAction('sendGiaVe3', '/sendGiaVe3', {
        matches: /^ZZZ_VANHOA_GIA_VE_AAA.*/i
    });
    bot.beginDialogAction('sendAbout', '/sendAbout', {
        matches: /^ZZZZZZ_ABOUTDN_AAAAAA_.*/i
    });
    bot.beginDialogAction('sendCarGetDirection', '/sendCardGetDirection', {
        matches: /^ZZZZZZ_COMMAND_GET_DIRECTION_AAAAAA_.*/i
    });
    bot.beginDialogAction('chatWithAdmin', '/chatWithAdmin', {
        matches: /^ZZZZZZ_CHAT_WITH_ADMIN_AAAAAA_.*/i
    });
    bot.beginDialogAction('stopChatting', '/stopChatting', {
        matches: /^ZZZZZZ_STOP_CHATTING_AAAAAA_.*|#STOP/i
    });
    bot.beginDialogAction('commandCat', '/commandCat', {
        matches: /^ZZZZZZ_COMMAND_CAT_AAAAAA_.*/i
    }); 

    bot.beginDialogAction('khamPha', '/khamPha', {
        matches: /^demo*/i
    });
    bot.dialog('/khamPha', [function (session) {
        session.sendTyping();
        buttonSPBotService.khamPha(username, session);
    }]);

    bot.dialog('/chatWithAdmin', [function (session) {
        session.sendTyping();
        buttonSPBotService.chatWithAdmin(username, session);
    }]);
    bot.dialog('/stopChatting', [function (session) {
        session.sendTyping();
        buttonSPBotService.stopChatting(username, session);
    }]);
    bot.dialog('/restart', [function (session) {
        session.sendTyping();
        spBotService.restart(username, session);
    }]);
    bot.dialog('/sendDiachiB', [function (session) {
        session.sendTyping();
        buttonSPBotService.sendDiachiB(username, session);
    }]);
    bot.dialog('/sendDiachiV', [function (session) {
        session.sendTyping();
        buttonSPBotService.sendDiachiV(username, session);
    }]);
    bot.dialog('/sendDiachiN', [function (session) {
        session.sendTyping();
        buttonSPBotService.sendDiachiN(username, session);
    }]);
    bot.dialog('/sendVideo', [function (session) {
        session.sendTyping();
        buttonSPBotService.sendVideo(username, session);
    }]);
    bot.dialog('/sendMap', [function (session) {
        session.sendTyping();
        buttonSPBotService.sendMap(username, session);
    }]);
    bot.dialog('/aboutUs', [function (session) {
        session.sendTyping();
        buttonSPBotService.sendAboutUs(username, session);
    }]);
    bot.dialog('/contactUs', [function (session) {
        session.sendTyping();
        buttonSPBotService.contactUs(username, session);
    }]);
    bot.dialog('/sendBridge', [function (session, args) {
        session.sendTyping();
        buttonSPBotService.sendBridge(session);
    }]);
    bot.dialog('/sendSukien', [function (session, args) {
        session.sendTyping();
        buttonSPBotService.sendSukien(username, session);
    }]);
    bot.dialog('/sendMenu', [function (session, args) {
        session.sendTyping();
        buttonSPBotService.sendMenu(username, session);
    }]);
    bot.dialog('/sendReservation', [function (session, args) {
        session.sendTyping();
        buttonSPBotService.sendCardReservation(username, session);
    }]);
    bot.dialog('/sendThamquan', [function (session, args) {
        session.sendTyping();
        buttonSPBotService.sendThamquan(username, session);
    }]);
    bot.dialog('/sendVanhoa', [function (session, args) {
        session.sendTyping();
        buttonSPBotService.sendVanhoa(username, session);
    }]);
    bot.dialog('/sendNature', [function (session, args) {
        session.sendTyping();
        buttonSPBotService.sendNature(username, session);
    }]);
    bot.dialog('/sendGiaVe', [function (session, args) {
        session.sendTyping();
        buttonSPBotService.sendGiaVe(username, session);
    }]);
    bot.dialog('/sendGiaVe2', [function (session, args) {
        session.sendTyping();
        buttonSPBotService.sendGiaVe2(username, session);
    }]);
    bot.dialog('/sendGiaVe3', [function (session, args) {
        session.sendTyping();
        buttonSPBotService.sendGiaVe3(username, session);
    }]);
    bot.dialog('/commandCat', [function (session, args) {
        session.sendTyping();
        buttonSPBotService.commandCat(username, session);
    }]);
    bot.dialog('/sendAbout', [function (session, args) {
        session.sendTyping();
        buttonSPBotService.sendAbout(username, session);
    }]);
    bot.dialog('/sendCardGetDirection', [function (session, args) {
        session.sendTyping();
        buttonSPBotService.sendCardGetDirection(username, session);
    }]);
    bot.beginDialogAction('bridgeKhamPha', '/bridgeKhamPha', {
        matches: /^ZZZ_BRIDGE_KHAM_PHA_AAA.*/i
    });
    bot.beginDialogAction('vanhoaKhamPha', '/vanhoaKhamPha', {
        matches: /^ZZZ_VANHOA_KHAM_PHA_AAA.*/i
    });
    bot.beginDialogAction('natureKhamPha', '/natureKhamPha', {
        matches: /^ZZZ_NATURE_KHAM_PHA_AAA.*/i
    });
    bot.beginDialogAction('vanhoaKhamPha', '/vanhoaKhamPha', {
        matches: /^ZZZ_VANHOA_KHAM_PHA_AAA.*/i
    });
    bot.dialog('/bridgeKhamPha', [function (session) {
        buttonSPBotService.bridgeKhamPha(session);
    }]);
    bot.dialog('/vanhoaKhamPha', [function (session) {
        buttonSPBotService.vanhoaKhamPha(session);
    }]);
    bot.dialog('/natureKhamPha', [function (session) {
        buttonSPBotService.natureKhamPha(session);
    }]);
    bot.beginDialogAction('yesKhamPhaBr', '/yesKhamPhaBr', {
        matches: /^ZZZ_KHAM_PHA_YES_AAA.*/i
    });
    bot.dialog('/yesKhamPhaBr', [function (session) {
        buttonSPBotService.yesKhamPhaBr(session);
    }]);
    bot.beginDialogAction('yesKhamPhaVa', '/yesKhamPhaVa', {
        matches: /^ZZZ_KHAM_PHA_YES_VA_AAA.*/i
    });
    bot.dialog('/yesKhamPhaVa', [function (session) {
        buttonSPBotService.yesKhamPhaVa(session);
    }]);
    bot.beginDialogAction('yesKhamPhaNa', '/yesKhamPhaNa', {
        matches: /^ZZZ_KHAM_PHA_YES_NA_AAA.*/i
    });
    bot.dialog('/yesKhamPhaNa', [function (session) {
        buttonSPBotService.yesKhamPhaNa(session);
    }]);
    
}