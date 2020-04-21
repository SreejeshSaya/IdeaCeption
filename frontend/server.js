const express = require('express');
const httpProxy = require('http-proxy');
const path = require('path');

const API_HOST = 'localhost:3000';
const PORT = 3100;
const DIST = path.resolve(__dirname, 'dist');

const app = express();
const apiProxy = httpProxy.createProxyServer();

app.use(express.static('dist'));

app.all('/api/*', function (req, res) {
	apiProxy.web(req, res, { target: `http://${API_HOST}` });
});

app.get('/', function (req, res) {
	res.sendFile('index.html', { root: DIST });
});

app.get('/about', function (req, res) {
	res.sendFile('about.html', { root: DIST });
});

app.get('/ideas', function (req, res) {
	res.sendFile('ideaList.html', { root: DIST });
});

app.get('/ideas/create', function (req, res) {
	res.sendFile('ideaCreate.html', { root: DIST });
});

app.listen(PORT, () => {
	console.log(`Running on port ${PORT} with API_HOST ${API_HOST}`);
});
