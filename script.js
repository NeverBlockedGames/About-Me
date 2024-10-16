window.addEventListener('DOMContentLoaded', () => {
    // Show main content after intro animation
    setTimeout(() => {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 5000); // 3s delay + 2s fade out
});
