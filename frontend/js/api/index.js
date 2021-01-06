const api = async (url, method = 'GET', data) => {
	return await fetch(`http://localhost:8080${url}`, {
		method,
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}).then(response => response.status === 200 && response.json());
};

const fetchUser = async name => await api(`/users/${name}`);
const fetchTask = async name => await api(`/posts/users/${name}`);
const updateTaskStatus = async id => await api(`/posts/${id}`, 'PATCH');
const postTask = async (name, data) => await api(`/posts/${name}`, 'POST', data);
const delTask = async id => await api(`/posts/${id}`, 'DELETE');
const updateTask = async (id, data) => await api(`/posts/${id}`, 'PUT', data);
