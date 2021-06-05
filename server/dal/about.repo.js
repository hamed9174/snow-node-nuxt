const baseRepo = require('./base.repo')
const mongoDb = require('mongodb')
const repo = {
    fetch: (next) => {
        baseRepo.connect((err , db ) => {
            if (err) next(err)
            else db.collection('about').find({}).toArray(next);
        })
    },
    findById:(aboutId , next) =>{
        baseRepo.connect((err , db) =>{
            if (err) next(err)
            else {
                const objID = new mongoDb.ObjectID(aboutId)
                db.collection('about').findOne({_id : objID} , next)
            }
        })
    },
    update:(id ,about , next) =>{
        baseRepo.connect((err , db) =>{
            if (err) next(err)
            else {
                const objID = new mongoDb.ObjectID(id)

                db.collection('about').updateOne({_id : objID},{$set : about}, next)
            }
        })
    }
}

module.exports = repo