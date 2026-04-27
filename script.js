/**
 * Wait for the page to load, then run the render function.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Locate the container in the HTML
    const blogContainer = document.getElementById('blog-container');

    // Generate the HTML for each post
    const renderPosts = () => {
        // Map over the blogPosts array from data.js
        const htmlContent = blogPosts.map(post => `
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
        `).join(''); // Convert the array into one long string

        // Inject the content into the page
        blogContainer.innerHTML = htmlContent;
    };

    // Run the function
    renderPosts();
});
