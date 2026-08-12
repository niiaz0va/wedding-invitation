// Укажите дату вашей свадьбы в формате "Месяц День, Год Часы:Минуты:Секунды"
// Например: "September 12, 2026 16:00:00"
const weddingDate = new Date("September 12, 2026 16:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    // Если дата свадьбы уже прошла
    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "<h3>Этот счастливый день настал!</h3>";
        clearInterval(timerInterval);
        return;
    }

    // Расчет времени для дней, часов, минут и секунд
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Выводим результат в HTML-элементы с добавлением нолей перед однозначными числами
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
}

// Запускаем функцию каждую секунду
const timerInterval = setInterval(updateCountdown, 1000);

// Первичный вызов, чтобы таймер не моргал при загрузке страницы
updateCountdown();
