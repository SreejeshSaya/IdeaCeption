const bcrypt = require('bcrypt');
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

	static async create(obj, fields = null) {
		if (!obj.password) throw new Error('Password not provided!');

		const hashedPass = await bcrypt.hash(obj.password, 10);
		try {
			const newUser = Object.assign(obj, { password: hashedPass });
			await super.create(newUser, fields);
		} catch (e) {
			throw Error(e);
		}
	}

	static async validUsername(username) {
		const user = await this.loadByFields({ username }, { unique: true });
		return !!user;
	}

	static async validEmail(email) {
		const user = await this.loadByFields({ email }, { unique: true });
		return !!user;
	}

	static async verify(username, password) {
		const user = await this.loadByFields({ username }, { unique: true });
		if (!user) throw new Error('No user with this username');
		const validPass = await bcrypt.compare(password, user.password);
		return validPass;
	}
}

module.exports = User;
