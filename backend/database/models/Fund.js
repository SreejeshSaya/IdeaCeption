const BaseModel = require('./BaseModel');

const structureSq_ = `
    CREATE TABLE IF NOT EXISTS fund (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      idea_id INTEGER NOT NULL,
      patron VARCHAR(255) NOT NULL,
      amount INTEGER NOT NULL
    );
`;

class Fund extends BaseModel {
	static tableName() {
		return 'funds';
	}

	static structureSql() {
		return structureSql_;
	}

	static async add(obj, fields = null) {
		if (!obj.idea_id) throw new Error('Invalid Idea ID!');

		try {
			const newFund = Object.assign(obj);
			// insert  code for adding to database
		} catch (e) {
			throw Error(e);
		}
	}
}

module.exports = Fund;
