const baseRepo = require('./base.repo');
const mongoDb = require('mongodb')


const repo = {
    fetchAll: (next) => {
        baseRepo.connect((err , db) => {
            if (err) next(err)
            else {
                db.collection('portfolios').find({}).toArray(next)
            }
        })
    },
    create:(portfolio , next) => {
        baseRepo.connect((err , db ) => {
            if (err) next(err)
            else db.collection('portfolios').insertOne(portfolio , next);
        })
    },
    delete:(portfolioId , next) =>{
        baseRepo.connect((err , db) =>{
            if (err) next(err)
            else {
                const objID = new mongoDb.ObjectID(portfolioId)
                db.collection('portfolios').deleteOne({_id : objID} , next)
            }
        })
    },
    findById:(portfolioId , next) =>{
        baseRepo.connect((err , db) =>{
            if (err) next(err)
            else {
                const objID = new mongoDb.ObjectID(portfolioId)
                db.collection('portfolios').findOne({_id : objID} , next)
            }
        })
    },
    update:(id ,portfolio , next) =>{
        baseRepo.connect((err , db) =>{
            if (err) next(err)
            else {
                const objID = new mongoDb.ObjectID(id)

                db.collection('portfolios').updateOne({_id : objID},{$set : portfolio}, next)
            }
        })
    }
}

module.exports = repo