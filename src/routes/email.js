const express = require("express");
const router = express.Router();
const controllers = require('../controllers/controllers');
const {checkSchema} = require('express-validator');
const {emailSendRules } = require ('../models/validations/email');

router.post('/send',checkSchema(emailSendRules),controllers.sendMail);

module.exports = router;