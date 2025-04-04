interface IcoursesArray {
    title: string;
    monthDuration: number;
    hourDuration: number;
    modules: string[];
}

let coursesArray2:IcoursesArray[] = [
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


for (const coursesArrayKey of coursesArray2) {
    let divwrap:HTMLDivElement = document.createElement('div');
    divwrap.className = 'wrapper';

    let title:HTMLHeadingElement = document.createElement('h3');
    title.innerHTML = coursesArrayKey.title;

    let monthDuration:HTMLSpanElement = document.createElement('span');
    monthDuration.className = 'monthDuration';
    monthDuration.innerHTML = `${coursesArrayKey.monthDuration}`;

    let hourDuration:HTMLSpanElement = document.createElement('span');
    hourDuration.innerHTML = `${coursesArrayKey.hourDuration}`;

    let ul:HTMLUListElement = document.createElement('ul');
    for (const coursesArrayModulsElement of  coursesArrayKey.modules) {
        let li:HTMLLIElement = document.createElement('li');
        li.innerHTML = coursesArrayModulsElement;
        ul.appendChild(li);
    }

    divwrap.append(title, monthDuration, hourDuration, ul);
    document.body.appendChild(divwrap);


}



let boxes:NodeListOf<Element> = document.querySelectorAll('.box')
let maxHeight:number = 0;

boxes.forEach((box:Element):void => {
    const element = box as HTMLElement;
    if (element.offsetHeight > maxHeight) {
        maxHeight = element.offsetHeight;
    }
});

boxes.forEach((box:Element):void => {
    const element = box as HTMLElement;
    element.style.height = maxHeight + 'px';
})

