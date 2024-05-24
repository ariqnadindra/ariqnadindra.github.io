document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/blogs')
        .then(response => response.json())
        .then(data => {
            const blogList = document.getElementById('blog-list');
            data.forEach(blog => {
                const blogPost = document.createElement('div');
                blogPost.className = 'blog-post';
                blogPost.innerHTML = `
                    <h2>${blog.title}</h2>
                    <p>${blog.excerpt}</p>
                    <a href="${blog.url}">Read more</a>
                `;
                blogList.appendChild(blogPost);
            });
        });
});
