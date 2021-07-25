const bcrypt = require("bcryptjs")
const User = require("../src/models/User")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((user, done) => {
    User.findById(id, (err, user) => {
        done(err, user)
    });
});

passport.use(
    new LocalStrategy({ usernameField: "email"}, (email, password, done) => {
        User.findOne({ email: email })
            .then(user => {

                if (!user) {
                    res.send("No User Exists");
                    console.log("no user exist")
                //     const newUser = new User({email, password});

                //     bcrypt.genSalt(10, (err, salt) => {
                //         bcrypt.hash(newUser.password, salt, (err, hash) => {
                //             if (err) throw err;
                //             newUser.password = hash;
                //             newUser.save().then(user => {
                //                 return done(null, user)
                //             }).catch(err => {
                //                 return done(null, false, { message:err });
                //             });
                //         });
                //     }); 
                } else{
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;

                        if (isMatch) {
                            return done(null, user);
                            console.log('logedin')
                        } else {
                            return done(null, false, { message: "Wrong password" });
                            console.log('Wrong passowrd')
                        }
                    });
                }
            }).catch(err => {
                return done(null, false, { message: err });
            });
    })
);

module.exports = passport;