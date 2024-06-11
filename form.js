document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('blogForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const title = document.getElementById('title').value.trim();
        const content = document.getElementById('content').value.trim();

        if (!username || !title || !content) {
            message.textContent = 'Please complete the form.';
            return;
        }

        const post = {
            username,
            title,
            content
        };

        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));

        window.location.href = './blog.html';
    });
});