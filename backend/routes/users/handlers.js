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
			redirect: '/',
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
	const { username, password } = req.body;
	try {
		if (await User.verify(username, password)) {
			req.session.logged_in = true;
			req.session.user = await User.loadByFields({ username });
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
	req.session.logged_in = false;
	res.send({
		status: 1,
		message: "You have logged out",
		messageClass: 'info',
		redirect: '/users/login'
	})
	next()
}

module.exports = { register, login, logout };
