// This service is used to push notification to devices via FCM (Firebase Cloud Messaging)
const
    appConfig = require('../statics/app.config'),
    request = require('request');

function BuildFCMNotificationItem(deviceTokens, itemType, item, message) {
    return {
        registration_ids: deviceTokens,
        collapse_key: "type_a",
        notification: {
            "title": "SP BOT",
            "body": message,
            "icon": "icon",
            "sound": "default",
            "click_action": "FCM_PLUGIN_ACTIVITY"
        },
        data: {
            "itemType": itemType,
            "item": item
        }
    }
}

