const BaseModel = require('./BaseModel');
const Fund = require('models/Fund');

const structureSql_ = `
		CREATE TABLE IF NOT EXISTS ideas (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			title VARCHAR(255) NOT NULL,
			body VARCHAR(100) NOT NULL,
			author_id INTEGER NOT NULL,
			fund_target INTEGER NOT NULL DEFAULT 0,
			FOREIGN KEY (author_id) REFERENCES users(id)
			);
`;

class Idea extends BaseModel {
	static tableName() {
		return 'ideas';
	}

	static structureSql() {
		return structureSql_;
	}

	static modelKeys(type) {
		switch (type) {
			case 'create':
				return ['title', 'body', 'author_id', 'fund_target'];
			case 'notnull':
				return ['title', 'body', 'author_id', 'fund_target'];
			default:
				return ['id', 'title', 'body', 'author_id', 'fund_target'];
		}
	}

	static async filter(query) {
		const filteredQuery = query ? query.replace(/\\/g, '').replace(/%/g, '\\%') : '';
		const queryString = `%${filteredQuery}%`;
		const sql = "SELECT * FROM ideas WHERE title LIKE ? ESCAPE '\\'";
		console.log(sql);

		try {
			const obj = await this.db_.selectAll(sql, queryString);
			return obj;
		} catch (e) {
			throw Error(e);
		}
	}
}

module.exports = Idea;
