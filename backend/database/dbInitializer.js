const User = require('./models/User');
const Idea = require('./models/Idea');
const Fund = require('./models/Fund');

const models = [User, Idea, Fund];

function initDb(db) {
	for (const model of models) {
		model.setDb(db);
		model.initModel();
	}
}

module.exports = initDb;
