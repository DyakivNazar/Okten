async function users() {

    let users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());

    let wrapp_users = document.getElementById('wrapp_users');

    for (let user of users) {

        let div_user = document.createElement('div');
        div_user.className = 'div_user';

        for (const userKey in user) {
            let p = document.createElement('p');
            if (userKey === 'id' || userKey === 'name') {
                p.innerHTML = `${userKey}: ${user[userKey]}`;
                div_user.appendChild(p);
            }
        }

        let a = document.createElement('a');
        a.textContent = `Детальна інфорація про користувача`;
        a.onclick = (e) => {
            let sessionsList = JSON.parse(localStorage.getItem('UserID')) || [];
            sessionsList.push(user.id);
            localStorage.setItem('UserID', JSON.stringify(sessionsList));
        }
        a.href = 'user_details.html';

        div_user.appendChild(a);

        wrapp_users.appendChild(div_user);
    }
}

users();