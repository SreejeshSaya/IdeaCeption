const User = require('models/User');

async function register(req, res, next) {
	const { name, username, email, password } = req.body;
	try {
		const newUser = { name, username, email, password };
		await User.create(newUser);
		res.send({
			status: 1,
			message: 'User registered successfully!',
			messageClass: 'success',
		});
		next();
	} catch (e) {
		res.send({
			status: 0,
			message: e.message,
			messageClass: 'danger',
		});
	}
}

async function login(req, res, next) {
	const { email, password } = req.body;
	try {
		if (await User.verify(email, password)) {
			req.session.logged_in = true;
			req.session.user = await User.loadByFields({ email });
			res.send({
				status: 1,
				message: 'You have logged in successfully!',
				messageClass: 'success',
				redirect: '/',
			});
		} else {
			res.send({
				status: 0,
				message: 'Password incorrect. Please try again',
				messageClass: 'danger',
			});
		}
		next();
	} catch (e) {
		res.send({
			status: 0,
			message: e.message,
			messageClass: 'danger',
		});
	}
}

function logout(req, res, next) {
	req.session.destroy();
	res.send({
		status: 1,
		message: 'You have logged out',
		messageClass: 'info',
		redirect: '/',
	});
	next();
}

module.exports = { register, login, logout };
