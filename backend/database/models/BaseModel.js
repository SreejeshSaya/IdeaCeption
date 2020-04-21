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
		if (!await this.existingObj({ id })) throw new Error('Object with this id does not exist');
		const obj = await this.loadByFields({ id }, { unique: true });
		return obj;
	}

	static async create(obj, fields = null) {
		let useObjFields = false;
		if (!fields) {
			fields = [];
			useObjFields = true;
		}

		if (useObjFields && !this.validObject(obj, true)) {
			throw new Error(`Object is not a valid initial instance of ${this.tableName()}`);
		} else {
			const keys = this.modelKeys();
			fields.forEach((field) => {
				if (!keys.includes(field)) {
					throw new Error(`Object is not a valid initial instance of ${this.tableName()}`);
				}
			});
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

	static async update(id, obj, fields = null) {
		let useObjFields = false;
		if (!fields) {
			fields = [];
			useObjFields = true;
		}

		if (useObjFields && !this.validObject(obj)) {
			throw new Error(`Object is not a valid instance of ${this.tableName()}`);
		} else {
			const keys = this.modelKeys();
			fields.forEach((field) => {
				if (!keys.includes(field)) {
					throw new Error(`Object is not a valid instance of ${this.tableName()}`);
				} else if (key === 'id') {
					throw new Error('Cannot update primary key');
				}
			});
		}

		const params = [];
		for (var field in obj) {
			params.push(obj[field]);
			if (useObjFields) {
				fields.push(field);
			}
		}

		let updatePlaceholder = '';
		fields.forEach((field) => {
			if (updatePlaceholder === '') {
				updatePlaceholder += `${field} = ?`
			} else {
				updatePlaceholder += `, ${field} = ?`
			}
		})

		const sql = `UPDATE ${this.tableName()} SET ${updatePlaceholder} WHERE id = ?;`;
		console.log(sql);
		params.push(id);

		try {
			await this.db_.exec(sql, params);
		} catch (e) {
			throw Error(e);
		}
	}

	static async deleteObj(id) {
		const sql = `DELETE FROM ${this.tableName()} WHERE id = ${id};`;
		console.log(sql);

		try {
			await this.db_.exec(sql);
		} catch (e) {
			throw Error(e);
		}
	}

	static validObject(obj, create = false) {
		if (create) {
			const keys = this.modelKeys('create');
			for (const key of Object.keys(obj)) {
				if (!keys.includes(key) || !obj[key]) {
					return false;
				}
			}
		} else {
			const keys = this.modelKeys();
			const notNullKeys = this.modelKeys('notnull');
			for (const key of Object.keys(obj)) {
				if (!keys.includes(key) || (notNullKeys.includes(key) && !obj[key])) {
					return false;
				}
			}
		}
		return true;
	}

	static async existingObj(obj) {
		if (!this.validObject(obj))
			throw new Error(`Object is not a valid instance of ${this.tableName()}`);

		let whereClause = '';
		const params = [];
		Object.keys(obj).forEach((key) => {
			params.push(obj[key]);
			if (whereClause === '') {
				whereClause += `WHERE ${key} = ?`;
			} else {
				whereClause += ` AND ${key} = ?`;
			}
		});

		const sql = `SELECT * FROM ${this.tableName()} ${whereClause};`;
		console.log(sql);
		try {
			const selectedObj = await this.db_.selectOne(sql, params);
			return !!selectedObj;
		} catch (e) {
			throw Error(e);
		}
	}
}

module.exports = BaseModel;
