"use strict";
let dateJSON = localStorage.getItem('sessionsList');
let users5 = JSON.parse(dateJSON);
let div = document.createElement('div');
div.innerText = `${users5[users5.length - 1]}`;
document.body.appendChild(div);
