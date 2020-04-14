const express = require('express');
const User = require('./database/models/User')
const Database = require('./database/database');
const dbInit = require('./database/dbInitializer');

const PORT = 3000;
const DB_PATH = './test.db'

const app = express();
const db = new Database(DB_PATH);
dbInit(db);

app.get('/', async function(req,res) {
	const obj = await User.loadOne(1);
	console.log(obj);
	res.send(obj);
});

app.listen(PORT, () => {
	console.log('Server is running on port' + PORT);
});
