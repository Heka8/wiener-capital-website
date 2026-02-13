// Navbar scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Cookie Consent Banner
(function () {
    const banner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('cookieAccept');
    const rejectBtn = document.getElementById('cookieReject');

    if (!banner || !acceptBtn || !rejectBtn) return;

    if (!localStorage.getItem('cookieConsent')) {
        banner.classList.add('visible');
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        banner.classList.remove('visible');
    });

    rejectBtn.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'rejected');
        banner.classList.remove('visible');
    });
})();
