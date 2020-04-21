const Idea = require('models/Idea');
const Fund = require('models/Fund');
const User = require('models/User');

async function create(req, res, next) {
	const { title, body, fund_target } = req.body;
	const author_id = req.session.user.id;
	console.log(req.session.user);
	try {
		const newIdea = { title, body, author_id, fund_target };
		console.log(newIdea);
		await Idea.create(newIdea);
		res.send({
			status: 1,
			message: 'Idea created successfully!',
			MessageClass: 'success',
			redirect: '/ideas/browse',
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

async function update(req, res, next) {
	const { title, body, fund_target } = req.body;
	const { id } = req.params;
	try {
		const editedIdea = {};
		if (title) {
			editedIdea.title = title;
		}
		if (body) {
			editedIdea.body = body;
		}
		if (fund_target) {
			editedIdea.fund_target = fund_target;
		}
		console.log(editedIdea);
		await Idea.update(id, editedIdea);
		res.send({
			status: 1,
			message: 'Idea updated successfully!',
			MessageClass: 'success',
			redirect: '/ideas/browse',
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

async function view(req, res, next) {
	const { id } = req.params;
	try {
		const idea = await Idea.loadOne(id);
		const author = await User.loadOne(idea.author_id);
		const funds = await Fund.getProjectFunds(idea.id);
		res.send({
			status: 1,
			message: {
				id: idea.id,
				title: idea.title,
				body: idea.body,
				author: author.username,
				owner: req.session.user.id === author.id,
				fund_target: idea.fund_target,
				fund_amt: funds,
			},
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

async function viewAll(req, res, next) {
	const { query } = req.query;
	try {
		const newQuery = query || '';
		const ideas = await Idea.filter(newQuery);
		res.send({
			status: 1,
			message: ideas,
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

async function fund(req, res, next) {
	const { amount } = req.body;
	const idea_id = req.params.id;
	const patron_id = req.session.user.id;
	try {
		const newFund = { idea_id, patron_id, amount };
		console.log(newFund);
		await Fund.create(newFund);
		res.send({
			status: 1,
			message: 'Idea funded successfully!',
			messageClass: 'success',
			redirect: '/ideas/browse',
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

async function deleteIdea(req, res, next) {
	const { id } = req.params;
	try {
		await Idea.deleteObj(id);
		res.send({
			status: 1,
			message: 'Idea deleted successfully',
			messageClass: 'success',
		});
	} catch (e) {
		res.send({
			status: 0,
			message: e.message,
			messageClass: 'danger',
		});
	}
}

module.exports = { create, view, fund, viewAll, update, deleteIdea };
