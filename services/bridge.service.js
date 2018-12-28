const mongoose = require('mongoose'),
    Bridge = mongoose.model('Bridge');


module.exports.getAll = (_id) => {
    return new Promise((resolve, reject) => {
        Bridge.find()
            .then(bridges => resolve(bridges))
            .catch(err => reject(err));
    });
}

module.exports.getById = (id) => {
    return new Promise((resolve, reject) => {
        Bridge.findById(id)
            .then(bridge => resolve(bridge))
            .catch(err => reject(err));
    });
}
