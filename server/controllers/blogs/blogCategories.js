const blogCategoriesRepo = require('../../dal/blogCategries.repo')

const controller = {
    fetchAll: (req , res) => {
        blogCategoriesRepo.fetchAll((err , data) => {
            if (err) res.status(500).send(err)
            else res.send(data)
        })
    }
}

module.exports = controller