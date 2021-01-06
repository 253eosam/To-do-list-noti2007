'use strict';

let USER = { id: 0, name: '' };
let showCompletedTask = true;

// api
const api = async (url, method = 'GET', data) => {
	return await fetch(`http://localhost:8080${url}`, {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}).then(response => response.status === 200 && response.json());
};
const getLocalStoage = key => localStorage.getItem(key) || 'DDD05';
const fetchUser = async name => await api(`/users/${name}`);
const fetchTask = async name => await api(`/posts/users/${name}`);
const updateTaskStatus = async id => await api(`/posts/${id}`, 'PATCH');
const postTask = async (name, data) => await api(`/posts/${name}`, 'POST', data);

const onClickTaskDetail = event => {
	const isActive = event.target.offsetParent.className.includes('active');
	event.target.offsetParent.className = isActive ? 'to-do-item' : 'to-do-item to-do-item-active';
};

const onClickCheckBox = async event => {
	const id = event.target.dataset.id;
	await updateTaskStatus(id);
};
const onEnterCheck = event => {
	// 엔터키의 코드는 13입니다.
	if (event.keyCode == 13) {
		onClickAddTask();
	}
};
const onClickAddTask = async () => {
	const registerInputEl = document.getElementById('register-todo');
	if (!registerInputEl.value) return;
	await postTask(USER.name, {
		content: registerInputEl.value,
	});
	await loadTaskByUserName();
	registerInputEl.value = '';
};
const loadTaskByUserName = async (flag = false) => {
	if (flag) showCompletedTask = !showCompletedTask;
	const toDoListEl = document.querySelector('.to-do-list');
	toDoListEl.innerHTML = '';
	const tasks = await fetchTask(USER.name);
	tasks.forEach(task => {
		if (!showCompletedTask && task.completed) return;
		let liEl = document.createElement('li');
		liEl.className = 'to-do-item';
		if (task.completed)
			liEl.innerHTML = `<input onclick="onClickCheckBox(event)" data-id=${task.id} type="checkbox" checked id="todo-chk1" /><span class="item-text" onclick="onClickTaskDetail(event)"> ${task.content} </span>`;
		else
			liEl.innerHTML = `<input onclick="onClickCheckBox(event)" data-id=${task.id} type="checkbox" id="todo-chk1" /><span class="item-text" onclick="onClickTaskDetail(event)"> ${task.content} </span>`;
		toDoListEl.appendChild(liEl);
	});
};
(async function init() {
	const localUserName = getLocalStoage('user');
	USER = localUserName ? await fetchUser(localUserName) : { id: 0, name: '' };
	USER.id && (await loadTaskByUserName());
})();
