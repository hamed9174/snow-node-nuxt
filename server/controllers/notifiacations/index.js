const notificationRepo = require('../../dal/notifacations.repo');

const controller = {
    fetchAll : (req , res) => {
        // fetch all notifications
        notificationRepo.fetchAll((err , data) => {
            if (err) {
                res.status('500')
                res.send(err)
            } else {
                // send data to client
                res.send(data)
            }
        })
    },
    update:(req , res) => {
        let notification = req.body
        notificationRepo.findById(notification._id , (err , data) => {
            if (err) {
                res.status('500').send(err)
            }
            else if(!data) res.status('400').send(err)
            else {
                data.read = true;
                notificationRepo.update(data._id , data , (err , result) => {
                    if (err) res.status('500').send(err);
                    else {
                        notificationRepo.fetchAll((err , data) => {
                            if (err) {
                                res.status('500')
                                res.send(err)
                            } else {
                                // send data to client
                                res.send(data)
                            }
                        })
                    }
                })
            }
        })
    },
}

module.exports = controller