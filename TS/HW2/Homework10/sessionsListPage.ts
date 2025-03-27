let dateJSON:string = localStorage.getItem('sessionsList')!;

let users5:string = JSON.parse(dateJSON);
let div:HTMLDivElement = document.createElement('div');
div.innerText = `${users5[users5.length - 1]}`;
document.body.appendChild(div);