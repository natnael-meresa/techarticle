const Post = require('../src/models/Article')

module.exports = class API {
    static async fetchAllArticle(req,res) {
        try {
            const posts = await Post.find()
            res.status(200).json(posts)
        } catch (err) {
            res.status(404).json({ message: err.message})
        }
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