"use strict";
let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';
//Task 1
console.log('Task 1');
console.log(str1, str1.length);
console.log(str2, str2.length);
console.log(str3, str3.length);
//Task 2
console.log('');
console.log(str1.toUpperCase());
console.log(str2.toUpperCase());
console.log(str3.toUpperCase());
console.log('Task 2');
//Task 3
console.log('');
console.log('Task 3');
let str4 = 'HELLO WORLD';
let str5 = 'LOREM IPSUM';
let str6 = 'JAVASCRIPT IS COOL';
console.log(str4.toLowerCase());
console.log(str5.toLowerCase());
console.log(str6.toLowerCase());
//Task 4
console.log('');
console.log('Task 4');
let strd1 = ' dirty string   ';
console.log(strd1.indexOf('d'));
console.log(strd1.indexOf('g'));
let strd = strd1.substring(1, 13);
console.log(strd);
//Task 5
console.log('');
console.log('Task 5');
function stringToarray(str) {
    if (str) {
        let arr = str.split(' ');
        return arr;
    }
}
let str = 'Ревуть воли як ясла повні';
console.log(stringToarray(str));
//Task 6
console.log('');
console.log('Task 6');
let arrNum = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(arrNum.map((value) => value.toString()));
//Task 6
console.log('');
console.log('Task 6');
function sortNums(array, direction) {
    if (direction === 'ascending') {
        return array.sort((a, b) => {
            return a - b;
        });
    }
    else if (direction === 'descending') {
        return array.sort((a, b) => {
            return b - a;
        });
    }
}
let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
//Task 7
console.log('');
console.log('Task 7');
let coursesAndDurationArray1 = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
let unsotrt = coursesAndDurationArray1.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
});
console.log(unsotrt);
let filterCourse = unsotrt.filter((value) => value.monthDuration > 5);
console.log(filterCourse);
let mapId = filterCourse.map((value, index) => {
    return { id: index + 1, ...value };
});
console.log(mapId);
//Task 8
console.log('');
console.log('Task 8');
let cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
let cards = [];
for (const cardSuit of cardSuits) {
    for (const value of values) {
        if (cardSuit === 'heart' || cardSuit === 'diamond') {
            let card = { cardSuit: cardSuit, value: value, color: 'red' };
            cards.push(card);
        }
        else {
            let card = { cardSuit: cardSuit, value: value, color: 'black' };
            cards.push(card);
        }
    }
}
let findSpades = cards.find((value) => value.cardSuit === 'spade' && value.value === 'ace');
console.log(findSpades);
let findSix = cards.filter((value) => value.value === '6');
console.log(findSix);
let findRed = cards.filter((value) => value.color === 'red');
console.log(findRed);
let findDiamond = cards.filter((value) => value.cardSuit === 'diamond');
console.log(findDiamond);
let findClubsForNine = cards.filter((value) => value.cardSuit === 'clubs');
console.log(findClubsForNine.slice(3, 9));
//Task 9
console.log('');
console.log('Task 9');
let sortCardsOfSuit = cards.reduce((suits, card) => {
    switch (card.cardSuit) {
        case 'spade':
            suits.spades.push(card);
            break;
        case 'diamond':
            suits.diamonds.push(card);
            break;
        case 'heart':
            suits.hearts.push(card);
            break;
        case 'clubs':
            suits.clubs.push(card);
            break;
    }
    return suits;
}, { spades: [], diamonds: [], hearts: [], clubs: [] });
console.log(sortCardsOfSuit);
//Task 10
console.log('');
console.log('Task 10');
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let searchSass = coursesArray.filter((value) => value.modules.includes('sass'));
console.log(searchSass);
let searchDocker = coursesArray.filter((value) => value.modules.includes('docker'));
console.log(searchDocker);
