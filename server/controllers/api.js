const Post = require('../src/models/Article')
const User = require('../src/models/User')
const bcrypt = require("bcryptjs")

module.exports = class API {
    static async fetchAllArticle(req,res) {
        try {
            const posts = await Post.find()
            res.status(200).json(posts)
        } catch (err) {
            res.status(404).json({ message: err.message})
        }
    }

    static async login(req,res, next) {
        console.log('hit /login')
        passport.authenticate("local", function(info, user, err) {
            console.log( info)
            if (err) {
                console.log(err)
                console.log('hit err 1')
                // return res.status(400).json({ errors:info });
                return res.status(400).send({success: false, msg: err.message});
            }

            if (!user) {
                return res.status(400).json({errors: "No user found"});
                console.log('hit err 2')
            }
            console.log('hot 2')
            req.logIn(user, function(err) {
                console.log('hot')
                if (err) {
                    // return res.status(400).json({errors: info});
                    res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
                    console.log('hit err 3')
                }
                console.log('hit success')
                return res.status(200).json({success: `logged in ${user.id}`});

            });
        })(req, res, next);
    }

    static async register(req,res) {
        User.findOne({ username: req.body.email }, async (err, doc) => {
            if (err) throw err;
            if (doc) res.send("User Already Exists");
            if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
                    // bcrypt.genSalt(10, (err, salt) => {
                    //     bcrypt.hash(newUser.password, salt, (err, hash) => {
                    //         if (err) throw err;
                    //         newUser.password = hash;
                    //     });
                    // }); 
        
            const newUser = new User({
                email: req.body.email,
                username: req.body.username,
                password: hashedPassword
            });
            await newUser.save();
            res.send("User Created");
            }
        });
    }
    static async fetchArticleByID(req,res) {
        res.send("create Article")
    }
    static async createArticle(req,res) {
        try {
            const post = req.body;
            Post.create(post);
            res.status(201).json({message: 'Article created successfully'})
        } catch (err) {
            res.status(404).json({ message: err.message})
        }
    }
    static async updateArticle(req,res) {
        res.send("update Article")
    }
    static async deleteArticle(req,res) {
        res.send("delete Article")
    }
}