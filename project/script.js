// Get elements
const burgerItem = document.getElementById('burger-item');
const secondSidebar = document.getElementById('second-sidebar');

burgerItem.addEventListener('click', function(e) {
    e.preventDefault();  
    secondSidebar.classList.toggle('active');  // Toggle the visibility of the second sidebar
});








const sidebarItems = document.querySelectorAll('.second-sidebar-item');
sidebarItems.forEach(item => {
    item.addEventListener('click', function() {
        const content = this.querySelector('p').textContent; 
        alert(`You clicked on: ${content}`); 
    });
});







document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    
    // Function to handle the search action
    function handleSearch() {
        const searchQuery = searchInput.value.trim();
        if (searchQuery !== '') {
            console.log('Searching for:', searchQuery); // For demo: logs the search query in the console
            alert(`Searching for: ${searchQuery}`);
        } else {
            alert('Please enter a search term.');
        }
    }
    
    
    searchButton.addEventListener('click', handleSearch);
    
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });
});



    document.getElementById('calculatorBtn').addEventListener('click', function() {
        alert('Кнопка калькулятора нажата!');
    });



    let currentSlide = 1;
const totalSlides = 3;

const slideNumberElement = document.querySelector('.slide-number');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

function updateSlideNumber() {
    slideNumberElement.textContent = `${currentSlide}/${totalSlides}`;
}

// Arrow click event listeners
arrowLeft.addEventListener('click', () => {
    if (currentSlide > 1) {
        currentSlide--;
        updateSlideNumber();
    }
});

arrowRight.addEventListener('click', () => {
    if (currentSlide < totalSlides) {
        currentSlide++;
        updateSlideNumber();
    }
});

// Initialize the slide number
updateSlideNumber();







window.addEventListener('load', function() {
    // Get the footer container element
    const footer = document.querySelector('.footer-container');
    
    // Check if the footer exists
    if (footer) {
        // Set the styles to ensure there's no gap
        footer.style.marginLeft = '0';
        footer.style.paddingLeft = '0';
    }

    document.body.style.marginLeft = '0';
    document.body.style.paddingLeft = '0';
});


  


