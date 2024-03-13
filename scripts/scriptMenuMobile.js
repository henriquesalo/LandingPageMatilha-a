document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const closeButton = document.querySelector('.close-button');

    menuToggle.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
        closeButton.classList.toggle('active');
    });

    closeButton.addEventListener('click', function() {
        navbarCollapse.classList.remove('show');
        closeButton.classList.remove('active');
    });
});
