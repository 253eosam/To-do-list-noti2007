'use strict';
// api
const api = async url => {
	return await fetch(`http://localhost:8080${url}`).then(response => response.json());
};

const getLocalStoage = key => localStorage.getItem(key) || 'DDD05';
const fetchUser = async name => await api(`/users/${name}`);
const fetchTask = async name => await api(`/posts/users/${name}`);

const onClickTaskDetail = event => {
	const isActive = event.target.offsetParent.className.includes('active');
	console.log('[DDD] ~ file: index.js ~ line 12 ~ event', event.target.offsetParent);
	event.target.offsetParent.className = isActive ? 'to-do-item' : 'to-do-item to-do-item-active';
};

(async function init() {
	const localUserName = getLocalStoage('user');
	const user = localUserName ? await fetchUser(localUserName) : { id: 0, name: '' };
	console.log('[DDD] ~ file: index.js ~ line 15 ~ init ~ user', user);
	const tasks = await fetchTask(user.name);
	console.log('[DDD] ~ file: index.js ~ line 16 ~ init ~ tasks', tasks);
	tasks.forEach(task => {
		let toDoListEl = document.querySelector('.to-do-list');
		console.log(toDoListEl);
		let liEl = document.createElement('li');
		liEl.className = 'to-do-item';
		if (task.completed) liEl.innerHTML = `<input type="checkbox" checked id="todo-chk1" /><span class="item-text" onclick="onClickTaskDetail(event)"> ${task.content} </span>`;
		else liEl.innerHTML = `<input type="checkbox" id="todo-chk1" /><span class="item-text" onclick="onClickTaskDetail(event)"> ${task.content} </span>`;
		toDoListEl.appendChild(liEl);
	});
})();
