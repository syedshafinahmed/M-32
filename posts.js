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

    // for (let i = 0; i < posts.length; i++) {
    //     console.log(posts[i]);
    // }
    // for(let post of posts){
    //     console.log(post);
    // }
    posts.forEach((post) =>{
        // console.log(post.title);
        const li = document.createElement("li");
        li.innerText = post.title;
        postContainer.appendChild(li);
    })
}