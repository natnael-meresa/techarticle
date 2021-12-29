const User = require('../src/models/User')

module.exports = class ARTICLE {
    static async fetchProfile (req,res, next) {
       var username = req.params.username

        if(req.userId){

            User.findById(req.userId).then(function(user){

                User.findOne({username: username}).then(function(profile){
                    if(!user){ res.status(200).send({following: false, image: profile.image, email: profile.email, username: profile.username}) }

                    if (!profile) { return res.sendStatus(404); }
                    
                    let following = profile.toProfileJSONFor(user).following
    
                    res.status(200).send({following: following, image: profile.image, email: profile.email, username: profile.username})
                  });
  
              });
        }else{
            User.findOne({username: username}).then(function(user){
                if (!user) { return res.sendStatus(404); }

                res.status(200).send({following: false, image: user.image, email: user.email, username: user.username})
              }).catch(next);

        }
    }
    static async followProfile(req, res, next) {
        var username = req.params.username

        User.findOne({username: username}).then(function(profile){
            if(!profile) { return res.sendStatus(404)}


            User.findById(req.userId).then(function(user){
                if (!user) { return res.sendStatus(401); }
            
                return user.follow(profile._id).then(function(){
                  return res.json({profile: profile.toProfileJSONFor(user)});
                });
              }).catch(next);

        })


    }

    static async unFollowProfile(req, res, next){
        var username = req.params.username

        User.findOne({username: username}).then(function(profile){
            if(!profile) { return res.sendStatus(404)}


            User.findById(req.userId).then(function(user){
                if (!user) { return res.sendStatus(401); }
            
                return user.unfollow(profile._id).then(function(){
                  return res.json({profile: profile.toProfileJSONFor(user)});
                });
              }).catch(next);

        })
    }
}
