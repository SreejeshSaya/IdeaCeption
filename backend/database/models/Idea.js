const BaseModel = require('./BaseModel');
const User = require('./User');

const structureSql_ = `
		CREATE TABLE IF NOT EXISTS ideas (
		  id INTEGER PRIMARY KEY AUTOINCREMENT,
			name VARCHAR(255) NOT NULL,
			body VARCHAR(100) NOT NULL,
			author VARCHAR(255) NOT NULL,
			FOREIGN KEY (author) REFERENCES Users(username) // Is this how you add it?
			);

			CREATE TABLE IF NOT EXISTS fund (
				id INTEGER PRIMARY KEY AUTOINCREMENT,
				idea_id INTEGER NOT NULL,
				patron VARCHAR(255) NOT NULL,
				amount INTEGER NOT NULL
				FOREIGN KEY (patron) REFERENCES User(username)
			);
`;

class Idea extends BaseModel {
	static tableName() {
		return 'ideas';
	}

	static structureSql() {
		return structureSql_;
	}

	static async create(obj, fields = null) {
		//
	}

	static async fund(obj, fields = null) {
		if (!obj.idea_id) throw new Error('Invalid Idea ID!');

		try {
			const newFund = Object.assign(obj);
			// insert  code for adding to database
		} catch (e) {
			throw Error(e);
		}
}

module.exports = Idea;
