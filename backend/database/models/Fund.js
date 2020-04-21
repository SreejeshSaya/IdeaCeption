const BaseModel = require('./BaseModel');

const structureSql_ = `
			CREATE TABLE IF NOT EXISTS fund (
				id INTEGER PRIMARY KEY AUTOINCREMENT,
				idea_id INTEGER NOT NULL,
				patron_id VARCHAR(255) NOT NULL,
				amount INTEGER NOT NULL,
				FOREIGN KEY (patron_id) REFERENCES users(id),
				FOREIGN KEY (idea_id) REFERENCES ideas(id)
			);
`;

class Fund extends BaseModel {
	static tableName() {
		return 'fund';
	}

	static structureSql() {
		return structureSql_;
	}

	static modelKeys(type) {
		switch (type) {
			case 'create':
				return ['idea_id', 'patron_id', 'amount'];
			case 'notnull':
				return ['idea_id', 'patron_id', 'amount'];
			default:
				return ['id', 'idea_id', 'patron_id', 'amount'];
		}
	}

	static async getProjectFunds(projectId) {
		const sql = 'SELECT SUM(amount) AS fund_amt FROM fund WHERE fund.idea_id = ?;';
		const res = await this.db_.selectOne(sql, projectId);
		return res ? res.fund_amt : 0;
	}
}

module.exports = Fund;
