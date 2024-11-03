
const donateButton = document.querySelector('.donate-btn');

// Додаємо обробник події click
donateButton.addEventListener('click', () => {
    alert('Дякуємо за ваш донат! Ми цінуємо вашу підтримку.');
    // Можна додати додаткові дії, наприклад, змінити стиль кнопки
    donateButton.style.backgroundColor = '#d0b10a';
    donateButton.style.color = '#fff';
});