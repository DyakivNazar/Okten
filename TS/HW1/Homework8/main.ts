//Task 1
console.log('Task 1');
type userT ={
    name: string;
    age: number;
    skills: string[];
    info: ()=> void;
    [key: string]: string | number | string[] | (() => void);
}
let user:userT = {
    name: 'vasya',
    age: 21,
    skills: ['html', 'js'],
    info():void{
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}`);
            }
        }
    }
}

function clone(obj:any):any {
    if (obj) {
        let functions:any[] = [];
        for (const funName in obj) {
            if (typeof obj[funName] === 'function') {
                let funClone:any = obj[funName].bind({});
                functions.push({funClone, funName});
            }
        }
        let cloneObj:any = JSON.parse(JSON.stringify(obj));
        for (const fun of functions) {
            cloneObj[fun.funName]=fun.funClone;
        }
        return cloneObj
    }
}

let clon:any = clone(user);
clon.info();


//Task 2
console.log('');
console.log('Task 2');
type coursesT = {
  id?: number;
  title: string;
  monthDuration: number;
}
let coursesAndDurationArray2:coursesT[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let mapID:coursesT[] = coursesAndDurationArray2.map((value:coursesT, index:number):coursesT => ({id: index + 1,...value}));
console.log(mapID);
