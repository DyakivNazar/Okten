"use strict";
//Task 1
console.log('Task 1');
let user = {
    name: 'vasya',
    age: 21,
    skills: ['html', 'js'],
    info() {
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}`);
            }
        }
    }
};
function clone(obj) {
    if (obj) {
        let functions = [];
        for (const funName in obj) {
            if (typeof obj[funName] === 'function') {
                let funClone = obj[funName].bind({});
                functions.push({ funClone, funName });
            }
        }
        let cloneObj = JSON.parse(JSON.stringify(obj));
        for (const fun of functions) {
            cloneObj[fun.funName] = fun.funClone;
        }
        return cloneObj;
    }
}
let clon = clone(user);
clon.info();
//Task 2
console.log('');
console.log('Task 2');
let coursesAndDurationArray2 = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
let mapID = coursesAndDurationArray2.map((value, index) => ({ id: index + 1, ...value }));
console.log(mapID);
