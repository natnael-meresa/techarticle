const User = require('../src/models/User')

module.exports = class ARTICLE {
    static async fetchProfile (req,res, next) {
       var username = req.params.username
       console.log(`username: ${username}`)
        if(req.userId){
            console.log(`we hit it --- ${req.userId}`)

            User.findOne({username: username}).then(function(user){
                if (!user) { return res.sendStatus(404); }
                
                console.log(`user1: ${user.email}`)
                res.status(200).send({following: user.following, image: user.image, email: user.email, username: user.username})
              }).catch(next);
            // User.findById(req.userId).then(function(user){
            //     if(!user){ return res.json({profile: req.profile.toProfileJSONFor(false)}); }
        
            //     return res.json({profile: req.profile.toProfileJSONFor(user)});
            // });
        }else{
            User.findOne({username: username}).then(function(user){
                if (!user) { return res.sendStatus(404); }

                console.log(`user2: ${user}`)

                res.status(200).send({following: user.following,image: user.image, email: user.email, username: user.username})
              }).catch(next);

        }
        
        // if(req.payload){
        //     
        //   } else {
        //     
        //   }
    }
}
