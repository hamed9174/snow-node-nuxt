const uploadRepo = require('../../dal/upload.repo')

const controller = {
    create : (req, res) => {
        let image = {};
        image.name = req.file.filename;
        image.userId = req.user._id;
        // image.alt = req.body.alt;
        uploadRepo.findByName(image.name , (err , data) => {
            if (data) res.status(400).send({msg: 'this image is exist'})
            else{
                uploadRepo.createImage(image , (err , data) => {
                    if (err) res.status(500).send(err)
                    else{
                        uploadRepo.findAll((err , data) => {
                            if (err) res.status(500).send(err)
                            else{
                                res.send(data)
                            }
                        })
                    }
                })
            }
        })

    },
    fetchAll:(req , res) => {
        uploadRepo.findAll((err , data) => {
            if (err) res.status(500).send(err)
            else{
                res.send(data)
            }
        })
    }
}

module.exports = controller