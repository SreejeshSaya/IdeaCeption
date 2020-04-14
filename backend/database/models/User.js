const BaseModel = require('./BaseModel');

const structureSql_ = `
		CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
			name VARCHAR(255) NOT NULL,
			username VARCHAR(100) NOT NULL,
			email VARCHAR(255) NOT NULL,
			password VARCHAR(500) NOT NULL
			);
`;

class User extends BaseModel {
	static tableName() {
		return 'users';
	}

	static structureSql() {
		return structureSql_;
	}

}

module.exports = User;
