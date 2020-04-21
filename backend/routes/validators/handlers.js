const User = require('models/User');

async function usernameValidate(req, res, next) {
	const { username } = req.body;
	res.send(await User.existingObj({ username }));
	next();
}

async function emailValidate(req, res, next) {
	const { email } = req.body;
	res.send(await User.existingObj({ email }));
	next();
}

function loginValidate(req, res, next) {
	res.send(!!req.session.logged_in);
}

module.exports = { usernameValidate, emailValidate, loginValidate };
