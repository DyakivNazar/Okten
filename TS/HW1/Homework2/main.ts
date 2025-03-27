'use strict';
// Масиви та об'єкти
console.log('Масиви та об\'єкти');
// Task 1
console.log('Task 1');
let arr: (string | number | boolean)[] = [12, 3, 2.5, 'hello', 'world', true, false, -999, 3.14, 125057];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// Task 2;

class BooksType {
    title: string;
    pageCount: number;
    genre: string;
    authors?:{
        name: string;
        age: number;
    }

    constructor(title: string, pageCount: number, genre: string, authors: { name: string; age: number }) {
        this.title = title;
        this.pageCount = pageCount;
        this.genre = genre;
        this.authors = authors;
    }
}

let book1: BooksType = {
    title: 'Гаррі Поттер і філософський камінь',
    pageCount: 320,
    genre: 'Роман',
}
let book2:BooksType = {
    title: 'Таємничий острів',
    pageCount: 606,
    genre: 'Науково-Фантастичний',
}
let book3:BooksType = {
    title: 'Маленький принц',
    pageCount: 32,
    genre: 'Філософський роман',
}

// Task 3
let book4:BooksType = {
    title: 'Гаррі Поттер і філософський камінь',
    pageCount: 320,
    genre: 'Роман',
    authors: {
        name: 'Джоан Роулінг ',
        age: 1997,
    },
}
let book5:BooksType = {
    title: 'Таємничий острів',
    pageCount: 606,
    genre: 'Науково-Фантастичний',
    authors: {
        name: 'Жуль Верн',
        age: 1874,
    },
}
let book6:BooksType = {
    title: 'Маленький принц',
    pageCount: 32,
    genre: 'Філософський роман',
    authors: {
        name: 'Антуан де Сент-Екзюпері',
        age: 1942,
    },
}

// Task 4
console.log('');
console.log('Task 4');
type UsresType =  {
  name: string;
  username: string;
  password: string;
}
let users:UsresType[] = [
    {
        name: 'nazar',
        username: 'dyakiv',
        password: '123agsf456',
    },
    {
        name: 'taras',
        username: 'pipov',
        password: 'Asdfj456',
    },
    {
        name: 'maks',
        username: 'antonov',
        password: '12Hhsf_ab',
    },
    {
        name: 'nazar',
        username: 'dyakiv',
        password: '123agsf456',
    },
    {
        name: 'taras',
        username: 'pipov',
        password: 'Asdfj456',
    },
    {
        name: 'maks',
        username: 'antonov',
        password: '12Hhsf_ab',
    },
    {
        name: 'maks',
        username: 'antonov',
        password: '12Hhsf_ab',
    },
    {
        name: 'nazar',
        username: 'dyakiv',
        password: '123agsf456',
    },
    {
        name: 'taras',
        username: 'pipov',
        password: 'Asdfj456',
    },
    {
        name: 'maks',
        username: 'antonov',
        password: '12Hhsf_ab',
    },
]
console.log(users[0]['password']);
console.log(users[1]['password']);
console.log(users[2]['password']);
console.log(users[3]['password']);
console.log(users[4]['password']);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);

//Task 5
let arrTemperature7Days:number[][] = [
    [-15, -10, -12],
    [-20, -15, -20],
    [-16, -15, -20],
    [-18, -16, -17],
    [-19, -19, -19],
    [-10, -5, -6],
    [30, 30, 30]
]


// Логічні розгалуження
console.log('');
console.log('Логічні розгалуження');
// Task 1
console.log('Task 1');
let x:number = 0;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно')
}

//Task 2
console.log('');
console.log('Task 2');
let time:number = 30;
if (time >= 0 && time <= 59) {
    if (time <= 15) {
        console.log('Перша чверть');
    } else if (time > 15 && time <= 30) {
        console.log('Друга чверть');
    } else if (time > 30 && time <= 45) {
        console.log('Третя чверть');
    } else if (time > 45 && time <= 59) {
        console.log('Четверта чверть');
    }
} else {
    console.log('time в неправильному діапазоні (0-59)');
}

//Task 3
console.log('');
console.log('Task 3');
let day:number = 15;
if (day >= 1 && day <= 31) {
    if (day <= 10) {
        console.log('Перша декада');
    } else if (day > 10 && day <= 20) {
        console.log('Друга декада');
    } else if (day > 20 && day <= 31) {
        console.log('Третя декада');
    }
} else {
    console.log('day в неправильному діапазоні (1-31)');
}

//Task 4
console.log('');
console.log('Task 4');
let numberOfDay: number = Number(prompt('Введить порядковий номер дня тижня'));
switch (numberOfDay) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Невірний порядковий номер дня тижня');
}

//Task 5
console.log('');
console.log('Task 5');
let number1:number = 80;
let number2:number = 70;
if (number1 === number2) {
    console.log(`${number1} рівні числа`);
} else {
    let access:number = number1 > number2 ? number1 : number2;
    console.log(`${access} максимальне число`)
}

//Task 6
console.log('');
console.log('Task 6');
let v:number|string|null|undefined|boolean;
v = null;
if (!v) {
    v = 'default';
}
console.log(v);

//Task 7
console.log('');
console.log('Task 7');
type CoursesAndDurationArrayType = {
  title: string;
  monthDuration: number;
}
let coursesAndDurationArray:CoursesAndDurationArrayType[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration >= 5) {
    console.log(`${coursesAndDurationArray[0].title} Супер`)
}
if (coursesAndDurationArray[1].monthDuration >= 5) {
    console.log(`${coursesAndDurationArray[1].title} Супер`)
}
if (coursesAndDurationArray[2].monthDuration >= 5) {
    console.log(`${coursesAndDurationArray[2].title} Супер`)
}
if (coursesAndDurationArray[3].monthDuration >= 5) {
    console.log(`${coursesAndDurationArray[3].title} Супер`)
}
if (coursesAndDurationArray[4].monthDuration >= 5) {
    console.log(`${coursesAndDurationArray[4].title} Супер`)
}
if (coursesAndDurationArray[5].monthDuration >= 5) {
    console.log(`${coursesAndDurationArray[5].title} Супер`)
}