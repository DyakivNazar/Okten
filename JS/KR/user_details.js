async function user_info_details(userId) {

    let users = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(value => value.json());

    let div_user = document.getElementById('wrapp_user');

    for (let [keyuser, user] of Object.entries(users)) {

        let p = document.createElement('p');
        if (typeof user === 'object') {
            let div_obj = document.createElement('div');
            let title = document.createElement('p');
            title.innerHTML = `${keyuser}:`;

            let ul = document.createElement('ul');
            let obj = user;

            for (const [key, value] of Object.entries(obj)) {
                let li_obj = document.createElement('li');

                if (typeof value === 'object') {

                    let titleUl = document.createElement('ul');
                    titleUl.innerHTML = `${key}:`;

                    for (const [keyV, valueV] of Object.entries(value)) {
                        let li_obj_v = document.createElement('li');
                        li_obj_v.innerHTML = `${keyV}: ${valueV}`;
                        titleUl.appendChild(li_obj_v);
                        li_obj.appendChild(titleUl);

                    }
                } else {
                    li_obj.innerHTML = `${key}: ${value}`;
                }
                ul.append(li_obj);
            }

            div_obj.append(title, ul);
            div_user.appendChild(div_obj);
        } else {

            p.innerHTML = `${keyuser}: ${user}`;
            div_user.appendChild(p);
        }
    }
}

async function user_post_details(userId) {
    let posts = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(value => value.json());

    let wrapp_posts = document.getElementById('wrapp_posts');
    for (let post of posts) {
        let div_post = document.createElement('div');
        div_post.className = 'div_post';

        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        h2.innerHTML = post.title;
        p.innerHTML = post.body;
        div_post.append(h2);

        let a = document.createElement('a');
        a.textContent = `Детальна інфорація про пост`;
        a.onclick = (e) => {
            let sessionsList = JSON.parse(localStorage.getItem('postId')) || [];
            sessionsList.push(post.id);
            localStorage.setItem('postId', JSON.stringify(sessionsList));
        }
        a.href = 'post_details.html';

        div_post.append(a);

        wrapp_posts.appendChild(div_post);
    }
}


let dateJSON = localStorage.getItem('UserID');
let users = JSON.parse(dateJSON);

user_info_details(users[users.length - 1]);

let post_user = document.getElementById('post_user');

post_user.onclick = () => {
    user_post_details(users[users.length - 1])
    post_user.remove();
}