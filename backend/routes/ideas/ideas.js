const express = require('express');
const cookieParser = require('cookie-parser');
const { create, update, view, viewAll, fund } = require('./handlers');
const { loginRequired } = require('validators/utils');

const ideaRouter = express.Router();
ideaRouter.use(express.json());
ideaRouter.use(express.urlencoded({ extended: true }));

ideaRouter.post('/create', loginRequired, create);
ideaRouter.get('/', viewAll);
ideaRouter.get('/:id(\\d+)', view);
ideaRouter.put('/:id(\\d+)', loginRequired, update);
ideaRouter.post('/:id(\\d+)/fund', loginRequired, fund);

module.exports = ideaRouter;
