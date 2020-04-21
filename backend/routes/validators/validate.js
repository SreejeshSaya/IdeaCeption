const express = require('express');
const { usernameValidate, emailValidate, loginValidate } = require('./handlers');

const validateRouter = express.Router();
validateRouter.use(express.json());

validateRouter.post('/username', usernameValidate);

validateRouter.post('/email', emailValidate);

validateRouter.get('/logged_in', loginValidate);

module.exports = validateRouter;
