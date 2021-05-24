
const commentsRepo = require('../../dal/comments.repo')


const controller = {
    fetchAll : (req , res) => {
        // read comments
        commentsRepo.fetchAll((err , data) => {
            if (err) res.status(500).send(err)
            else res.send(data)
        })
    },
    create : (req , res) => {
        let getComment = req.body
        getComment.userId = req.user._id
        commentsRepo.create(getComment , (err) => {
            if (err) res.status(500).send(err)
            else {
                commentsRepo.fetchUser(req.user._id,(err , data) => {
                    if (err) res.status(500).send(err)
                    else res.send(data)
                })
            }
        })
    },
    reply : (req , res) => {
        const replyComment = req.body.comment;
        const orgComment = req.body.orgComment
        commentsRepo.findById(orgComment._id , (err , comment) => {
            if (err) res.status(500).send(err)
            else{
                comment.replies.push(replyComment);
                commentsRepo.updateReply(comment._id , comment , (err , result) =>{
                    if (err) res.status(500).send(err);
                    else {
                        commentsRepo.fetchUser(comment.userId , (err , comments) => {
                            if (err) res.status(500).send(err);
                            else res.send(comments)
                        })
                    }
                })
            }
        })
    },
    delete: (req , res) => {
        const comment = req.body
        commentsRepo.delete(comment._id , (err , result) => {
            if (err) res.status(500).send(err)
            else {
                commentsRepo.fetchUser(req.user._id,(err , data) => {
                    if (err) res.status(500).send(err)
                    else res.send(data)
                })
            }
        })
    },
    update: (req , res) => {
        const message = req.body.message
        const orgComment = req.body.orgComment
        commentsRepo.findById(orgComment._id , (err , comment) => {
            if (err) res.status(500).send(err)
            else{
                comment.message = message;
                commentsRepo.updateReply(comment._id , comment , (err , result) =>{
                    if (err) res.status(500).send(err);
                    else {
                        commentsRepo.fetchUser(comment.userId , (err , comments) => {
                            if (err) res.status(500).send(err);
                            else res.send(comments)
                        })
                    }
                })
            }
        })
    },
}

module.exports = controller