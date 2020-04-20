const Idea = require('models/Idea');

async function create(req, res) {
	const { name, body, author } = req.body;
	try {
		const newIdea = { name, body, author };
		await Idea.create(newIdea);
		res.send({
			status: 1,
			message: 'Idea created successfully!',
			MessageClass: 'success',
			redirect: '/', // where to?
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

async function view(req, rest) {
	const { id } = req.body;
	try {
		const newIdea = { name, body, author };
		await Idea.create(newIdea);
		res.send({
			status: 1,
			message: 'Idea created successfully!',
			messageClass: 'success',
			redirect: '/', // where to?
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

async function filter(req, res) {
	const { query } = req.body;
	try {
		const newQuery = { query };
		await Idea.filter(newQuery);
		res.send({
			status: 1,
			message: 'Search Successful!',
			messageClass: 'success',
			// redirect
		});
	}
}

async function fund(req, res) {
	const { id, patron, amount } = req.body;
	try {
		const newFund = { idea_id, patron, amount };
		await Idea.fund(newFund);
		res.send({
			status: 1,
			message: 'Idea funded successfully!',
			messageClass: 'success',
			redirect: '/', // where to?
		});
	} catch (e) {
		res.send({
			status: 0,
			message: e.message,
			messageClass: 'danger',
		});
	}
}

module.exports = { create, view, fund, filter };
