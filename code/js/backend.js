console.log('Hello from backend.js');
console.log(':3');

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('yippy-toggle');
    toggleButton.addEventListener('click', () => {
        playSound('assets/sounds/assets/sounds/MF - (3).wav');
    
    });
});