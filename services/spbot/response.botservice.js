const customerService = require('../../services/customer.service'),
    helperBotService = require('../../services/spbot/helper.spbotservice'),
    sessionHelper = require('../../helpers/bot/facebook/session.helper'),
    enums = require("../../common/enums"),
    constants = require('../../common/constants'),
    BookStatus = enums.BookStatus,
    ShipStatus = enums.ShipStatus;


module.exports.responseShip = (session, shipItem) => {
    helperBotService.checkSess(session, session.message.user.id);
    switch (shipItem.status) {
        case ShipStatus.Accepted:
            let msgAccept = "Chúng tôi đã nhận được đơn đặt hàng của bạn, đơn hàng đang được xử lý.";
            sessionHelper.sendTextMessage(session, msgAccept);
            break;
        case ShipStatus.Refused:
            let msgRefused = "Xin lỗi, chúng tôi không thể chấp nhận đơn đặt hàng của bạn vào lúc này";
            session.send(msgRefused);
            let messageReason = `Lí do: ${shipItem.reasonRefuse}`
            sessionHelper.sendTextMessage(session, messageReason);
            break;
    }
}