const contactRepo = require('../../dal/contact.repo')
const controller = {
    fetchAll : (req , res) => {
        // send result to client
        contactRepo.fetchAll((err , data) => {
            if (err) res.status(500).send(err)
            else res.send(data)
        })
    },
    create:(req , res) => {
        let contact = req.body
        contactRepo.create(contact , (err , result) => {
            if (err) {
                res.status('500').send(err)
            }
            else {
                res.send(result)
            }
        })
    },
    delete:(req , res) => {
        const contact = req.body
        contactRepo.delete(contact._id , (err , result) =>{
            if (err) {
                res.status('500').send(err)
            } else {
                contactRepo.fetchAll((err , data) => {
                    if (err) res.status(500).send(err)
                    else res.send(data)
                })
            }
        })
    }
}

module.exports = controller