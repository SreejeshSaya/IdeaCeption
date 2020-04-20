require('module-alias/register');
const express = require('express');
const session = require('express-session');
const SQLite3store = require('connect-sqlite3')(session);
const Database = require('./database/database');
const dbInit = require('./database/dbInitializer');
const userRouter = require('users/users');
const validateRouter = require('validators/validate');
const ideaRouter = require('ideas/ideas');

const PORT = 3000;
const DB_PATH = './test.db';
const SESSION_OPTS = {
	store: new SQLite3store(),
	name: 'ideaception_backend',
	secret: 'thisismySecret',
	cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
	saveUninitialized: false,
	resave: false,
};

const app = express();
app.use(session(SESSION_OPTS));
const db = new Database(DB_PATH);
dbInit(db);

app.get('/', async function (req, res) {
	req.session.test = 'This is a test cookie';
	res.send('Root');
});

app.use('/api/users', userRouter);

app.use('/api/validate', validateRouter);

app.use('/api/idea', ideaRouter);

app.listen(PORT, () => {
	console.log('Server is running on port ' + PORT);
});
