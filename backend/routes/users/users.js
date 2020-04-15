const express = require('express');
const cookieParser = require('cookie-parser');
const User = require('models/User');
const { register, login, userValidate } = require('./views');

const PORT = 3000;
const DB_PATH = './test.db';

const userRouter = express.Router();
userRouter.use(express.urlencoded({ extended: true }));
userRouter.use(cookieParser());

userRouter.post('/register', register);

userRouter.post('/login', login);

userRouter.post('/validate/username', userValidate);

userRouter.get('/', async function (req, res) {
	const user = await User.loadOne(1);
	res.send(user);
});

module.exports = userRouter;
