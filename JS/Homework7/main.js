//Task 1
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
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
let usersEven = users.filter(value => value.id % 2 === 0);
console.log(usersEven);


//Task 3
console.log('');
console.log('Task 3');
let sortUpUs = users.sort((a, b) => {
    return a.id - b.id;
});
console.log(sortUpUs);


//Task 4
class Client extends User {
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order;
    }
}

let clients = [
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
let sortUpClient = clients.sort((a, b) => {
    return a.order.length - b.order.length;
});
console.log(sortUpClient);


//Task 6
console.log('');
console.log('Task 6');

function Car(model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    this.info = function () {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}`);
            }
        }
    };

    this.increaseMaxSpeed = function (newSpeed) {
        if (newSpeed > 0) this.maxSpeed += newSpeed;
    }

    this.changeYear = function (newValue) {
        this.year = newValue;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car = new Car('Model X', 'Tesla', 2015, 250, 1020);
car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2020);
car.addDriver({name: 'ivan'})
console.log(car);


//Task 7
console.log('');
console.log('Task 7');

class Car1 {

    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    info() {
        for (const car1Key in this) {
            console.log(`${car1Key} - ${this[car1Key]}`);
        }
    };

    increaseMaxSpeed(newSpeed) {
        if (newSpeed > 0) this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let car1 = new Car1('Model X', 'Tesla', 2015, 250, 1020);
car1.drive();
car1.info();
car1.increaseMaxSpeed(100);
car1.changeYear(2020);
car1.addDriver({name: 'ivan'})
console.log(car1);


//Task 8
console.log('');
console.log('Task 8');