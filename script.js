document.addEventListener('DOMContentLoaded', () => {


    // --- Countdown Logic ---
    // Set launch date to December 15, 2025
    const launchDate = new Date('2025-12-15T00:00:00');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = launchDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(interval);
            document.querySelector('.countdown-container').innerHTML = "<h2>We have launched!</h2>";
        }
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    // --- Form Handling ---
    const form = document.getElementById('newsletterForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const button = form.querySelector('button');
        const originalText = button.innerHTML;
        
        button.innerHTML = 'Subscribed!';
        button.style.backgroundColor = '#ffffff';
        button.style.color = '#000000';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.backgroundColor = '';
            button.style.color = '';
            form.reset();
        }, 3000);
    });
});
