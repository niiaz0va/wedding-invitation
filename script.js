const weddingDate = new Date("September 9, 2026 17:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "<h3>Үйлөнүү той башталды! Сүйүүңүздөр түбөлүктүү болсун!</h3>";
        clearInterval(timerInterval);
        return;
    }
// Функция управления музыкой
function toggleMusic() {
    const music = document.getElementById("bg-music");
    const btn = document.getElementById("music-btn");
    
    if (music.paused) {
        music.play().catch(error => console.log("Музыка заблокирована браузером:", error));
        btn.innerText = "⏸️ Пауза";
        btn.classList.add("playing");
    } else {
        music.pause();
        btn.innerText = "🎵 Музыка";
        btn.classList.remove("playing");
    }
}


    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();
