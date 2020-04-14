const sqlite3 = require('sqlite3').verbose();

class Database {
	constructor(dbPath) {
		this.db_ = this.open(dbPath);
	}

	selectOne(sql, params = null) {
		if (!params) params = {};
		return new Promise((resolve, reject) => {
			this.db_.get(sql, params, (error, row) => {
				if (error) {
					reject(error);
					return;
				}
				resolve(row);
			});
		});
	}

	selectAll(sql, params = null) {
		if (!params) params = {};
		return new Promise((resolve, reject) => {
			this.db_.all(sql, params, (error, row) => {
				if (error) {
					reject(error);
					return;
				}
				resolve(row);
			});
		});
	}

	exec(sql, params = null) {
		if (!params) params = {};
		return new Promise((resolve, reject) => {
			this.db_.run(sql, params, (error) => {
				if (error) {
					reject(error);
					return;
				}
				resolve();
			});
		});
	}

	open(name) {
		return new sqlite3.Database(name, (error) => {
			if (error) {
				console.log(error);
			}
		});
	}
}

module.exports = Database;
