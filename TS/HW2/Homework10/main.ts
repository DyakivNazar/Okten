//Task 1
let button:HTMLButtonElement = document.getElementsByTagName('button')[0]
let tex:HTMLElement = document.getElementById('text') as HTMLElement;
button.onclick = function ():void {
    tex.innerText = ''
}


let forms: HTMLCollectionOf<HTMLFormElement> = document.forms;

//Task 2
let f1: HTMLFormElement = forms[0];

f1.onsubmit = function (ev:SubmitEvent):void {
    ev.preventDefault();
    let age: { age: number } = { age: parseInt(((this as HTMLFormElement).querySelector('[name="age"]') as HTMLInputElement).value) }
    let p:HTMLParagraphElement = document.createElement('p')
    if (age.age < 18) {
        p.innerText = 'вік меньше ніж 18'
        document.body.appendChild(p)
    } else {
        p.innerText = 'вік >= 18'
        document.body.appendChild(p)
    }
}


//Task 3
let f2:HTMLFormElement = document.forms.namedItem('f2') as HTMLFormElement;


f2.onsubmit = function (ev:SubmitEvent):void {
    ev.preventDefault();
    interface IUser {
        name: string;
        surname: string;
        age: number;
    }
    let name:string = ((this as HTMLFormElement).querySelector('[name="name"]') as HTMLInputElement).value
    let surname:string = ((this as HTMLFormElement).querySelector('[name="surname"]') as HTMLInputElement).value
    let age:number = parseInt(((this as HTMLFormElement).querySelector('[name="age"]') as HTMLInputElement).value)
    let userData:IUser = {name: name, surname: surname, age: age}
    let div:HTMLDivElement = document.createElement('div')
    div.innerText = `name: ${userData.name}, surname: ${userData.surname}, age: ${userData.age}`
    document.body.appendChild(div)
}


//Task 4
let reload:number = Number(localStorage.getItem('number'))
reload += 1
localStorage.setItem('number', reload.toString())
document.getElementById('reloadnum')!.innerText = `${reload}`;


//Task 5
window.onload = function ():void {
    let sessionsList:string[] = JSON.parse(localStorage.getItem('sessionsList')!) || [];
    let now:Date = new Date();
    const formatted = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    sessionsList.push(formatted);
    localStorage.setItem('sessionsList', JSON.stringify(sessionsList));

}


//Task 5
let inputNum:HTMLElement = document.getElementById('num') as HTMLInputElement;
inputNum.oninput = function ():void {
    document.getElementById('convert')!.innerText = `${Number((this as HTMLInputElement).value) * 2.2}`;
}


//Task 6
function addToLocalStorage(arrayName:string, objToAdd:number[]):void {
    let arrFromLocStor:number[] = JSON.parse(localStorage.getItem(arrayName)!);

    if (arrFromLocStor) {
        arrFromLocStor.push(...objToAdd);
        localStorage.setItem(arrayName, JSON.stringify(arrFromLocStor));
    } else {
        console.log(('Такого масива в LocalStorage не існує'));
    }
}

addToLocalStorage('sessionsList', [1, 2, 3, 4])


//Task 7
let f3:HTMLFormElement = document.forms.namedItem('f3') as HTMLFormElement;

let table:HTMLElement = document.getElementById('table')!;

f3.onsubmit = function (ev:SubmitEvent):void {
    table.innerText = ''
    ev.preventDefault();

    interface ITable {
        lines: number;
        numCells: number;
        textCells: string;
    }
    let lines:number = parseInt(((this as HTMLFormElement).querySelector('[name="lines"]') as HTMLInputElement).value)
    let numCells:number = parseInt(((this as HTMLFormElement).querySelector('[name="numCells"]') as HTMLInputElement).value)
    let textCells:string = ((this as HTMLFormElement).querySelector('[name="textCells"]') as HTMLInputElement).value

    let tableDate:ITable = {lines: lines, numCells: numCells, textCells: textCells}

    for (let i:number = 0; i < tableDate.lines; i++) {
        let tr:HTMLTableRowElement = document.createElement('tr');
        for (let j:number = 0; j < tableDate.numCells; j++) {
            let td:HTMLTableCellElement = document.createElement('td');
            td.innerText = tableDate.textCells;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}


//Task 8
let ctogrn:number = Number(localStorage.getItem('ctogrn'))
document.getElementById('ctogrn')!.innerText = `${100 + ctogrn}`;
setTimeout(():void => {
    ctogrn += 10
    localStorage.setItem('ctogrn', ctogrn.toString())
    document.getElementById('ctogrn')!.innerText = `${100 + ctogrn}`;
}, 10000);


//Task 9
function paginattion():void {
    const arrData:string[] = Array.from({length: 100}, (v:number, i:number):string => `Елемент ${i + 1}`);
    let page:number = 1;
    let arrDataCount:number = 10;
    let pagtext:HTMLElement = document.getElementById('pagtext')!;
    let prev:HTMLElement = document.getElementById('prev')!;
    let next:HTMLElement = document.getElementById('next')!;
    const totalPages:number = Math.ceil(arrData.length / arrDataCount);

    function getPaginatedData(page:number, pageSize:number):string[] {
        const startIndex:number = (page - 1) * pageSize;
        const endIndex:number = startIndex + pageSize;
        return arrData.slice(startIndex, endIndex);
    }

    function updatePage():void {
        let getElementPaginatedData:string[] = getPaginatedData(page, arrDataCount);
        for (const elementPaginatedDatum of getElementPaginatedData) {
            let p:HTMLParagraphElement = document.createElement('p');
            p.innerHTML = elementPaginatedDatum
            pagtext.appendChild(p);
        }
    }

    prev.onclick = function ():void {
        pagtext.innerText = ''
        if (page > 1) {
            page--;
            updatePage();
        }
        else if (page === 1) {
            updatePage();
        }
    }
    next.onclick = function ():void {
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