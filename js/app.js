// DOM elements
const recipeGrid = document.getElementById('recipe-grid');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const noResults = document.getElementById('no-results');
const recipeModal = document.getElementById('recipe-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalCloseBtn2 = document.getElementById('modal-close-btn-2');
const submissionForm = document.getElementById('submission-form');
const successMessage = document.getElementById('success-message');

// Initialize the application
function init() {
    renderRecipes(recipes);
    setupEventListeners();
}

// Render recipe cards
function renderRecipes(recipesToRender) {
    recipeGrid.innerHTML = '';

    if (recipesToRender.length === 0) {
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');

    recipesToRender.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.name}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta">
                    <div class="recipe-meta-item">
                        <svg class="recipe-meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>${recipe.prepTime}</span>
                    </div>
                    <div class="recipe-meta-item">
                        <svg class="recipe-meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        <span>${recipe.servings} servings</span>
                    </div>
                </div>
                ${recipe.region ? `<div><span class="recipe-region">${recipe.region}</span></div>` : ''}
                <button class="recipe-btn" data-id="${recipe.id}">View Recipe</button>
            </div>
        `;
        recipeGrid.appendChild(recipeCard);
    });

    // Add event listeners to recipe buttons
    document.querySelectorAll('.recipe-btn').forEach(button => {
        button.addEventListener('click', function () {
            const recipeId = parseInt(this.getAttribute('data-id'));
            const recipe = recipes.find(r => r.id === recipeId);
            if (recipe) {
                showRecipeDetail(recipe);
            }
        });
    });
}

// Show recipe detail modal
function showRecipeDetail(recipe) {
    // Set modal content
    document.getElementById('modal-image').src = recipe.image;
    document.getElementById('modal-image').alt = recipe.name;
    document.getElementById('modal-title').textContent = recipe.name;
    document.getElementById('modal-description').textContent = recipe.description;
    document.getElementById('modal-prep-time').textContent = recipe.prepTime;
    document.getElementById('modal-servings').textContent = `${recipe.servings} servings`;

    // Handle region display
    const regionContainer = document.getElementById('modal-region-container');
    const mapContainer = document.getElementById('modal-map-container');
    if (recipe.region) {
        document.getElementById('modal-region').textContent = recipe.region;
        regionContainer.classList.remove('hidden');
        mapContainer.classList.remove('hidden');
        initMap(recipe.region);
    } else {
        regionContainer.classList.add('hidden');
        mapContainer.classList.add('hidden');
    }

    // Set ingredients
    const ingredientsList = document.getElementById('modal-ingredients');
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.className = 'ingredient-item';
        li.innerHTML = `
            <span class="ingredient-bullet"></span>
            <span>${ingredient}</span>
        `;
        ingredientsList.appendChild(li);
    });

    // Set instructions
    const instructionsList = document.getElementById('modal-instructions');
    instructionsList.innerHTML = '';
    recipe.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.className = 'instruction-item';
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });

    // Show modal and disable body scroll
    recipeModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close recipe detail modal
function closeRecipeModal() {
    recipeModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Filter recipes by ingredient
function filterRecipes(searchTerm) {
    if (searchTerm === '') {
        renderRecipes(recipes);
        return;
    }

    const filtered = recipes.filter(recipe =>
        recipe.ingredients.some(ingredient =>
            ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    renderRecipes(filtered);
}

// Setup event listeners
function setupEventListeners() {
    // Search form submission
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        filterRecipes(searchInput.value);
    });

    // Modal close buttons
    modalCloseBtn.addEventListener('click', closeRecipeModal);
    modalCloseBtn2.addEventListener('click', closeRecipeModal);

    // Close modal when clicking outside
    recipeModal.addEventListener('click', function (e) {
        if (e.target === recipeModal) {
            closeRecipeModal();
        }
    });

    // Recipe submission form
    submissionForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // In a real app, this would send data to a backend
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            recipeName: document.getElementById('recipe-name').value,
            region: document.getElementById('region').value,
            ingredients: document.getElementById('ingredients').value,
            instructions: document.getElementById('instructions').value
        };

        console.log('Form submitted:', formData);

        // Show success message
        successMessage.classList.remove('hidden');

        // Reset form
        submissionForm.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);
    });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);