const carousel = document.querySelector('.carousel-direction');
    const images = carousel.querySelector('.images');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    let currentIndex = 0;
    const slideWidth = 100; // Width of each slide (90px + 10px margin)

    function goToSlide(index) {
        if (index < 0 || index >= images.children.length) return;
        currentIndex = index;
        const offset = -slideWidth * currentIndex;
        images.style.transform = `translateX(${offset}px)`;
    }

    prevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });