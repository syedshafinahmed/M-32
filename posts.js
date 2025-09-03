const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            displayPost(json);
        });
};

const displayPost = (posts) => {
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = "";
    // for (let i = 0; i < posts.length; i++) {
    //     console.log(posts[i]);
    // }
    // for(let post of posts){
    //     console.log(post);
    // }
    posts.forEach((post) =>{
        // console.log(post.title);
        // const li = document.createElement("li");
        // li.innerText = post.title;
        // postContainer.appendChild(li);
        const postCard = document.createElement("div");
        postCard.innerHTML = `
        <div class="post-card">
            <h1>${post.title}</h1>
            <p>${post.body}</p>
        </div>`;
        postContainer.append(postCard);
    })
}


loadPost();