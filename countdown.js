document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.getElementById("countdown");
    const offerEndDate = new Date();
    offerEndDate.setDate(offerEndDate.getDate() + 10);

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
});