var express = require('express');
const loginController = require('../controller/auth');
const forgotPassword = require('../controller/auth');
const resetPassword = require('../controller/auth');
var router = express.Router();

/* GET users listing. */
router.post('/login', loginController);
router.post('/forgotPassword', forgotPassword);
// router.get('/resetPassword', resetPassword);
router.post('/resetPassword', resetPassword);

module.exports = router;
