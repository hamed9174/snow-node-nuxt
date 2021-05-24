const fs = require('fs')

const blogsRepo = require('../../dal/blogs.repo')
const controller = {
    fetchAll : (req , res) => {
        blogsRepo.fetchAll((err , data) => {
            if (err) {
                res.status('500')
                res.send(err)
            } else {
                res.send(data)
            }
        })
    }
}

module.exports = controller