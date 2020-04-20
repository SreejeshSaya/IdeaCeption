const express = require('express');
const cookieParser = require('cookie-parser');
const Idea = require('models/Idea');
const { create, view, filter, fund } = require('./handlers');

const ideaRouter = express.Router();

ideaRouter.post('/create', create);
ideaRouter.get('/view', view);
ideaRouter.get('/filter', filter);
ideaRouter.put('/fund', fund);

module.exports = ideaRouter;
