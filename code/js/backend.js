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

document.addEventListener('DOMContentLoaded', () => {
    const showMoreButtons = document.querySelectorAll('.show-more');

    showMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.previousElementSibling;
            const hiddenCards = section.querySelectorAll('.card-hidden');

            hiddenCards.forEach(card => {
                card.style.display = 'contents';
            });

            button.style.display = 'none';
        });
    });
});