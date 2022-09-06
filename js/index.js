// javascript for index.html
const container = document.querySelector(".blogs")

const renderPosts = async () => {
    let url =  'http://localhost:3000/posts'

    const res = await fetch(url)
    const posts = await res.json()

    let template = '';
    posts.forEach(post => {
        template += `
            <div class="post">
                <h2>${post.title}</h2>
                <p><small>${post.likes} likes</small></p>
                <p>${post.body.slice(0, 100)}</p>
                <a href="/details.html?id=${post.id}">Read more...</a>
            </div>
        `
        // inject the template

        container.innerHTML = template;
    })
    
}


window.addEventListener('DOMContentLoaded', () => renderPosts());