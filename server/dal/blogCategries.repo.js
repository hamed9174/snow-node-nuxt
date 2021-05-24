const baseRepo = require('./base.repo')

const repo = {
    fetchAll: (next) => {
        baseRepo.connect((err , db ) => {
            if (err) next(err)
            else {
                db.collection('blogCategories').find({}).toArray(next);
            }
        })
    }
}

module.exports = repo