// Функція для малювання зірочок
function drawPattern() {
    let output = '';
    // Зростаюча частина
    for (let i = 1; i <= 5; i++) {
        output += '*'.repeat(i * 2 - 1) + '\n'; // Виводимо зірочки
    }
    // Спадна частина
    for (let i = 5; i >= 1; i--) {
        output += '*'.repeat(i * 2 - 1) + '\n'; // Виводимо зірочки
    }
    // Виводимо результат в HTML
    document.getElementById('patternOutput').innerText = output;
}

// Функція для таймера
function timer() {
    let startTime = new Date(); // Зберігаємо початковий час
    let currentTime;
    let elapsedTime = 0; // Час, що минув

    // Використовуємо цикл while для перевірки часу
    while (elapsedTime < 10000) { // 10 секунд = 10000 мс
        currentTime = new Date(); // Оновлюємо поточний час
        elapsedTime = currentTime - startTime; // Обчислюємо, скільки часу пройшло
    }

    // Виводимо результат в HTML
    document.getElementById('timerOutput').innerText = "Таймер завершено!";
}

// Додаємо обробники подій до кнопок
document.getElementById('drawPatternButton').addEventListener('click', drawPattern);
document.getElementById('timerButton').addEventListener('click', timer);