const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const layers = document.querySelectorAll('.layer');
const navLinks = document.querySelectorAll('.nav-menu a');

// Toggle hamburger menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Navigasi antar layer
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetLayer = link.getAttribute('data-layer');

        layers.forEach(layer => {
            layer.classList.remove('active');
        });

        document.getElementById(targetLayer).classList.add('active');
        navMenu.classList.remove('active'); // Tutup hamburger menu
    });
});