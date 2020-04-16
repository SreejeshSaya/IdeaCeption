const express = require('express');
const { usernameValidate, emailValidate } = require('./handlers');

const validateRouter = express.Router();
validateRouter.use(express.urlencoded({ extended: true }));

validateRouter.post('/username', usernameValidate);

validateRouter.post('/email', emailValidate);

module.exports = validateRouter;
