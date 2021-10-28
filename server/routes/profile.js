const ARTICLE = require('../controllers/ProfileController')
const express = require("express")
const router = express.Router()

const OptionalToken = require('../controllers/optionalVerify')

router.get('/:username', OptionalToken, ARTICLE.fetchProfile)



module.exports = router;