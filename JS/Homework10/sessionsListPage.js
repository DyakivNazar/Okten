let dateJSON = localStorage.getItem('sessionsList');

let users = JSON.parse(dateJSON);
let div = document.createElement('div');
div.innerText = users[users.length-1];
document.body.appendChild(div);