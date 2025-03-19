async function post_details(postId) {
    let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json());

    let comments = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json());

    let filteredPostsPromise = Promise.all([posts, comments]).then(result  => {
        let [posts, comments] = result;
        for (const post of posts) {
            post.comments = [];
            for (const comment of comments) {
                if (post.id === comment.postId) {
                    post.comments.push(comment);
                }
            }

        }
        return posts.filter(post => post.id === postId);
    });


    filteredPostsPromise.then(filteredPosts => {

        let wrapp_post = document.getElementById('wrapp_post');
        let wrapp_comments = document.getElementById('wrapp_comments');

        for (const post of filteredPosts) {
            for (const postKey in post) {
                if (Array.isArray(post[postKey])) {

                    let arr_comments = post[postKey];
                    for (const comment of arr_comments) {

                        let div_comment = document.createElement('div');
                        div_comment.classList.add('div_comment');

                        let h3 = document.createElement('h3');
                        let h4 = document.createElement('h4');
                        let p = document.createElement('p');
                        h3.innerHTML = `email: ${comment.email}`;
                        h4.innerHTML = comment.name;
                        p.innerHTML = comment.body;

                        div_comment.append(h3, h4, p);

                        // for (const commentKey in comment) {
                        //     let p = document.createElement('p');
                        //     if (commentKey !== 'postId' && commentKey !== 'id') {
                        //         p.innerHTML = `${commentKey}: ${comment[commentKey]}`;
                        //         div_comment.appendChild(p)
                        //     }
                        // }
                        wrapp_comments.appendChild(div_comment);
                    }
                }
                else{
                    let p = document.createElement('p');
                    p.innerHTML = `${postKey}: ${post[postKey]}`;

                    wrapp_post.appendChild(p);
                }
            }
        }
    });

}

let dateJSON = localStorage.getItem('postId');
let posts = JSON.parse(dateJSON);

post_details(posts[posts.length - 1]);
