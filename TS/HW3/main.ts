async function foobar<SomeType>(url:URL) {

    let users: SomeType[] = await fetch(url)
        .then(value => value.json())  as SomeType[];

    let wrapp_users = document.getElementById('wrapp_users')!;

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
            let sessionsList = JSON.parse(localStorage.getItem('UserID')!) || [];
            sessionsList.push((user as { id: number }).id);
            localStorage.setItem('UserID', JSON.stringify(sessionsList));
        }
        a.href = 'user_details.html';

        div_user.appendChild(a);

        wrapp_users.appendChild(div_user);
    }
}

interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: number
    geo: {
        lat: number;
        lng: number;
    }
}

interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: number;
    website: number;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

let url = new URL('https://jsonplaceholder.typicode.com/users')
foobar<IUser>(url);

