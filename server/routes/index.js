const express = require("express")
const router = express.Router()
const API = require('../controllers/api')
// const multer = require('multer')
const Post = require('../src/models/Article')


// let storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.filedname + '_' + Date.now() + '_' + file.originalname)
//     }
// })

// let upload = multer({
//     storage: storage,
// }).single('image')

router.post('/login', API.login)
router.post('/register', API.register)
router.get('/',API.fetchAllArticle)
router.get('/:id',API.fetchArticleByID)
router.post('/', API.createArticle)
router.patch('/:id',API.updateArticle)
router.delete('/:id',API.deleteArticle)

module.exports = router;