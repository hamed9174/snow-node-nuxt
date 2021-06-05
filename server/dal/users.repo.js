const baseRepo = require('./base.repo');
const mongoDb = require('mongodb')
const jwt = require('jsonwebtoken')

const repo = {
    findById:(id , next) => {
        baseRepo.connect((err , db) => {
            if(err) next(err)
            else {
                let objId = new mongoDb.ObjectID(id)
                db.collection('users').findOne({_id : objId} , next)
            }
        })
    },
    findByUsername:(username , next) =>{
        baseRepo.connect((err , db) => {
            if(err) next(err)
            else db.collection('users').findOne({username} , next)
        })
    },
    create: (user , next) =>{
        baseRepo.connect((err , db) =>{
            if (err) next(err)
            else {
                db.collection('users').insertOne(user,next);
            }
        })
    },
    generateToken: function (username , next) {
        this.findByUsername(username , (err , user) =>{
            if(err) next(err);
            else if(!user) next(new Error('کاربر وجود ندارد'))
            else {
                const token = jwt.sign({_id:user._id , username : user.username} , 'kmbjn898&*&^Y65fgVcbg');
                user.token = token;
                user.tokens = user.tokens || [];
                delete user.tokens
                this.update(user, (err , result) => {
                    if (err) next(err)
                    else next(null, token)
                })
            }
        })
    },
    update: (user , next) =>{
        baseRepo.connect((err , db) => {
            if (err) next(err);
            else {
                const objId = new mongoDb.ObjectID(user._id);
                db.collection('users').updateOne({_id : objId}, {$set : user} , next)
            }
        })
    }
}

module.exports = repo