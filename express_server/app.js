const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

const fs = require('fs');
const FILE_PATH = './data.json';

const loadFile = (filePath = FILE_PATH, options) => {
	const defaultOptions = { resType: 'JSON' };
	const { resType } = { ...defaultOptions, ...options };

	const res = fs.readFileSync(filePath, 'utf-8');

	if (resType && resType === 'JSON') return JSON.parse(res);
	return res;
};

const getWorkSpace = ({ id, title, user }) => {
	const jsonData = loadFile();
  console.log("[🐱 DDD] ~ file: app.js ~ line 21 ~ getWorkSpace ~ jsonData", jsonData)
	const { workspaces } = jsonData;

	return workspaces.find(ws => {
		return (id && ws.id === id) || (title && ws.title === title) || (user && ws.users.some(({ uid }) => uid === user));
	});
};

app.listen(PORT, () => {
	console.log(`🐱 App express server listen : ${PORT}`);
});

app.get('/workspace', (req, res) => {
	const { id, title, user } = req.query;
  console.log("[🐱 DDD] ~ file: app.js ~ line 33 ~ app.get ~ id, title, user ", id, title, user )
	const data = getWorkSpace({ id, title, user });
	res.send(data);
});
