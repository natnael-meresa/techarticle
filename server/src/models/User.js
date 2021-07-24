import mongoose from 'mongoose';
 
const userSchema = new mongoose.Schema(
  {

    username: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
    email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    bio: String,
    image: String,
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    hash: String,
    salt: String
  },
  { timestamps: true },
);
 
userSchema.statics.findByLogin = async function (login) {
    let user = await this.findOne({
      username: login,
    });
   
    if (!user) {
      user = await this.findOne({ email: login });
    }
   
    return user;
};

userSchema.pre('remove', function(next) {
    this.model('Article').deleteMany({ user: this._id }, next);
  });
   
const User = mongoose.model('User', userSchema);
   
export default User;