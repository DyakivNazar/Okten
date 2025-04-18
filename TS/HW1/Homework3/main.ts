//Task 1
document.write(`<h1>Task 1</h1>`);
for (let i:number = 0; i<10; i++) {
    document.write(`<div>hello</div>`);
}


//Task 2
document.write(`<h1>Task 2</h1>`);
for (let i:number = 0; i<10; i++) {
    document.write(`<div>hello ${i}</div>`);
}


//Task 3
document.write(`<h1>Task 3</h1>`);
let i1: number = 0;
while (i1<20) {
    document.write(`<h1>hello</h1>`);
    i1++;
}


//Task 4
document.write(`<h1>Task 4</h1>`);
let a2: number = 0;
while (a2<20) {
    document.write(`<h1>hello ${a2}</h1>`);
    a2++;
}


//Task 5
document.write(`<h1>Task 5</h1>`)
let listOfItems:string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`)
for (const listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`)
}
document.write(`</ul>`)


//Task 6
interface Iproducts  {
  title: string;
  price: number;
  image: string;
}
document.write(`<h1>Task 6</h1>`)
let products:Iproducts[] = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products){
    document.write(` <div class="product-card">
        <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
        <img src="${product.image}" alt="" class="product-image">
</div>`)
}


//Task 7
interface IUsers  {
  name: string;
  age: number;
  status: boolean;
}
document.write(`<h1>Task 7</h1>`)
let users1: IUsers[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

document.write(`<h3>True</h3>`)
for (const user of users1) {
    if (user.status){
        document.write(`<p>${user.name} ${user.status}</p>`)
    }
}

document.write(`<h3>False</h3>`)
for (const user of users1) {
    if (!user.status){
        document.write(`<p>${user.name} ${user.status}</p>`)
    }
}

document.write(`<h3>Over 30</h3>`)
for (const user of users1) {
    if (user.age > 30){
        document.write(`<p>${user.name} ${user.age}</p>`)
    }
}