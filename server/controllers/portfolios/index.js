const portfoliosRepo = require('../../dal/portfolios.repo')
const controller = {
    fetchAll : (req , res) => {
        portfoliosRepo.fetchAll((err , data) => {
            if (err) res.status(500).send(err)
            else res.send(data)
        })
    }
}

module.exports = controller