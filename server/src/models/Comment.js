import mongoose from 'mongoose';
 
const commentSchema = new mongoose.Schema(
  {
    body: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' }
  },
  { timestamps: true },
);
 
const Comment = mongoose.model('Comment', commentSchema);
 
export default Comment;