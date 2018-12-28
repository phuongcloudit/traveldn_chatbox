const mongoose = require('mongoose'),
    Aboutdn = mongoose.model('Aboutdn');


module.exports.getAll = (_id) => {
    return new Promise((resolve, reject) => {
        Aboutdn.find()
            .then(aboutdns => resolve(aboutdns))
            .catch(err => reject(err));
    });
}

module.exports.getById = (id) => {
    return new Promise((resolve, reject) => {
        Aboutdn.findById(id)
            .then(aboutdn => resolve(aboutdn))
            .catch(err => reject(err));
    });
}
