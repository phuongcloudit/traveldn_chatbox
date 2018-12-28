const mongoose = require('mongoose'),
    Vanhoa = mongoose.model('Vanhoa');


module.exports.getAll = (_id) => {
    return new Promise((resolve, reject) => {
        Vanhoa.find()
            .then(vanhoas => resolve(vanhoas))
            .catch(err => reject(err));
    });
}

module.exports.getById = (id) => {
    return new Promise((resolve, reject) => {
        Vanhoa.findById(id)
            .then(vanhoa => resolve(vanhoa))
            .catch(err => reject(err));
    });
}