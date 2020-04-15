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
		const params = [];
		for (const field in checkFields) {
			if (!checkFields.hasOwnProperty(field)) continue;
			if (whereClause === '') {
				whereClause += `WHERE ${field} = ?`;
			} else {
				whereClause += ` AND ${field} = ?`;
			}
			params.push(checkFields[field]);
		}
		const sql = `SELECT ${options.fields} FROM ${this.tableName()} ${whereClause}`;
		console.log(sql);
		console.log(params);

		try {
			const obj = options.unique
				? await this.db_.selectOne(sql, params)
				: await this.db_.selectAll(sql, params);
			return obj;
		} catch (e) {
			throw Error(e);
		}
	}

	static async loadOne(id) {
		const obj = await this.loadByFields({ id }, { unique: true });
		return obj;
	}

	static async create(obj, fields = null) {
		let useObjFields = false;
		if (!fields) {
			fields = [];
			useObjFields = true;
		}

		const params = [];
		for (var field in obj) {
			params.push(obj[field]);
			if (useObjFields) {
				fields.push(field);
			}
		}

		let fieldPlaceholder = '(?';
		if (fields.length > 1) {
			for (var i = 1, len = fields.length; i < len; ++i) {
				fieldPlaceholder += ', ?';
			}
		}
		fieldPlaceholder += ')';

		const sql = `INSERT INTO ${this.tableName()}(${fields.join(', ')}) VALUES ${fieldPlaceholder};`;
		console.log(sql);

		try {
			await this.db_.exec(sql, params);
		} catch (e) {
			throw Error(e);
		}
	}
}

module.exports = BaseModel;
