'use strict';

const pageData = {
	showCompletedTask: true,
};

const getLocalStoage = key => localStorage.getItem(key);
const setLocalStoage = (key, value) => localStorage.setItem(key, value);
class User {
	static instance = null;
	constructor() {
		this.id = 0;
		this.name = '';
	}
	static getInstance() {
		if (this.instance === null) this.instance = new User();
		return this.instance;
	}
	set instance({ id, name }) {
		this.id = id;
		this.name = name;
	}
}

// events
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
	await postTask(User.getInstance().name, {
		content: registerInputEl.value,
	});
	await loadTaskByUserName();
	registerInputEl.value = '';
};
const loadTaskByUserName = async (flag = false) => {
	if (flag) pageData.showCompletedTask = !pageData.showCompletedTask;
	const toDoListEl = document.querySelector('.to-do-list');
	toDoListEl.innerHTML = '';
	const tasks = await fetchTask(User.getInstance().name);
	tasks.forEach(task => {
		if (!pageData.showCompletedTask && task.completed) return;
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
	console.log('📣 load success index.js file');
	setLocalStoage('id', 4);
	setLocalStoage('name', 'DDD05');
	if (getLocalStoage('id') && getLocalStoage('name')) User.instance = { id: getLocalStoage('id'), name: getLocalStoage('user') };
	User.getInstance().id && (await loadTaskByUserName());
	console.log(User.getInstance());
})();
