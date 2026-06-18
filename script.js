/* ============================================
   MY PORTFOLIO - JavaScript
   Practice: Try adding new features!
   ============================================ */

// --- Mobile Menu Toggle ---
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// --- Skill Bar Animation ---
// Animate the skill bars when they come into view
function animateSkillBars() {
    const skillFills = document.querySelectorAll('.skill-fill');

    skillFills.forEach(fill => {
        const width = fill.getAttribute('data-width');
        fill.style.width = width + '%';
    });
}

// Use Intersection Observer to trigger animation when skills section is visible
const skillsSection = document.getElementById('skills');

if (skillsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, { threshold: 0.3 });

    observer.observe(skillsSection);
}

// --- Smooth Scrolling ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// --- Contact Form Handler ---
function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const status = document.getElementById('form-status');

    // Simple validation
    if (name && email && message) {
        status.textContent = `Thanks ${name}! Your message has been received. (This is a demo - no email was sent)`;
        status.style.color = '#0f3460';

        // Clear the form
        document.querySelector('.contact-form').reset();
    } else {
        status.textContent = 'Please fill in all fields.';
        status.style.color = '#e94560';
    }
}

// --- Navbar Background on Scroll ---
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        nav.style.boxShadow = 'none';
    }
});

// --- Console Greeting (Easter Egg!) ---
console.log('%c Hello there! 👋', 'font-size: 20px; color: #e94560;');
console.log('%c You found the console! You must be a developer!', 'font-size: 14px; color: #0f3460;');
console.log('%c Try learning Git by committing changes to this project!', 'font-size: 12px; color: #555;');
