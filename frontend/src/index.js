'use strict';

import { fetchUser, fetchTask, updateTaskStatus, postTask, delTask, updateTask, fetchFilterTask } from './api'


const pageData = {
	showCompletedTask: true,
	filtering: '',
};

const getLocalStoage = key => localStorage.getItem(key);
const setLocalStoage = (key, value) => localStorage.setItem(key, value);
class User {
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

const onClickTaskDetail = event => {
	const isActive = event.target.offsetParent.className.includes('active');
	event.target.offsetParent.className = isActive ? 'to-do-item' : 'to-do-item to-do-item-active';
};
const onClickCheckBox = async event => {
	const labelClass = event.target.checked ? 'fas fa-check-square' : 'far fa-check-square'
	const labels = document.getElementsByTagName('label')
	for(let i = 0 ; i < labels.length ; i++) {
		if (event.target.id === labels[i].htmlFor) {
			labels[i].className = labelClass
			break;
		}
	}
	await updateTaskStatus(event.target.offsetParent.dataset.id);
}
const onEnterCheck = event => event.keyCode === 13 && onClickAddTask();
const onClickAddTask = async () => {
	const registerInputEl = document.getElementById('register-todo');
	if (!registerInputEl.value.trim()) return;
	await postTask(User.getInstance().name, {
		content: registerInputEl.value.trim(),
	});
	await loadTaskByUserName();
	registerInputEl.value = '';
};
const elementInit = (el, isClear = false) => {
	if (isClear) el.innerHTML = '';
	return el;
};
const loadTaskByUserName = async (isAutoFocus = true) => {
	const toDoListEl = elementInit(document.getElementById('to-do-list'), true);
	const tasks = await fetchFilterTask(User.getInstance().name, {
		inCompleted: !pageData.showCompletedTask,
		keyWord: pageData.filtering,
	});
	tasks.forEach(task => {
		if (!pageData.showCompletedTask && task.completed) return;
		const liEl = document.createElement('li');
		liEl.className = 'to-do-item';
		liEl.dataset.id = task.id;
		liEl.innerHTML = `<input class="none todo__chk" type="checkbox" ${task.completed ? 'checked' : ''} id="todo-chk-${task.id}" /><label for="todo-chk-${
			task.id
		}" class="${task.completed ? "fas" : "far"} fa-check-square"></label><span class="item-text" > ${
			task.content
		} </span><button class="del_btn fas fa-trash-alt"></button>`;
		toDoListEl.appendChild(liEl);
	});
	isAutoFocus && registerFocus();
};

const registerFocus = () => {
	document.getElementById('register-todo').focus();
};
const onClickTaskDel = async event => {
	const targetId = event.target.offsetParent.dataset.id
	await delTask(targetId);
	loadTaskByUserName();
};

const onClickChangeNick = async (isFirstUse) => {
	const newName = isFirstUse ? (()=>{
		let tmpNick = ''
		while(!tmpNick) tmpNick = prompt('안녕하세요😄\n닉네임을 정해주세요.')
		return tmpNick
	})() : prompt('변경할 닉네임 입력하세요.', User.getInstance().name);
	if (!newName) return;
	User.instance = await fetchUser(newName);
	setLocalStoage('user', JSON.stringify(User.getInstance()));
	await loadTaskByUserName();
};
const onClickHiddenCompletedTask = () => {
	pageData.showCompletedTask = !pageData.showCompletedTask;
	document.getElementById('hidden-completed-task_icon').className = pageData.showCompletedTask ? 'fas fa-check-circle' : 'far fa-check-circle';
	loadTaskByUserName(false);
};
const onClickAllDelCompletedTask = async () => {
	const toDoItems = document.getElementsByClassName('to-do-item')
	for(let item of toDoItems) {
		if(item.firstChild.checked)
			await delTask(item.dataset.id);
	}
	loadTaskByUserName(false);
}
const onClickFilter = async () => {
	const newFiltering = prompt('필터 조건 입력하세요.', pageData.filtering);
	pageData.filtering = newFiltering || '';
	loadTaskByUserName(false);
};
const onClickTopButton = () => {
	document.getElementById('to-do-list').scrollTop = 0;
};

document.addEventListener('click', event => {
	if (event.target.classList.value.includes('todo__chk')) onClickCheckBox(event)
	else if (event.target.classList.value.includes('item-text')) onClickTaskDetail(event)
	else if (event.target.classList.value.includes('del_btn')) onClickTaskDel(event)
})
document.getElementById('register-todo').addEventListener('keydown', onEnterCheck)
document.getElementById('todo--regi__btn').addEventListener('click', onClickAddTask)
document.getElementById('menu--chage-nick__btn').addEventListener('click', onClickChangeNick)
document.getElementById('menu--hide-cpt__btn').addEventListener('click', onClickHiddenCompletedTask)
document.getElementById('menu--all-cpt-del__btn').addEventListener('click', onClickAllDelCompletedTask)
document.getElementById('menu--filter__btn').addEventListener('click', onClickFilter)
document.getElementById('menu--top__btn').addEventListener('click', onClickTopButton);


(async function init() {
	console.log('📣  Access success..!!');
	console.log(process.env.PRINT)
	if (getLocalStoage('user')) User.instance = JSON.parse(getLocalStoage('user'));
	else await onClickChangeNick(true);
	console.log(`login success : `, User.getInstance());
	User.getInstance().id && (await loadTaskByUserName());
})();
