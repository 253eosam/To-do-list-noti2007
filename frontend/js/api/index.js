const api = (url, method = 'GET', data) => {
	return fetch(`http://localhost:8081${url}`, {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}).then(response => response.status === 200 && response.json());
};

const fetchUser = name => api(`/users/${name}`, 'POST');
const fetchTask = name => api(`/posts/users/${name}`);
const updateTaskStatus = id => api(`/posts/${id}`, 'PATCH');
const postTask = (name, data) => api(`/posts/${name}`, 'POST', data);
const delTask = id => api(`/posts/${id}`, 'DELETE');
const updateTask = (id, data) => api(`/posts/${id}`, 'PUT', data);
const fetchFilterTask = (name, data) => api(`/posts/condition/${name}`, 'POST', data);
