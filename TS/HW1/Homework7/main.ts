//Task 1
class User {
    constructor(public id:number, public name:string, public surname:string, public email:string, public phone:string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }

}

let users4:User[] = [
    new User(1, "Олександр", "Ковіль", "olex.koval@example.com", "+380671234567"),
    new User(2, "Марія", "Іваненко", "maria.ivanenko@example.com", "+380661112233"),
    new User(3, "Ігор", "Петренко", "igor.petrenko@example.com", "+380931234567"),
    new User(4, "Світлана", "Мельник", "svitlana.melnyk@example.com", "+380501122334"),
    new User(5, "Василь", "Гончарук", "vasyl.goncharuk@example.com", "+380639876543"),
    new User(6, "Андрій", "Шевченко", "andriy.shevchenko@example.com", "+380987654321"),
    new User(7, "Олена", "Федорчук", "olena.fedorchuk@example.com", "+380671998877"),
    new User(8, "Микола", "Романюк", "mykola.romanyuk@example.com", "+380951234567"),
    new User(9, "Тетяна", "Захарченко", "tetyana.zakharchenko@example.com", "+380501234567"),
    new User(10, "Дмитро", "Сергієнко", "dmytro.sergienko@example.com", "+380931998877")
];


//Task 2
console.log('Task 2');
let usersEven:User[] = users4.filter((value:User):boolean => value.id % 2 === 0);
console.log(usersEven);


//Task 3
console.log('');
console.log('Task 3');
let sortUpUs:User[] = users4.sort((a:User, b:User):number => {
    return a.id - b.id;
});
console.log(sortUpUs);


//Task 4
interface Iorder {
  price: number;
  title: string;
}

class Client extends User {
    constructor(public id:number, public name:string, public surname:string, public email:string, public phone:string, public order:Iorder[]) {
        super(id, name, surname, email, phone);
        this.order = order;
    }
}

let clients:Client[] = [
    new Client(1, "Олександр", "Ковіль", "olex.koval@example.com", "+380671234567", [
        {price: 120, title: "Ноутбук Lenovo IdeaPad 3"},
        {price: 362, title: "Смартфон Samsung Galaxy S23"},
        {price: 540, title: "Бездротові навушники Apple AirPods Pro"}]),
    new Client(2, "Марія", "Іваненко", "maria.ivanenko@example.com", "+380661112233",
        [{price: 760, title: "Телевізор Sony Bravia 55"},
            {price: 800, title: "Механічна клавіатура Razer BlackWidow"},
            {price: 965, title: "Зовнішній жорсткий диск WD 2TB"},
            {price: 10000, title: "Смарт-годинник Apple Watch Series 9"}]),
    new Client(3, "Ігор", "Петренко", "igor.petrenko@example.com", "+380931234567", [
        {price: 120, title: "Ноутбук Lenovo IdeaPad 3"},
        {price: 362, title: "Смартфон Samsung Galaxy S23"}]),
    new Client(4, "Світлана", "Мельник", "svitlana.melnyk@example.com", "+380501122334", [
        {price: 760, title: "Телевізор Sony Bravia 55"},
        {price: 965, title: "Зовнішній жорсткий диск WD 2TB"},
        {price: 10000, title: "Смарт-годинник Apple Watch Series 9"}]),
    new Client(5, "Василь", "Гончарук", "vasyl.goncharuk@example.com", "+380639876543", [
        {price: 760, title: "Телевізор Sony Bravia 55"}]),
    new Client(6, "Андрій", "Шевченко", "andriy.shevchenko@example.com", "+380987654321", [
        {price: 120, title: "Ноутбук Lenovo IdeaPad 3"},
        {price: 362, title: "Смартфон Samsung Galaxy S23"},
        {price: 362, title: "Смартфон Samsung Galaxy S23"},
        {price: 362, title: "Смартфон Samsung Galaxy S23"},
        {price: 540, title: "Бездротові навушники Apple AirPods Pro"}]),
    new Client(7, "Олена", "Федорчук", "olena.fedorchuk@example.com", "+380671998877", [
        {price: 120, title: "Ноутбук Lenovo IdeaPad 3"},
        {price: 362, title: "Смартфон Samsung Galaxy S23"},
        {price: 362, title: "Смартфон Samsung Galaxy S23"},
        {price: 362, title: "Смартфон Samsung Galaxy S23"},
        {price: 10000, title: "Смарт-годинник Apple Watch Series 9"},
        {price: 10000, title: "Смарт-годинник Apple Watch Series 9"},
        {price: 10000, title: "Смарт-годинник Apple Watch Series 9"},
        {price: 10000, title: "Смарт-годинник Apple Watch Series 9"}]),
    new Client(8, "Микола", "Романюк", "mykola.romanyuk@example.com", "+380951234567", [
        {price: 760, title: "Телевізор Sony Bravia 55"},
        {price: 760, title: "Телевізор Sony Bravia 55"},
        {price: 760, title: "Телевізор Sony Bravia 55"},
        {price: 800, title: "Механічна клавіатура Razer BlackWidow"},
        {price: 965, title: "Зовнішній жорсткий диск WD 2TB"},
        {price: 10000, title: "Смарт-годинник Apple Watch Series 9"}]),
    new Client(9, "Тетяна", "Захарченко", "tetyana.zakharchenko@example.com", "+380501234567", [
        {price: 760, title: "Телевізор Sony Bravia 55"},
        {price: 800, title: "Механічна клавіатура Razer BlackWidow"},
        {price: 800, title: "Механічна клавіатура Razer BlackWidow"},
        {price: 10000, title: "Смарт-годинник Apple Watch Series 9"}]),
    new Client(10, "Дмитро", "Сергієнко", "dmytro.sergienko@example.com", "+380931998877", [
        {price: 760, title: "Телевізор Sony Bravia 55"},
        {price: 760, title: "Телевізор Sony Bravia 55"},
        {price: 760, title: "Телевізор Sony Bravia 55"},
        {price: 800, title: "Механічна клавіатура Razer BlackWidow"},
        {price: 965, title: "Зовнішній жорсткий диск WD 2TB"}])
];


