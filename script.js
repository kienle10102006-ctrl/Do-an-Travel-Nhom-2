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

    /* ================= PROMO CAROUSEL LOGIC ================= */
    const promoSections = document.querySelectorAll('.promo-section');

    promoSections.forEach(section => {
        const list = section.querySelector('.promo-list');
        const cards = section.querySelectorAll('.promo-card');
        const prevBtn = section.querySelector('.promo-btn.prev');
        const nextBtn = section.querySelector('.promo-btn.next');

        if (!list || cards.length === 0) return;

        // Hide buttons if items <= 2
        if (cards.length <= 2) {
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            return; // No need for sliding logic
        }

        let currentPromoIndex = 0;
        const visibleItems = 2; 
        const totalPromoItems = cards.length;

        function updatePromoCarousel() {
            // Slide by (50% + 10px) per item since gap is 20px and 2 items visible
            list.style.transform = `translateX(calc(-${currentPromoIndex} * (50% + 10px)))`;
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                // If at end (showing last 2 items), loop back to start
                if (currentPromoIndex < totalPromoItems - visibleItems) {
                    currentPromoIndex++;
                } else {
                    currentPromoIndex = 0;
                }
                updatePromoCarousel();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentPromoIndex > 0) {
                    currentPromoIndex--;
                } else {
                    currentPromoIndex = totalPromoItems - visibleItems;
                }
                updatePromoCarousel();
            });
        }
    });

    /* ================= PROMO TABS LOGIC ================= */
    const promoTabs = document.querySelectorAll(".promo-tab");
    // const promoSections ... already defined

    promoTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            promoTabs.forEach(t => t.classList.remove("active"));
            promoSections.forEach(s => s.classList.remove("active"));

            tab.classList.add("active");
            document.getElementById(tab.dataset.target).classList.add("active");
        });
    });
});
