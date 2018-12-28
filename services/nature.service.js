const mongoose = require('mongoose'),
    Nature = mongoose.model('Nature');


module.exports.getAll = (_id) => {
    return new Promise((resolve, reject) => {
        Nature.find()
            .then(natures => resolve(natures))
            .catch(err => reject(err));
    });
}

module.exports.getById = (id) => {
    return new Promise((resolve, reject) => {
        Nature.findById(id)
            .then(nature => resolve(nature))
            .catch(err => reject(err));
    });
}