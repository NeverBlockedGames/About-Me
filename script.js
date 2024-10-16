window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
    }, 3000); // Matches the duration of the intro animation
});
