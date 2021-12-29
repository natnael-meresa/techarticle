const ARTICLE = require('../controllers/ProfileController')
const express = require("express")
const router = express.Router()

const OptionalToken = require('../controllers/optionalVerify')

// Preload user profile on routes with ':username'

router.get('/:username', OptionalToken, ARTICLE.fetchProfile)
router.post('/:username/follow', OptionalToken, ARTICLE.followProfile)
router.delete('/:username/follow', OptionalToken, ARTICLE.unFollowProfile)



module.exports = router;