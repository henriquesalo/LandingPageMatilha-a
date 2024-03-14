document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carousel');
    const images = carousel.querySelectorAll('.image');
    const prevBtn = carousel.querySelector('.control.prev');
    const nextBtn = carousel.querySelector('.control.next');
    let currentIndex = 0;

    function showImages(startIndex) {
        for (let i = 0; i < images.length; i++) {
            const image = images[i];
            if (i >= startIndex && i < startIndex + 4) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        }
    }

    function nextImages() {
        if (currentIndex + 4 < images.length) {
            currentIndex += 4;
            showImages(currentIndex);
        }
    }

    function prevImages() {
        if (currentIndex >= 4) {
            currentIndex -= 4;
            showImages(currentIndex);
        }
    }

    prevBtn.addEventListener('click', prevImages);
    nextBtn.addEventListener('click', nextImages);

    showImages(currentIndex);
});