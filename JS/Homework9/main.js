//Task 1
let creatDiv = document.createElement('div')
creatDiv.classList.add('wrap', 'collapse', 'alpha', 'beta')
creatDiv.innerHTML = `hello okten`
document.body.appendChild(creatDiv)
let cloneDiv = creatDiv.cloneNode(true)
document.body.appendChild(cloneDiv)


//Task 2
let arr = ['Main', 'Products', 'About us', 'Contacts']

let allArrayUl = document.getElementsByClassName('arr')[0]

for (const string of arr) {
    let li = document.createElement('li')
    li.innerText = string
    allArrayUl.appendChild(li)
}


//Task 3
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const coursesElement of coursesAndDurationArray) {
    let courseDiv = document.createElement('div')
    let  p = document.createElement('p')
    p.innerHTML = `Course name: ${coursesElement.title}. Duration in months: ${coursesElement.monthDuration}`
    courseDiv.appendChild(p)
    document.body.appendChild(courseDiv)
}


//Task 4
for (const coursesElement of coursesAndDurationArray) {
    let courseDiv = document.createElement('div')
    courseDiv.classList.add('item')

    let h1 = document.createElement('h1')
    h1.classList.add('heading')
    h1.innerText = coursesElement.title

    let  p = document.createElement('p')
    p.classList.add('description')
    p.innerHTML = coursesElement.monthDuration

    courseDiv.append(h1, p)
    document.body.appendChild(courseDiv)
}