//Task 5
console.log('');
console.log('Task 5');
let sortUpClient:Client[] = clients.sort((a:Client, b:Client):number => {
    return a.order.length - b.order.length;
});
console.log(sortUpClient);


//Task 6
console.log('');
console.log('Task 6');

class Car {

    constructor(public model:string, public producer:string, public year:number, public maxSpeed:number, public volume:number) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    driver?: { name: string };

    drive():void {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    info():void {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}`);
            }
        }
    };

    increaseMaxSpeed(newSpeed:number):void {
        if (newSpeed > 0) this.maxSpeed += newSpeed;
    }

    changeYear(newValue:number):void {
        this.year = newValue;
    }

    addDriver(driver:{name:string}):void {
        this.driver = driver;
    }
}

let car:Car = new Car('Model X', 'Tesla', 2015, 250, 1020);
car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2020);
car.addDriver({name: 'ivan'})
console.log(car);


//Task 7
console.log('');
console.log('Task 7');

let car1:Car = new Car('Model X', 'Tesla', 2015, 250, 1020);
car1.drive();
car1.info();
car1.increaseMaxSpeed(100);
car1.changeYear(2020);
car1.addDriver({name: 'ivan'})
console.log(car1);


//Task 8
console.log('');
console.log('Task 8');

class Cinderella{
    constructor(public name:string, public age:number, public foot_size:number) {
        this.name = name;
        this.age = age;
        this.foot_size = foot_size;
    }
}

class Prince extends Cinderella{
    constructor(public name:string, public age:number, public foot_size:number) {
        super(name, age, foot_size);
    }
}

let cinderellas:Cinderella[] = [
    new Cinderella('Sara', 18, 35),
    new Cinderella('Vika', 17, 36),
    new Cinderella('Lilya', 19, 37),
    new Cinderella('Rita', 20, 38),
    new Cinderella('Tetya', 21, 39),
    new Cinderella('Jyli', 22, 40),
    new Cinderella('Katya', 23, 41),
    new Cinderella('Nana', 25, 37),
    new Cinderella('Diana', 30, 36),
    new Cinderella('Anna', 35, 38)
];

let prince:Prince = new Prince('Jonefik', 25, 38);

let findCinOfPrinc:Cinderella[] = []
for (const cinderellasKey of cinderellas) {
    if (cinderellasKey.foot_size === prince.foot_size) {
        findCinOfPrinc.push(cinderellasKey);
    }
}

console.log(findCinOfPrinc);

console.log(cinderellas.find((value:Cinderella):boolean => value.foot_size === prince.foot_size));


//Task 9
console.log('');
console.log('Task 9');

interface Array<T> {
    MyForeach(callback: (value: T, index: number, array: T[]) => void): void;
    MyFilter(callback: (value: T, index: number, array: T[]) => boolean): T[];
}

Array.prototype.MyForeach = function<T> (value: (item: T, index: number, array: T[]) => void):void {
    let index:number = 0;
    for (const item of this) {
        value(item, index, this);
        index++;
    }
}
Array.prototype.MyFilter = function<T> (value: (item: T, index: number, array: T[]) => boolean):T[] {
    let index:number = 0;
    let arr:any[] = [];
    for (const item of this) {
        if (value(item, index, this)) {
            arr.push(item);
        }
        index++;
    }
    return arr;
}
cinderellas.MyForeach((item:Cinderella):void => {
    console.log(item);
});

const result:Cinderella[] = cinderellas.MyFilter((value:Cinderella):boolean => value.foot_size >= 38);
console.log(result);

