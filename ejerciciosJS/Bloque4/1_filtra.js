// filtrar y transformas posts

async function getUppercaseTitlesByUser(userId = 1) { 
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    const filtrar= posts.filter(p=> p.userId=== userId);
    const mayus= filtrar.map(p=> p.title.toUpperCase());
    return mayus;
}



