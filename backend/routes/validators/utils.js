function loginRequired(req, res, next) {
	if (req.session.logged_in) {
		next();
	} else {
		res.send({
			status: 0,
			message: 'You need to log in to access this page',
			messageClass: 'info',
			redirect: '/users/login',
		});
	}
}

module.exports = { loginRequired };
