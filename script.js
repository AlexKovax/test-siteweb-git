// Simple countdown timer
function updateCountdown() {
    const now = new Date().getTime();
    const deadline = now + (2 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000) + (32 * 60 * 1000);
    const timeLeft = deadline - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('countdown').innerHTML = `${days}J ${hours}H ${minutes}M`;
}

updateCountdown();
setInterval(updateCountdown, 60000);

// Add click tracking for buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        console.log('CTA clicked:', button.textContent.trim());
    });
});
