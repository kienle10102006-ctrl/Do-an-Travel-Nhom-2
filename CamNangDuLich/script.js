document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.banner-track');
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');
    const dots = document.querySelectorAll('.dot');
    
    // Check if elements exist
    if (!track || !prevBtn || !nextBtn || dots.length === 0) return;

    let currentIndex = 0;
    const items = document.querySelectorAll('.banner-item');
    const totalItems = items.length;

    function updateBanner() {
        // Move track
        const translateX = -(currentIndex * 100);
        track.style.transform = `translateX(${translateX}%)`;
        track.style.transition = 'transform 0.5s ease-in-out';

        // Update dots
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Next button click
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateBanner();
    });

    // Prev button click
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateBanner();
    });

    // Dot click
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateBanner();
        });
    });

    // Auto slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateBanner();
    }, 5000);