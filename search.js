function performSearch() {
    const query = document.getElementById('searchQuery').value;
    const brand = document.getElementById('brand').value;
    const minPrice = document.getElementById('minPrice').value;
    const maxPrice = document.getElementById('maxPrice').value;

    alert('Търсене: ' + query + '\nМарка: ' + brand + '\nМинимална цена: ' + minPrice + '\nМаксимална цена: ' + maxPrice);
    
    return false;
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}