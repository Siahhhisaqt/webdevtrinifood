// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
        mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    });
}

// Gallery Lightbox
function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const imgSrc = element.querySelector('img').src;

    if (lightbox && lightboxImg) {
        lightboxImg.src = imgSrc;
        lightbox.classList.remove('hidden');
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.add('hidden');
    }
}

// Close lightbox when clicking outside image
const lightbox = document.getElementById('lightbox');
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Contact Form Validation
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Name Validation
        const name = document.getElementById('name');
        const nameError = document.getElementById('name-error');
        if (name.value.trim() === '') {
            nameError.classList.remove('hidden');
            isValid = false;
        } else {
            nameError.classList.add('hidden');
        }

        // Email Validation
        const email = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            emailError.classList.remove('hidden');
            isValid = false;
        } else {
            emailError.classList.add('hidden');
        }

        // Phone Validation
        const phone = document.getElementById('phone');
        const phoneError = document.getElementById('phone-error');
        // Simple phone regex (allows digits, spaces, dashes, parentheses)
        const phoneRegex = /^[\d\s\-\(\)]{7,}$/;
        if (!phoneRegex.test(phone.value.trim())) {
            phoneError.classList.remove('hidden');
            isValid = false;
        } else {
            phoneError.classList.add('hidden');
        }

        // Address Validation
        const address = document.getElementById('address');
        const addressError = document.getElementById('address-error');
        if (address.value.trim() === '') {
            addressError.classList.remove('hidden');
            isValid = false;
        } else {
            addressError.classList.add('hidden');
        }

        // Message Validation
        const message = document.getElementById('message');
        const messageError = document.getElementById('message-error');
        if (message.value.trim() === '') {
            messageError.classList.remove('hidden');
            isValid = false;
        } else {
            messageError.classList.add('hidden');
        }

        if (isValid) {
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        }
    });
}
