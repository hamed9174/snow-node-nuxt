const baseRepo = require('./base.repo');

const repo = {
    createImage: (data , next) => {
        baseRepo.connect((err , db) => {
            db.collection('images').insertOne(data , next);
        })
    },
    findAll:(next) => {
        baseRepo.connect((err , db) => {
            db.collection('images').find({}).toArray(next);
        })
    },
    findByName:(name , next) => {
    baseRepo.connect((err , db) => {
        db.collection('images').findOne({name} , next);
    })
},
}

module.exports = repo