const Database = require('../database');

class BaseModel {
	static tableName() {
		throw new Error('Table name must be overridden');
	}

	static setDb(db) {
		this.db_ = db;
	}

	static initModel() {
		this.db_.exec(this.structureSql());
	}

	static async loadByFields(checkFields, options = null) {
		if (!options) options = {};
		if (!options.fields) options.fields = '*';
		let whereClause = '';
		for (const field in checkFields) {
			if (!checkFields.hasOwnProperty(field)) continue;
			if (whereClause === '') {
				whereClause += `WHERE ${field} = ${checkFields[field]}`;
			} else {
				whereClause += ` AND ${field} = ${checkFields[field]}`;
			}
		}
		const sql = `SELECT ${options.fields} FROM ${this.tableName()} ${whereClause};`;
		console.log(sql);
		const obj = options.unique ? this.db_.selectOne(sql) : this.db_.selectAll(sql);
		return obj;
	}

	static async loadOne(id) {
		const obj = await this.loadByFields({ id }, { unique: true });
		console.log(obj);
		return obj;
	}
}

module.exports = BaseModel;
