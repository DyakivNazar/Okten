//Task 1
let areaRectangel1:(a:number, b:number)=>number = (a:number, b:number):number=> a * b;
console.log(areaRectangel1(3, 5))


//Task 2
let areaCircle1:(r:number)=>number  = (r:number):number => 3.14 * r * r;
console.log(areaCircle1(5))


//Task 3
let areaCylinder1:(r:number, h:number)=>number = (r:number, h:number):number => 2 * 3.14 * r * (h + r);
console.log(areaCylinder1(5, 10))


//Task 4
let Areas1:(area:(string|number|boolean)[])=>void = (area:(string|number|boolean)[]):void => {
    for (const areaElement of area) {
        console.log(areaElement);
    }
};
let area1:(string|number|boolean)[] = [1.4, 56,true,'hello']
Areas1(area1)


//Taks 5
document.write(`<h2>Taks 5</h2>`);
let paragraph1:(text:string)=>void = (text:string):void => document.write(`<p>${text}</p>`);

let text1:string = 'hello';
paragraph1(text1);


//Taks 6
document.write(`<h2>Taks 6</h2>`);
let ulElement1:(li:string)=>void = (li:string):void => {
    document.write(`<ul>`);
    for (let i:number = 0; i < 3; i++) {
        document.write(`<li>${li}</li>`);
    }
    document.write(`</ul>`);
}
let li1:string = 'Java';
ulElement1(li1);


//Taks 7
document.write(`<h2>Taks 7</h2>`);
let ulElementInt1:(liText:string, liNumber:number)=>void = (liText:string, liNumber:number):void => {
    document.write(`<ul>`);
    for (let i:number = 0; i < liNumber; i++) {
        document.write(`<li>${liText}</li>`);
    }
    document.write(`</ul>`);
}
ulElementInt1('Java', 5);


//Taks 8
document.write(`<h2>Taks 8</h2>`);
let listOfItems2:(...lists:any[])=>void = (...lists:any[]):void => {
    document.write(`<ul>`);
    for (const list of lists) {
        document.write(`<li>${list}</li>`);
    }
    document.write(`</ul>`);
}
listOfItems2(1, 'css', 5, 500, true);


//Task 9
type users3T =  {
  id: number;
  name: string;
  age: number;
}
document.write(`<h2>Taks 9</h2>`);
let UsersList1:(users:users3T[])=>void = (users:users3T[]):void => {
    for (const user of users){
        document.write(` <div>
        ${user.id}
        ${user.name}
        ${user.age}
        </div>`)
    }
}

let users3:users3T[] = [
    {id:1, name: 'vasya', age: 31},
    {id:2, name: 'petya', age: 30},
    {id:3, name: 'kolya', age: 29},
    {id:4, name: 'olya', age: 28},
    {id:5, name: 'max', age: 30},
];
UsersList1(users3)


//Task 10
let minNumber1:(arr:number[])=>number = (arr:number[]):number => Math.min(...arr);

let arr2:number[] = [6, 98, 4, -2, 10];
console.log(minNumber1(arr2))
//OR
let minNum1:(numbers:number[])=>number = (numbers:number[]):number => {
    let min:number = numbers[0];
    for (let i:number = 1; i < numbers.length; i++) {
        let number:number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log(minNum1(arr2));


//Task 11
let sumArr1:(arrs:number[])=>number = (arrs:number[]):number => {
    let total:number = 0;
    for (const num of arrs) {
        total += num;
    }
    return total;
}
console.log(sumArr1([1,2,10]))


//Task 12
let swapArr1:(arrs:number[], index1:number, index2:number)=>number[] = (arrs:number[], index1:number, index2:number):number[] => {
    let temp:number = arrs[index1];
    arrs[index1] = arrs[index2];
    arrs[index2] = temp;
    return arrs;
}
console.log(swapArr1([11, 22, 33, 44], 2, 1));


//Task 13
type currencyValuesT ={
    currency: string;
    value: number;
}
let exchange1:(sumUAH:number, currencyValues:currencyValuesT[] ,exchangeCurrency:string)=>number = (sumUAH:number, currencyValues:currencyValuesT[] ,exchangeCurrency:string):number => {
    let result:number = 0;
    for (const key in currencyValues) {
        if (exchangeCurrency === currencyValues[key].currency){
            result = sumUAH / currencyValues[key].value
        }
    }
    return result;
}
console.log(exchange1(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));