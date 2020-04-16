const User = require('models/User');

async function usernameValidate(req, res, next) {
	const { username } = req.body;
	res.send(await User.validUsername(username));
	next();
}

async function emailValidate(req, res, next) {
	const { email} = req.body;
	res.send(await User.validEmail(email));
	next();
}

module.exports = { usernameValidate, emailValidate };
