let str1:string = 'hello world';
let str2:string = 'lorem ipsum';
let str3:string = 'javascript is cool';

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
let str4:string = 'HELLO WORLD';
let str5:string = 'LOREM IPSUM';
let str6:string = 'JAVASCRIPT IS COOL';
console.log(str4.toLowerCase());
console.log(str5.toLowerCase());
console.log(str6.toLowerCase());


//Task 4
console.log('');
console.log('Task 4');
let strd1:string = ' dirty string   ';
console.log(strd1.indexOf('d'));
console.log(strd1.indexOf('g'));
let strd:string = strd1.substring(1,13);
console.log(strd);


//Task 5
console.log('');
console.log('Task 5');
function stringToarray(str:string):string[]|undefined {
    if(str){
        let arr:string[] = str.split(' ');
        return arr;
    }
}
let str:string = 'Ревуть воли як ясла повні';
console.log(stringToarray(str));


//Task 6
console.log('');
console.log('Task 6');
let arrNum:number[] = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(arrNum.map((value:number):string => value.toString()));


//Task 6
console.log('');
console.log('Task 6');
function sortNums(array:number[],direction:string):number[]|undefined {
    if(direction === 'ascending'){
        return array.sort((a:number, b:number):number => {
            return a - b;
        });
    }else if(direction === 'descending'){
        return array.sort((a:number, b:number):number => {
            return b - a;
        });
    }
}
let nums:number[] = [11,21,3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));


//Task 7
console.log('');
console.log('Task 7');
type coursesAndDurationArray1T = {
  id?:number;
  title: string;
  monthDuration: number;
}
let coursesAndDurationArray1:coursesAndDurationArray1T[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let unsotrt:coursesAndDurationArray1T[] = coursesAndDurationArray1.sort((a:coursesAndDurationArray1T, b:coursesAndDurationArray1T):number => {
    return b.monthDuration - a.monthDuration;
});
console.log(unsotrt);
let filterCourse:coursesAndDurationArray1T[] = unsotrt.filter((value:coursesAndDurationArray1T):boolean => value.monthDuration > 5);
console.log(filterCourse);
let mapId:coursesAndDurationArray1T[] = filterCourse.map((value:coursesAndDurationArray1T, index:number):coursesAndDurationArray1T => {
    return {id: index + 1, ...value};
});
console.log(mapId);


//Task 8
console.log('');
console.log('Task 8');

let cardSuits:string[] = ['spade', 'diamond','heart', 'clubs'];
let values:string[] = ['6','7','8','9','10', 'ace','jack','queen','king'];

type cardsT = {
  cardSuit: string;
  value: string;
  color: string;
}

let cards:cardsT[] = [];
for (const cardSuit of cardSuits) {
    for (const value of values) {
        if (cardSuit === 'heart' || cardSuit === 'diamond') {
            let card:cardsT = {cardSuit: cardSuit, value: value, color: 'red'};
            cards.push(card);
        }
        else {
            let card:cardsT = {cardSuit: cardSuit, value: value, color: 'black'};
            cards.push(card);
        }
    }
}
let findSpades:cardsT|undefined = cards.find((value:cardsT):boolean => value.cardSuit === 'spade' && value.value === 'ace');
console.log(findSpades);

let findSix:cardsT[] = cards.filter((value:cardsT):boolean => value.value === '6');
console.log(findSix);

let findRed:cardsT[] = cards.filter((value:cardsT):boolean => value.color === 'red');
console.log(findRed);

let findDiamond:cardsT[] = cards.filter((value:cardsT):boolean => value.cardSuit === 'diamond');
console.log(findDiamond);

let findClubsForNine:cardsT[] = cards.filter((value:cardsT):boolean =>
    value.cardSuit === 'clubs'
);
console.log(findClubsForNine.slice(3,9));


//Task 9
console.log('');
console.log('Task 9');

interface Icard {
  spades: cardsT[];
  diamonds: cardsT[];
  hearts: cardsT[];
  clubs: cardsT[];
}

let sortCardsOfSuit:Icard = cards.reduce((suits:Icard, card:cardsT):Icard => {
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
}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(sortCardsOfSuit);


//Task 10
console.log('');
console.log('Task 10');

interface IcoursesArray {
  title: string;
  monthDuration: number;
  hourDuration: number;
  modules: string[];
}

let coursesArray:IcoursesArray[] = [
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
let searchSass:IcoursesArray[] = coursesArray.filter((value:IcoursesArray):boolean => value.modules.includes('sass'));
console.log(searchSass);

let searchDocker:IcoursesArray[] = coursesArray.filter((value:IcoursesArray):boolean => value.modules.includes('docker'));
console.log(searchDocker);
