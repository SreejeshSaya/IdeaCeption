const express = require('express');
const cookieParser = require('cookie-parser');
const User = require('models/User');
const { register, login, logout } = require('./handlers');
const { loginRequired } = require('validators/utils')

const userRouter = express.Router();
userRouter.use(express.urlencoded({ extended: true }));
userRouter.use(cookieParser());

userRouter.post('/register', register);

userRouter.post('/login', login);

userRouter.get('/logout', logout);

userRouter.get('/', loginRequired, async function (req, res) {
	const user = await User.loadOne(1);
	res.send(user);
});

module.exports = userRouter;
