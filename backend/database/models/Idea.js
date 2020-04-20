const BaseModel = require('./BaseModel');

const structureSql_ = `
		CREATE TABLE IF NOT EXISTS ideas (
		  id INTEGER PRIMARY KEY AUTOINCREMENT,
			name VARCHAR(255) NOT NULL,
			abstract VARCHAR(100) NOT NULL,
			author VARCHAR(255) NOT NULL,
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

	static async delete(obj, fields = null) {
		//
	}
}

module.exports = Idea;
