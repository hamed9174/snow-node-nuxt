const usersRepo = require('../../dal/users.repo')
const _ = require('lodash');
const bcrypt = require('bcrypt')
const controller = {
    register:(req , res) => {
        const credentials = _.pick(req.body , ['username', 'email' , 'password']);
        credentials.username = credentials.username.toLowerCase();
        credentials.lastName = '';
        credentials.firstName = '';
        credentials.company = '';
        credentials.country = '';
        credentials.city = '';
        credentials.state = '';
        credentials.about_me = '';
        credentials.address = '';
        credentials.img = '';
        usersRepo.findByUsername((credentials.username) , (err , user) =>{
            if (err) res.status(500).send(err)
            else if(user) res.status(400).send('این کاربر وجود دارد')
            else {
                const salt = bcrypt.genSaltSync(10)
                bcrypt.hash(credentials.password , salt).then(
                    hashedPassword => {
                        credentials.password = hashedPassword
                        usersRepo.create(credentials , (err , result) =>{
                            if(err) res.status(500).send(err)
                            else{
                                usersRepo.findByUsername(credentials.username , (err , user) => {
                                    if(err) res.status(500).send(err);
                                    else {
                                        usersRepo.generateToken(user.username , (err , token) =>{
                                            if(err) res.status(500).send(err);
                                            else {
                                                user.token = token
                                                delete user.password;
                                                res.send(user)
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                ).catch(
                    err => res.status(500).send(err)
                )
            }
        })
    },
    login : (req , res) => {
        const credentials = _.pick(req.body , ['username' , 'password']);
        credentials.username = credentials.username.toLowerCase();

        usersRepo.findByUsername(credentials.username , (err , user) =>{
            if(err) res.status(500).send(err);
            else if(!user) res.status(404).send({msg : 'نام کاربری اشتباه است.'});
            else {
                bcrypt.compare(credentials.password , user.password).then(
                    isMatch => {
                        if (isMatch) {
                            usersRepo.generateToken(user.username , (err , token) =>{
                                if(err) res.status(500).send(err);
                                else {
                                    user.token = token
                                    delete user.password;
                                    res.send(user)
                                }
                            })
                        } else {
                            res.status(400).send({msg : 'پسورد اشتباه است.'})
                        }
                    }
                ).catch(
                  err =>  res.status(400).send(err , {msg : 'پسورد اشتباه است.'})
                )
            }

        })

    },
    getUser:(req , res) => {
        usersRepo.findById(req.user._id , (err , data) =>{
            if (err) res.status(500).send(err);
            else if (!data) {
                res.status(500).send({msg : 'not'});
            }
            else {
                res.send(data)
            }
        })
    },
    update:(req , res) => {
        usersRepo.findById(req.user._id , (err , data) =>{
            if (err) res.status(500).send(err);
            else if (!data) {
                res.status(500).send({msg : 'username or password not exist'});
            }
            else {
                let id = data._id;
                data = req.body;
                data._id = id;
                usersRepo.update(data , (err , data) =>{
                    if (err) res.status(500).send(err);
                    else {
                        usersRepo.findById(req.user._id , (err , data) =>{
                            if (err) res.status(500).send(err);
                            else if (!data) {
                                res.status(500).send({msg : 'not'});
                            }
                            else {
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