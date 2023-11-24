document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const rightArrow = document.querySelector('.right-arrow');
    const leftArrow = document.querySelector('.left-arrow');
    const images = [
        '/img/casco1.jpg',
        '/img/casco2.jpg',
        '/img/casco3.jpg',
        '/img/casco4.jpg'
    ];
    let currentIndex = 0;

    function showImage(index) {
        carousel.querySelector('img').src = images[index];
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    showImage(currentIndex);

    rightArrow.addEventListener('click', nextImage);
    leftArrow.addEventListener('click', prevImage);
});