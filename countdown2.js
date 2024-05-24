function countdown() {
    const countdownElement = document.getElementById("countdown2");
    const offerEndDate = new Date("2024-06-11 10:00:00");

    function updateCountdown() {
        const now = new Date();
        const timeRemaining = offerEndDate - now;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days}д ${hours}ч ${minutes}м ${seconds}с`;

        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "Офертата е изтекла";
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
}

document.addEventListener("DOMContentLoaded", countdown);