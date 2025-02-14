//Task 1
function areaRectangel(a, b) {
    return a * b;
}
console.log(areaRectangel(3, 5))


//Task 2
function areaCircle(r) {
    return 3.14 * r * r;
}
console.log(areaCircle(5))


//Task 3
function areaCylinder(r, h) {
    return 2 * 3.14 * r * (h + r);
}
console.log(areaCylinder(5, 10))


//Task 4
function Areas(area) {
    for (const areaElement of area) {
        console.log(areaElement)
    }
}

let area = [1.4, 56,true,'hello']
Areas(area)


//Taks 5
document.write(`<h2>Taks 5</h2>`);
function paragraph(text) {
    document.write(`<p>${text}</p>`);
}

let text = 'hello';
paragraph(text);


//Taks 6
document.write(`<h2>Taks 6</h2>`);
function ulElement(li) {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${li}</li>`);
    }
    document.write(`</ul>`);
}

let li = 'Java';
ulElement(li);


//Taks 7
document.write(`<h2>Taks 7</h2>`);
function ulElementInt(liText, liNumber) {
    document.write(`<ul>`);
    for (let i = 0; i < liNumber; i++) {
        document.write(`<li>${liText}</li>`);
    }
    document.write(`</ul>`);
}

ulElementInt('Java', 5);


//Taks 8
document.write(`<h2>Taks 8</h2>`);
function listOfItems(...lists) {
    document.write(`<ul>`);
    for (const list of lists) {
        document.write(`<li>${list}</li>`);
    }
    document.write(`</ul>`);
}
listOfItems(1, 'css', 5, 500, true);


//Task 9
document.write(`<h2>Taks 9</h2>`);
function UsersList(users) {
    for (const user of users){
        document.write(` <div>
        <p>${user.id}</p>
        <p>${user.name}</p>
        <p>${user.age}</p>
        </div>`)
    }
}

let users = [
    {id:1, name: 'vasya', age: 31},
    {id:2, name: 'petya', age: 30},
    {id:3, name: 'kolya', age: 29},
    {id:4, name: 'olya', age: 28},
    {id:5, name: 'max', age: 30},
];
UsersList(users)


//Task 10
function minNumber(arr) {
    return Math.min(...arr)
}
let arr = [6, 98, 4, -2, 10];
console.log(minNumber(arr))


//Task 11 EKRNVPM