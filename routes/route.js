const express = require('express')
const router = express.Router()

let controller = require('../controllers/controller')

router.post('/article/new', controller.new_article)
router.get('/article/', controller.article)

module.exports = router