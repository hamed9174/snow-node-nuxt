const baseRepo = require('./base.repo');


const repo = {
    fetchAll: (next) => {
        baseRepo.connect((err , db) => {
            if (err) next(err)
            else {
                db.collection('portfolios').find({}).toArray(next)
            }
        })
    }
}

module.exports = repo