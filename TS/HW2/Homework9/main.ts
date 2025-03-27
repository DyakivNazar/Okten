//Task 1
let creatDiv:HTMLDivElement  = document.createElement('div')
creatDiv.classList.add('wrap', 'collapse', 'alpha', 'beta')
creatDiv.innerHTML = `hello okten`
document.body.appendChild(creatDiv)
let cloneDiv = creatDiv.cloneNode(true)
document.body.appendChild(cloneDiv)


//Task 2
let arr3:string[] = ['Main', 'Products', 'About us', 'Contacts']

let allArrayUl:Element = document.getElementsByClassName('arr')[0]

for (const string of arr3) {
    let li:HTMLLIElement = document.createElement('li')
    li.innerText = string
    allArrayUl.appendChild(li)
}


//Task 3
interface Icours {
  title: string;
  monthDuration: number;
}
let coursesAndDurationArray3:Icours[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const coursesElement of coursesAndDurationArray3) {
    let courseDiv:HTMLDivElement = document.createElement('div')
    let  p:HTMLParagraphElement = document.createElement('p')
    p.innerHTML = `Course name: ${coursesElement.title}. Duration in months: ${coursesElement.monthDuration}`
    courseDiv.appendChild(p)
    document.body.appendChild(courseDiv)
}


//Task 4
for (const coursesElement of coursesAndDurationArray3) {
    let courseDiv:HTMLDivElement = document.createElement('div')
    courseDiv.classList.add('item')

    let h1:HTMLHeadingElement = document.createElement('h1')
    h1.classList.add('heading')
    h1.innerText = coursesElement.title

    let  p:HTMLParagraphElement = document.createElement('p')
    p.classList.add('description')
    p.innerHTML = `${coursesElement.monthDuration}`

    courseDiv.append(h1, p)
    document.body.appendChild(courseDiv)
}
