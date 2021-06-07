const notificationRepo = require('../../dal/notifacations.repo');
const blogsRepo = require('../../dal/blogs.repo');

const controller = {
    fetchAll : (req , res) => {
        // fetch all blogs
        blogsRepo.fetchAll((err , data) => {
            if (err) {
                res.status('500')
                res.send(err)
            } else {
                // send data to client
                res.send(data)
            }
        })
    },
    fetchBlog: (req , res) => {
        let id = req.params.id
        // // fetch blogs
        blogsRepo.findById(id ,(err , data) => {
            if (err) {
                res.status('500')
                res.send(err)
            } else {
                // send data to client
                res.send(data)
            }
        })
    },
    create: (req , res) => {
        let blog = req.body;

        // add Date to blog
        let d = new Date();
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        blog.create_at.year = d.getFullYear();
        blog.create_at.month = months[d.getMonth()];
        blog.create_at.day = d.getDay();

        // add comment key
        blog.comments = []

        // create blogs
        blogsRepo.create(blog ,(err , result) => {
            if (err) {
                res.status('500')
                res.send(err)
            } else {
                // send result to client
                blogsRepo.fetchAll((err , data) => {
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
    },
    addComments: (req , res) => {
        let blog = req.body
        blogsRepo.findById(blog._id , (err , data) => {
            if (err) {
                res.status('500').send(err)
            }
            else if(!data) res.status('400').send(err)
            else {
                let id = data._id
                data = blog;
                data._id = id;
                blogsRepo.update(data._id , data , (err , result) => {
                    if (err) res.status('500').send(err);
                    else {
                        const message = `${req.user.username} added a comment`
                        notificationRepo.create(message)
                        blogsRepo.findById(id , (err , data) => {
                            if (err) res.status(500).send(err);
                            else {
                                res.send(data)
                            }
                        })
                    }
                })
            }
        })
    },
    delete: (req , res) => {
        let blog = req.body
        // fetch all blogs
        blogsRepo.delete(blog._id ,(err , result) => {
            if (err) {
                res.status('500')
                res.send(err)
            } else {
                // send data to client
                blogsRepo.fetchAll((err , data) => {
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
    },
    update:(req , res) => {
        let blog = req.body
        blogsRepo.findById(blog._id , (err , data) => {
            if (err) {
                res.status('500').send(err)
            }
            else if(!data) res.status('400').send(err)
            else {
                let id = data._id
                data = blog;
                data._id = id;
                blogsRepo.update(data._id , data , (err , result) => {
                    if (err) res.status('500').send(err);
                    else {
                        blogsRepo.fetchAll((err , data) => {
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