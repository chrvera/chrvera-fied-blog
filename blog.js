document.addEventListener("DOMContentLoaded", function() {
    const modeToggle = document.getElementById('modeToggle');
    const backButton = document.getElementById('backButton');
    
    let isDarkMode = false;

    function renderPosts() {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        const boxes = document.querySelectorAll('.box');

        // Clear previous content in boxes
        boxes.forEach(box => {
            box.innerHTML = '';
        });

        // Loop through posts and assign each post to a box
        posts.forEach((post, index) => {
            if (index < boxes.length) {
                boxes[index].innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                    <p><strong>Author:</strong> ${post.username}</p>
                `;
            }
        });
    }

    modeToggle.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode', isDarkMode);
    });

    backButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    renderPosts();
});