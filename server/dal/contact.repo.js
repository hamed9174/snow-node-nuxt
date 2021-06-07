const baseRepo = require('./base.repo')
const mongoDb = require('mongodb')
const repo = {
    fetchAll: (next) => {
        baseRepo.connect((err , db ) => {
            if (err) next(err)
            else db.collection('contact').find({}).toArray(next);
        })
    },
    create: (contact , next) => {
        baseRepo.connect((err , db ) => {
            if (err) next(err)
            else db.collection('contact').insertOne(contact , next);
        })
    },
    delete: (id , next) => {
        baseRepo.connect((err , db ) => {
            if (err) next(err)
            else {
                const objId = new mongoDb.ObjectID(id)
                db.collection('contact').deleteOne({_id : objId}, next);
            }
        })
    },
}

module.exports = repo