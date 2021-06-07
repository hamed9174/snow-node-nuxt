const portfoliosRepo = require('../../dal/portfolios.repo');
const notificationRepo = require('../../dal/notifacations.repo');

const controller = {
    fetchAll : (req , res) => {
        // send result to client
        portfoliosRepo.fetchAll((err , data) => {
            if (err) res.status(500).send(err)
            else res.send(data)
        })
    },
    fetchPortfolio: (req , res) => {
        let id = req.params.id
        // fetch Portfolio
        portfoliosRepo.findById(id ,(err , data) => {
            if (err) {
                res.status('500')
                res.send(err)
            } else {
                // send data to client
                res.send(data)
            }
        })
    },
    create:(req , res) => {
        let portfolio = req.body;

        // // add Date to portfolio
        let d = new Date();
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        portfolio.create_at.year = d.getFullYear()
        portfolio.create_at.month = months[d.getMonth()]
        portfolio.create_at.day = d.getDay()

        // add comment key
        portfolio.comments = []

        // create portfolios
        portfoliosRepo.create(portfolio ,(err , result) => {
            if (err) {
                res.status('500')
                res.send(err)
            } else {
                // send result to client
                portfoliosRepo.fetchAll((err , data) => {
                    if(err) res.status(500).send(err)
                    else {
                        res.send(data)
                    }
                })
            }
        })
    },
    delete:(req , res) => {
        let portfolio = req.body
        // delete portfolio
        portfoliosRepo.delete(portfolio._id ,(err , result) => {
            if (err) {
                res.status('500')
                res.send(err)
            } else {
                // send data to client
                portfoliosRepo.fetchAll((err , data) => {
                    if(err) res.status(500).send(err)
                    else {
                        res.send(data)
                    }
                })
            }
        })
    },
    update:(req , res) => {
        let portfolio = req.body
        portfoliosRepo.findById(portfolio._id , (err , data) => {
            if (err) {
                res.status('500').send(err)
            }
            else if(!data) res.status('400').send(err)
            else {
                let id = data._id
                data = portfolio;
                data._id = id;

                // update portfolio
                portfoliosRepo.update(data._id , data , (err , result) => {
                    if (err) res.status('500').send(err);
                    else {
                        // send result to client
                        portfoliosRepo.fetchAll((err , data) => {
                            if(err) res.status(500).send(err)
                            else {
                                res.send(data)
                            }
                        })
                    }
                })
            }
        })
    },
    addComments: (req , res) => {
        let portfolio = req.body
        portfoliosRepo.findById(portfolio._id , (err , data) => {
            if (err) {
                res.status('500').send(err)
            }
            else if(!data) res.status('400').send(err)
            else {
                let id = data._id
                data = portfolio;
                data._id = id;
                portfoliosRepo.update(data._id , data , (err , result) => {
                    if (err) res.status('500').send(err);
                    else {
                        const message = `${req.user.username} added a comment`
                        notificationRepo.create(message)
                        portfoliosRepo.findById(id ,(err , data) => {
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