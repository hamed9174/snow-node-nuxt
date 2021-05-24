const baseRepo = require('./base.repo')
const mongoDb = require('mongodb')

const repo = {
    create : (comment , next) => {
        baseRepo.connect((err , db ) => {
            if (err) next(err)
            else {
                db.collection('comments').insertOne(comment , next);
            }
        })
    },
    fetchAll: (next) => {
        baseRepo.connect((err , db ) => {
            if (err) next(err)
            else {
                db.collection('comments').find({}).toArray(next);
            }
        })
    },
    fetchUser:(userId, next) => {
        baseRepo.connect((err , db ) => {
            if (err) next(err)
            else {
                db.collection('comments').find({userId : userId}).toArray(next);
            }
        })
    },
    findById:(_id, next) =>{
        baseRepo.connect((err , db) =>{
            if(err) next(err)
            else {
                let objId = new mongoDb.ObjectID(_id);
                db.collection('comments').findOne({_id : objId}, next)
            }
        })
    },
    updateReply : (_id , comment  , next) =>{
        baseRepo.connect((err , db) =>{
            if(err) next(err)
            else {
                let objId = new mongoDb.ObjectID(_id);
                db.collection('comments').updateOne({_id : objId},{$set : comment}, next)
            }
        })
    },
    delete:(comment_id , next) => {
        baseRepo.connect((err , db) =>{
            if(err) next(err)
            else {
                let objId = new mongoDb.ObjectID(comment_id);
                db.collection('comments').deleteOne({_id : objId}, next)
            }
        })
    },
    update:(_id ,comment, next) => {
        console.log(comment)
        baseRepo.connect((err , db) =>{
            if(err) next(err)
            else {
                let objId = new mongoDb.ObjectID(_id);
                db.collection('comments').updateOne({_id : objId},{$set:comment}, next)
            }
        })
    }
}

module.exports = repo