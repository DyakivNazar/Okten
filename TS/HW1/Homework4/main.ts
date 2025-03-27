//Task 1
function areaRectangel(a:number, b:number):number {
    return a * b;
}
console.log(areaRectangel(3, 5))


//Task 2
function areaCircle(r:number):number {
    return 3.14 * r * r;
}
console.log(areaCircle(5))


//Task 3
function areaCylinder(r:number, h:number):number {
    return 2 * 3.14 * r * (h + r);
}
console.log(areaCylinder(5, 10))


//Task 4
function Areas(area:(string|number|boolean)[]):void {
    for (const areaElement of area) {
        console.log(areaElement)
    }
}

let area:(string|number|boolean)[] = [1.4, 56,true,'hello']
Areas(area)


//Taks 5
document.write(`<h2>Taks 5</h2>`);
function paragraph(text:string):void {
    document.write(`<p>${text}</p>`);
}

let text = 'hello';
paragraph(text);


//Taks 6
document.write(`<h2>Taks 6</h2>`);
function ulElement(li:string):void {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${li}</li>`);
    }
    document.write(`</ul>`);
}

let li:string = 'Java';
ulElement(li);


//Taks 7
document.write(`<h2>Taks 7</h2>`);
function ulElementInt(liText:string, liNumber:number):void {
    document.write(`<ul>`);
    for (let i = 0; i < liNumber; i++) {
        document.write(`<li>${liText}</li>`);
    }
    document.write(`</ul>`);
}

ulElementInt('Java', 5);


//Taks 8
document.write(`<h2>Taks 8</h2>`);
function listOfItems1(...lists:any[]):void {
    document.write(`<ul>`);
    for (const list of lists) {
        document.write(`<li>${list}</li>`);
    }
    document.write(`</ul>`);
}
listOfItems1(1, 'css', 5, 500, true);


//Task 9
document.write(`<h2>Taks 9</h2>`);
function UsersList(users:any[]):void {
    for (const user of users){
        document.write(` <div>
        ${user.id}
        ${user.name}
        ${user.age}
        </div>`)
    }
}

interface IUsers1  {
  id: number;
  name: string;
  age: number;
}

let users2:IUsers1[] = [
    {id:1, name: 'vasya', age: 31},
    {id:2, name: 'petya', age: 30},
    {id:3, name: 'kolya', age: 29},
    {id:4, name: 'olya', age: 28},
    {id:5, name: 'max', age: 30},
];
UsersList(users2)


//Task 10
function minNumber(arr:number[]):number {
    return Math.min(...arr)
}
let arr1:number[] = [6, 98, 4, -2, 10];
console.log(minNumber(arr1))
//OR
function minNum(numbers:number[]):number {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log(minNum(arr1));


//Task 11
function sumArr(arrs:number[]):number {
    let total = 0;
    for (const num of arrs) {
        total += num;
    }
    return total;
}
console.log(sumArr([1,2,10]))


//Task 12
function swapArr(arrs:number[], index1:number, index2:number):number[] {
    let temp:number = arrs[index1];
    arrs[index1] = arrs[index2];
    arrs[index2] = temp;
    return arrs;
}
console.log(swapArr([11, 22, 33, 44], 2, 1));


//Task 13
type currencyValuesType ={
  currency: string;
  value: number;
}
function exchange(sumUAH:number,currencyValues:currencyValuesType[],exchangeCurrency:string):number {
    let result:number = 0;
    for (const key in currencyValues) {
        if (exchangeCurrency === currencyValues[key].currency){
            result = sumUAH / currencyValues[key].value
        }
    }
    return result;
}
console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'));