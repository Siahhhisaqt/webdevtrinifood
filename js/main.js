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

// Recipe Data and Modal Logic
const recipes = {
    doubles: {
        title: "Doubles",
        image: "./img/doubles.jpg",
        ingredients: [
            "2 cups flour",
            "1 tsp turmeric",
            "1 tsp cumin",
            "1 tsp yeast",
            "2 cups chickpeas (channa), soaked overnight",
            "1 tbsp curry powder",
            "Salt and pepper to taste",
            "Oil for frying"
        ],
        instructions: [
            "To make the bara (dough), mix flour, turmeric, cumin, yeast, and water to form a soft dough. Let it rest for an hour.",
            "Boil the soaked chickpeas until tender.",
            "In a pot, sauté garlic, onion, and curry powder. Add the boiled chickpeas and some water. Simmer until the sauce thickens.",
            "Shape the dough into small circles and fry in hot oil until puffy and golden.",
            "Serve the curried channa on top of two baras with cucumber chutney and hot sauce."
        ]
    },
    roti: {
        title: "Dhalpuri Roti",
        image: "./img/roti.jpg",
        ingredients: [
            "4 cups all-purpose flour",
            "1 cup yellow split peas, boiled and ground",
            "3 cloves garlic, minced",
            "1 tbsp ground cumin (geera)",
            "1 tbsp baking powder",
            "Water for kneading",
            "Oil for brushing"
        ],
        instructions: [
            "Season the ground split peas with garlic, cumin, salt, and pepper.",
            "Knead the flour with baking powder and water to form a smooth dough. Let it rest.",
            "Divide the dough into balls. Flatten each ball, place a spoonful of the split pea filling in the center, and seal it.",
            "Roll out the filled dough balls into thin circles.",
            "Cook on a hot tawa (griddle), brushing with oil on both sides until golden brown spots appear."
        ]
    },
    pelau: {
        title: "Chicken Pelau",
        image: "./img/pelau.jpg",
        ingredients: [
            "2 lbs chicken pieces, seasoned",
            "2 cups rice, washed",
            "1 cup pigeon peas (fresh or canned)",
            "1 cup coconut milk",
            "2 tbsp brown sugar",
            "1 onion, chopped",
            "2 carrots, chopped",
            "Fresh herbs (thyme, parsley)"
        ],
        instructions: [
            "Heat oil in a heavy pot. Add brown sugar and wait until it bubbles and turns dark brown (caramelization).",
            "Add the seasoned chicken and stir to coat with the burnt sugar. Cook for 10 minutes.",
            "Add the rice and pigeon peas. Stir well.",
            "Pour in the coconut milk and enough water to cover the ingredients. Add vegetables and herbs.",
            "Cover and simmer on low heat until the rice is cooked and liquid is absorbed (about 25-30 minutes)."
        ]
    },
    callaloo: {
        title: "Callaloo",
        image: "./img/callaloo.jpg",
        ingredients: [
            "1 bundle dasheen bush (taro leaves), chopped",
            "1 cup ochroes (okra), sliced",
            "1 cup coconut milk",
            "1/2 cup pumpkin, chopped",
            "1 onion, chopped",
            "3 cloves garlic",
            "1 crab (optional, for flavor)",
            "Hot pepper to taste"
        ],
        instructions: [
            "In a large pot, combine dasheen bush, ochroes, pumpkin, onion, garlic, crab, and coconut milk.",
            "Add a little water if needed. Bring to a boil, then reduce heat and simmer for 30-40 minutes until everything is soft.",
            "Remove the crab and hot pepper.",
            "Use a swizzle stick or immersion blender to whisk the mixture into a smooth, thick consistency.",
            "Season with salt and pepper. Return the crab to the pot before serving."
        ]
    },
    curry_chicken: {
        title: "Curry Chicken",
        image: "./img/curry_chicken.jpg",
        ingredients: [
            "2 lbs chicken, cut into pieces",
            "4 tbsp curry powder",
            "1 onion, chopped",
            "4 cloves garlic, minced",
            "1 tbsp ginger, grated",
            "2 potatoes, peeled and cubed",
            "Fresh cilantro (culantro/bandaniya)"
        ],
        instructions: [
            "Season the chicken with salt, pepper, green seasoning, and half the curry powder. Marinate for at least 30 minutes.",
            "Mix the remaining curry powder with a little water to make a paste.",
            "Heat oil in a pot. Sauté onion, garlic, and ginger. Add the curry paste and cook for 2 minutes.",
            "Add the marinated chicken and stir to coat. Cook for 10 minutes to sear.",
            "Add potatoes and enough water to cover the chicken. Simmer until chicken is tender and sauce thickens.",
            "Garnish with fresh cilantro."
        ]
    }
};

// Recipe Modal Logic
const recipeModal = document.getElementById('recipe-modal');
const closeModalBtn = document.getElementById('close-modal');
const viewRecipeBtns = document.querySelectorAll('.view-recipe-btn');

const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalIngredients = document.getElementById('modal-ingredients');
const modalInstructions = document.getElementById('modal-instructions');

if (recipeModal && viewRecipeBtns) {
    viewRecipeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const recipeId = btn.getAttribute('data-recipe-id');
            const recipe = recipes[recipeId];

            if (recipe) {
                modalTitle.textContent = recipe.title;
                modalImage.src = recipe.image;

                // Populate Ingredients
                modalIngredients.innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');

                // Populate Instructions
                modalInstructions.innerHTML = recipe.instructions.map(inst => `<li>${inst}</li>`).join('');

                recipeModal.classList.remove('hidden');
            }
        });
    });

    closeModalBtn.addEventListener('click', () => {
        recipeModal.classList.add('hidden');
    });

    // Close on click outside
    recipeModal.addEventListener('click', (e) => {
        if (e.target === recipeModal) {
            recipeModal.classList.add('hidden');
        }
    });
}
