//Task 1
let button = document.getElementsByTagName('button')[0]
let text = document.getElementById('text');
button.onclick = function () {
    text.innerText = ''
}


//Task 2
let f1 = document.forms.f1;

f1.onsubmit = function (ev) {
    ev.preventDefault();
    let age = {age: this.age.value}
    let p = document.createElement('p')
    if (age.age < 18) {
        p.innerText = 'вік меньше ніж 18'
        document.body.appendChild(p)
    } else {
        p.innerText = 'вік >= 18'
        document.body.appendChild(p)
    }
}


//Task 3
let f2 = document.forms.f2;

f2.onsubmit = function (ev) {
    ev.preventDefault();
    let userData = {name: this.name.value, surname: this.surname.value, age: this.age.value}
    let div = document.createElement('div')
    div.innerText = `name: ${userData.name}, surname: ${userData.surname}, age: ${userData.age}`
    document.body.appendChild(div)
}


//Task 4
let reload = +localStorage.getItem('number')
reload += 1
localStorage.setItem('number', reload)
document.getElementById('reloadnum').innerText = reload;


//Task 5
window.onload = function () {
    let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
    let now = new Date();
    const formatted = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    sessionsList.push(formatted);
    localStorage.setItem('sessionsList', JSON.stringify(sessionsList));

}


//Task 5
let inputNum = document.getElementById('num');
inputNum.oninput = function () {
    document.getElementById('convert').innerText = +this.value * 2.2;
}


//Task 6
function addToLocalStorage(arrayName, objToAdd) {
    let arrFromLocStor = JSON.parse(localStorage.getItem(arrayName));

    if (arrFromLocStor) {
        arrFromLocStor.push(objToAdd);
        localStorage.setItem(arrayName, JSON.stringify(arrFromLocStor));
    } else {
        console.log(('Такого масива в LocalStorage не існує'));
    }
}

addToLocalStorage('sessionsList', [1, 2, 3, 4])


//Task 7
let f3 = document.forms.f3;
let table = document.getElementById('table');

f3.onsubmit = function (ev) {
    table.innerText = ''
    ev.preventDefault();
    let tableDate = {lines: +this.lines.value, numCells: +this.numCells.value, textCells: this.textCells.value}

    for (let i = 0; i < tableDate.lines; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < tableDate.numCells; j++) {
            let td = document.createElement('td');
            td.innerText = tableDate.textCells;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}


//Task 8
let ctogrn = +localStorage.getItem('ctogrn')
document.getElementById('ctogrn').innerText = 100 + ctogrn;
setTimeout(() => {
    ctogrn += 10
    localStorage.setItem('ctogrn', ctogrn)
    document.getElementById('ctogrn').innerText = 100 + ctogrn;
}, 10000);


//Task 9
function paginattion() {
    const arrData = Array.from({length: 100}, (v, i) => `Елемент ${i + 1}`);
    let page = 1;
    let arrDataCount = 10;
    let pagtext = document.getElementById('pagtext');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');
    const totalPages = Math.ceil(arrData.length / arrDataCount);

    function getPaginatedData(page, pageSize) {
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return arrData.slice(startIndex, endIndex);
    }

    function updatePage() {
        let getElementPaginatedData = getPaginatedData(page, arrDataCount);
        for (const elementPaginatedDatum of getElementPaginatedData) {
            let p = document.createElement('p');
            p.innerHTML = elementPaginatedDatum
            pagtext.appendChild(p);
        }
    }

    prev.onclick = function () {
        pagtext.innerText = ''
        if (page > 1) {
            page--;
            updatePage();
        }
        else if (page === 1) {
            updatePage();
        }
    }
    next.onclick = function () {
        pagtext.innerText = ''
        if (page < totalPages) {
            page++;
            updatePage();
        }
        else if (page === totalPages) {
            updatePage();
        }
    }
    updatePage();
}

paginattion();