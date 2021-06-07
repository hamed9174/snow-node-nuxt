const baseRepo = require('./base.repo')
const mongoDb = require('mongodb')
const repo = {
    fetchAll: (next) => {
        baseRepo.connect((err , db ) => {
            if (err) next(err)
            else db.collection('notifications').find({}).toArray(next);
        })
    },
    create:(message) => {
        baseRepo.connect((err , db ) => {
            if (err) console.log(err)
            else {
                const notification = {
                    message,
                    read : false
                };
                db.collection('notifications').insertOne(notification);
            }
        })
    },
    findById:(notificationId , next) =>{
        baseRepo.connect((err , db) =>{
            if (err) next(err)
            else {
                const objID = new mongoDb.ObjectID(notificationId)
                db.collection('notifications').findOne({_id : objID} , next)
            }
        })
    },
    update:(id ,notification , next) =>{
        baseRepo.connect((err , db) =>{
            if (err) next(err)
            else {
                const objID = new mongoDb.ObjectID(id)

                db.collection('notifications').updateOne({_id : objID},{$set : notification}, next)
            }
        })
    }
}

module.exports = repo