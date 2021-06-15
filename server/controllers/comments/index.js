
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
        console.log(req.body)
        console.log(req.user)
        let getComment = req.body
        // // add Date to portfolio
        let d = new Date();
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        getComment.create_at.year = d.getFullYear()
        getComment.create_at.month = months[d.getMonth()]
        getComment.create_at.day = d.getDay()
        getComment.userId = req.user._id

        commentsRepo.create(getComment , (err) => {
            if (err) res.status(500).send(err)
            else {
                let message = getComment.username + 'added comment';
                commentsRepo.addNotification(message)
                commentsRepo.fetchAll((err , data) => {
                    if (err) res.status(500).send(err)
                    else res.send(data)
                })
            }
        })
    },
    deleteMy: (req , res) => {
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
    updateMy: (req , res) => {
        const message = req.body.message
        const orgComment = req.body.orgComment
        commentsRepo.findById(orgComment._id , (err , comment) => {
            if (err) res.status(500).send(err)
            else{
                comment.message = message;
                commentsRepo.updateReply(comment._id , comment , (err , result) =>{
                    if (err) res.status(500).send(err);
                    else {
                        commentsRepo.fetchAll((err , data) => {
                            if (err) res.status(500).send(err)
                            else res.send(data)
                        })
                    }
                })
            }
        })
    },
}

module.exports = controller