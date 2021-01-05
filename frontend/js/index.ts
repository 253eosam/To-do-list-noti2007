console.log('Success load index.js file');

// fetch('http://localhost:8080/users/DDD05')
// 	.then(res => res.json())
// 	.then(data => console.log(data));

fetch('http://localhost:8080/health/check').then(console.log);
