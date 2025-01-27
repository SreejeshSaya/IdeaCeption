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

	static modelKeys(type) {
		switch (type) {
			case 'create':
				return ['name', 'username', 'email', 'password'];
			case 'notnull':
				return ['name', 'username', 'email', 'password'];
			default:
				return ['id', 'name', 'username', 'email', 'password'];
		}
	}

	static async create(obj, fields = null) {
		console.log(obj);
		if (!obj.password) throw new Error('Password not provided!');

		const hashedPass = await bcrypt.hash(obj.password, 10);
		try {
			const newUser = Object.assign(obj, { password: hashedPass });
			await super.create(newUser, fields);
		} catch (e) {
			throw Error(e);
		}
	}

	static async verify(email, password) {
		const user = await this.loadByFields({ email }, { unique: true });
		if (!user) throw new Error('No user with this email');
		const validPass = await bcrypt.compare(password, user.password);
		return validPass;
	}
}

module.exports = User;
