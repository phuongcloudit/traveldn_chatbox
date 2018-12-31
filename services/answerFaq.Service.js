const AnswerFaq = require('mongoose').model('AnswerFaq'),
      Intent = require('mongoose').model('Intent');

module.exports.getAll = (providerId) => {
    return new Promise((resolve) => {
        let query = {
            isDeleted: false,
            provider: providerId,
        }
        AnswerFaq.find(query).populate('intent', 'field description').then(answerFaqs => {
            resolve({ success: true, data: answerFaqs });
        }).catch(err => {
            console.log(err);
            resolve({ success: false });
        })
    })
}

module.exports.update = (body) => {
    return new Promise((resolve) => {
        AnswerFaq.findById(body._id).then(answerFaq => {
            if (answerFaq) {
                answerFaq.content = body.content;
                answerFaq.save().then(() => {
                    resolve({ success: true });
                }).catch(err => resolve({ success: false }));
            } else {
                resolve({ success: false });
            }
        })
    })
}

module.exports.getAnswerFaqByIntentAndProviderId = (field) =>{
    return new Promise((resolve)=>{
        let query = {
            "field": field
        }
        Intent.findOne(query).then(intent =>{
            if(intent){
                resolve({success: true, data: intent.answer});
            }else{
                resolve({success: false});
            }
        }).catch(err => {
            console.log(err);
            resolve({success: false});
        })
    })
}