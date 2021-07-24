const mongoose = require('mongoose');

 
const articleSchema = new mongoose.Schema(
  {
    slug: {type: String, lowercase: true, unique: true},
    title: String,
    description: String,
    body: String,
    favoritesCount: {type: Number, default: 0},
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    tagList: [{ type: String }],
    author:String
    // author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true },
);
 
const Article = mongoose.model('Article', articleSchema);
 
module.exports = Article;