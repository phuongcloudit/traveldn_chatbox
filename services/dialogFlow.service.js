const request = require('request'),
    constants = require('../common/constants');

module.exports.queryIntent = (text) => {
    return new Promise((resolve, reject) => {
        let options = {
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + constants.dialogFlow.CLIENT_ACCESS_TOKEN
            },
            url: constants.dialogFlow.URL,
            body: JSON.stringify({
                "lang": "en",
                "query": text,
                "sessionId": "12345",
                "timezone": "America/New_York"
            })
        }
        request.post(options, (err, res, body) => {
            if (err) {
                resolve({ success: false })
                console.log('err', err);
            } else {
                resolve(getAnswerFromResponse(JSON.parse(res.body)))
            }
        })
    })
}

function getAnswerFromResponse(body) {
    if (body && body.status && body.status.code == '200') {
        return { success: true, answer: body.result.fulfillment.speech };
    } else {
        return { success: false };
    }
}