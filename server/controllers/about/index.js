const aboutRepo = require('../../dal/about.repo')
const controller = {
    fetch : (req , res) => {
        // send result to client
        aboutRepo.fetch((err , data) => {
            if (err) res.status(500).send(err)
            else res.send(data[0])
        })
    },
    update:(req , res) => {
        let about = req.body
        aboutRepo.findById(about._id , (err , data) => {
            if (err) {
                res.status('500').send(err)
            }
            else if(!data) res.status('400').send(err)
            else {
                let id = data._id
                data = about;
                data._id = id;

                // update about
                aboutRepo.update(data._id , data , (err , result) => {
                    if (err) res.status('500').send(err);
                    else {
                        // send result to client
                        aboutRepo.fetch((err , data) => {
                            if(err) res.status(500).send(err)
                            else {
                                res.send(data[0])
                            }
                        })
                    }
                })
            }
        })
    },
}

module.exports = controller