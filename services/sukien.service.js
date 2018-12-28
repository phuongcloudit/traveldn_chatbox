const mongoose = require('mongoose'),
Sukien = mongoose.model('Sukien');


module.exports.getAll = (_id) => {
    return new Promise((resolve, reject) => {
        Sukien.find()
            .then(sukiens => resolve(sukiens))
            .catch(err => reject(err));
    });
}

module.exports.getById = (id) => {
    return new Promise((resolve, reject) => {
        Sukien.findById(id)
            .then(sukien => resolve(sukien))
            .catch(err => reject(err));
    });
}
