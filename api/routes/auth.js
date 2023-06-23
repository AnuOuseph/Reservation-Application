const express = require('express')
const {auth} = require('../controllers/authController')

const router = express.Router()

router.route('/').get(auth)

module.exports = router;
