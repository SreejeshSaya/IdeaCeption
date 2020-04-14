const User = require('./models/User');

const models = [User];

function initDb(db) {
	for (const model of models) {
		model.setDb(db);
		model.initModel();
	}
}

module.exports = initDb;
