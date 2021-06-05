const baseRepo = require('./base.repo')
const mongoDb = require('mongodb')
const repo = {
    fetchAll: (next) => {
        baseRepo.connect((err , db ) => {
            if (err) next(err)
            else db.collection('blogs').find({}).toArray(next);
        })
    },
    create:(blog , next) => {
        baseRepo.connect((err , db ) => {
            if (err) next(err)
            else db.collection('blogs').insertOne(blog , next);
        })
    },
    delete:(blogId , next) =>{
        baseRepo.connect((err , db) =>{
            if (err) next(err)
            else {
                const objID = new mongoDb.ObjectID(blogId)
                db.collection('blogs').deleteOne({_id : objID} , next)
            }
        })
    },
    findById:(blogId , next) =>{
        baseRepo.connect((err , db) =>{
            if (err) next(err)
            else {
                const objID = new mongoDb.ObjectID(blogId)
                db.collection('blogs').findOne({_id : objID} , next)
            }
        })
    },
    update:(id ,blog , next) =>{
        baseRepo.connect((err , db) =>{
            if (err) next(err)
            else {
                const objID = new mongoDb.ObjectID(id)

                db.collection('blogs').updateOne({_id : objID},{$set : blog}, next)
            }
        })
    }
}

module.exports = repo