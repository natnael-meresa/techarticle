const mongoose = require('mongoose')

 
const userSchema = new mongoose.Schema(
  {

    // username: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
    // email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    // bio: String,
    // image: String,
    // favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
    // following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    // hash: String,
    // salt: String
    email: {
      type: String,
      required: true,
      unique: true
    },
    username: {
      type: String,
      required: true,
    },
    email_is_verified: {
      type: Boolean,
      default: false
    },
    password: {
      type: String
    },
    image: String,
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  },
  { timestamps: true },
);
 
// userSchema.statics.findByLogin = async function (login) {
//     let user = await this.findOne({
//       username: login,
//     });
   
//     if (!user) {
//       user = await this.findOne({ email: login });
//     }
   
//     return user;
// };

// userSchema.pre('remove', function(next) {
//     this.model('Article').deleteMany({ user: this._id }, next);
//   });
   
const User = mongoose.model('User', userSchema);
   
module.exports = User;