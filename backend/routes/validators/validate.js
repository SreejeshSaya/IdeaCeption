const express = require('express');
const { usernameValidate, emailValidate } = require('./handlers');

const validateRouter = express.Router();
validateRouter.use(express.json());

validateRouter.post('/username', usernameValidate);

validateRouter.post('/email', emailValidate);

module.exports = validateRouter;
