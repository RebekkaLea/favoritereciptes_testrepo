const recipes = [
    {
        name: "Chocolate Cake",
        type: "cake",
        ingredients: ["chocolate", "flour", "sugar", "eggs"],
        description: "Rich and moist chocolate cake.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "Classic Apple Pie",
        type: "pie",
        ingredients: ["apple", "flour", "butter", "sugar"],
        description: "Traditional apple pie with a flaky crust.",
        image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "Chocolate Chip Cookies",
        type: "cookie",
        ingredients: ["chocolate", "flour", "sugar", "butter"],
        description: "Crispy on the outside, chewy on the inside.",
        image: "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "Vanilla Ice Cream",
        type: "icecream",
        ingredients: ["milk", "cream", "vanilla", "sugar"],
        description: "Smooth and creamy vanilla ice cream.",
        image: "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=400&q=80"
    }
];

const recipesContainer = document.getElementById('recipesContainer');
const searchBar = document.getElementById('searchBar');
const filterType = document.getElementById('filterType');

function displayRecipes(filteredRecipes) {
    recipesContainer.innerHTML = '';
    if (filteredRecipes.length === 0) {
        recipesContainer.innerHTML = '<p>No recipes found.</p>';
        return;
    }
    filteredRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h2>${recipe.name}</h2>
            <p>${recipe.description}</p>
        `;
        recipesContainer.appendChild(card);
    });
}

function filterRecipes() {
    const searchText = searchBar.value.toLowerCase();
    const type = filterType.value;
    const filtered = recipes.filter(recipe => {
        const matchesType = type === 'all' || recipe.type === type;
        const matchesSearch = recipe.name.toLowerCase().includes(searchText) || recipe.description.toLowerCase().includes(searchText);
        return matchesType && matchesSearch;
    });
    displayRecipes(filtered);
}

searchBar.addEventListener('input', filterRecipes);
filterType.addEventListener('change', filterRecipes);

displayRecipes(recipes);
