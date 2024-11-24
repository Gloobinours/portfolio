let classesTaken = [
    {
        title: 'Software Dev & Problem Solving',
        description: 'Fundamentals of computational problem solving',
        skills: 'Python, Java, Data Structures, Data Integrity, Data Security, Problem Solving'
    },
    {
        title: 'Engineering of Software Subsystems',
        description: 'An introduction to the principles of the foundations of contemporary software design.',
        skills: 'OOP, Java, Design Patterns'
    },
    {
        title: 'Web Engineering',
        description: 'Application of software engineering principles to the creation of web applications.',
        skills: 'Flask, PostGreSQL, Python, React'
    },
    {
        title: 'Intro to Software Engineering',
        description: 'A term-long, team-based project done in a studio format.',
        skills: 'Java, Spring Boot, Angular, RESTful API'
    },
    {
        title: 'Software Design for Computing Systems',
        description: 'This course provides students with hardware, computer architecture, and networking domain specific knowledge.',
        skills: 'C, STM32'
    },
    {
        title: 'Software Process & Project Management',
        description: 'A class about software process and related software project management issues.',
        skills: 'Project planning and tracking, Change Control, Software QA, Risk Management'
    },
    {
        title: 'Analysis of Algorithms',
        description: 'Covers a variety of classical algorithms and data structures and their complexity.',
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
    p.style.marginBottom = '20px'
    node.appendChild(p);

    let skill = document.createElement('p');
    let s = document.createElement('span');
    s.textContent = 'skills: ';
    s.classList.add('gradient-text');
    node.appendChild(s);
    skill.textContent += classesTaken[i].skills || 'Skills not available.';
    node.appendChild(skill);

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

document.getElementById('carousel-container').style.width = itemWidth * classesTaken.length

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