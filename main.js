let classesTaken = [
    {
        title: 'Web Design',
        description: 'A web design class',
        skills: ''
    },
    {
        title: 'Analysis of Algorithms',
        description: 'A class for algos',
        skills: ''
    },
    {
        title: 'Software Design',
        description: '',
        skills: ''
    },
    {
        title: 'Web Design',
        description: '',
        skills: ''
    },
    {
        title: 'Web Design',
        description: '',
        skills: ''
    }
]

for (let i = 0; i < classesTaken.length; i++) {
    let node = document.createElement('div');
    let currentSlide = i === 0 ? ' current-slide' : '';

    node.setAttribute('class', 'carousel-list-item' + currentSlide);

    let h3 = document.createElement('h3');
    h3.textContent = classesTaken[i].title;
    node.appendChild(h3);

    let p = document.createElement('p');
    p.textContent = classesTaken[i].description || 'Description not available.';
    node.appendChild(p);

    document.getElementById('carousel-container').appendChild(node);
}

const track = document.getElementById('carousel-container');
const nextButton = document.querySelector('.right-button');
const prevButton = document.querySelector('.left-button');

// Set up the state for tracking position
let currentIndex = 0;

// Get the width of a single carousel item dynamically
const carouselItems = document.querySelectorAll('.carousel-list-item');
const itemWidth = carouselItems[0].offsetWidth + 20; // Includes margin (10px on each side)
const totalItems = carouselItems.length;

// Move to the next slide
nextButton.addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
        const offset = -itemWidth * currentIndex;
        track.style.transform = `translateX(${offset}px)`;
    } else {
        // If at the end, wrap back to the first item
        currentIndex = 0;
        track.style.transform = 'translateX(0)';
    }

    updateSlideClass();
});

// Move to the previous slide
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        const offset = -itemWidth * currentIndex;
        track.style.transform = `translateX(${offset}px)`;
    } else {
        // If at the start, wrap to the last item
        currentIndex = totalItems - 1;
        const offset = -itemWidth * currentIndex;
        track.style.transform = `translateX(${offset}px)`;
    }

    updateSlideClass();
});

// Update the "current-slide" class
function updateSlideClass() {
    // Remove the current-slide class from all items
    carouselItems.forEach(item => item.classList.remove('current-slide'));
    
    // Add the current-slide class to the active item
    carouselItems[currentIndex].classList.add('current-slide');
}