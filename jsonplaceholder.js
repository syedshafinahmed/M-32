// const result =
//     console.log(result);

const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1') // promises response
        .then(response => response.json()) // promises json data
        .then(json => console.log(json));
}

const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
        .then(res => res.json())
        .then(json => {
            displayPost(json);
            console.log(json);
        });
};

const displayPost = (posts) =>{
    // console.log(posts);
    posts.forEach(post => {
        console.log(post);
    })
};