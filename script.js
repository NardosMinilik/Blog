/**
 * MAIN SCRIPT
 * This function loops through the data object and generates HTML cards.
 */
document.addEventListener('DOMContentLoaded', () => {
    const blogContainer = document.getElementById('blog-container');

    // Loop through the data from data.js
    const renderPosts = () => {
        blogContainer.innerHTML = blogPosts.map(post => `
            <article class="blog-post">
                <h2>${post.title}</h2>
                <div class="post-meta">
                    <span>📅 ${post.date}</span>
                    <span>✍️ ${post.author}</span>
                    <span>🏷️ ${post.category}</span>
                </div>
                <div class="post-content">
                    <p>${post.content}</p>
                </div>
                <a href="#" class="read-more">Read More</a>
            </article>
        `).join('');
    };

    renderPosts();
});
