const hamburger = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');

// Akcja na kliknięcie hamburgera
hamburger.addEventListener('click', () => {
    nav.classList.toggle('header__nav--active'); // Przełączanie klasy aktywnej
});