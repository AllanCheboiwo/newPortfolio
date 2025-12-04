// ========================================
// Portfolio JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initSmoothScroll();
    initNavHighlight();
    initTerminalTyping();
});

// ========================================
// Scroll Reveal Animations
// ========================================
function initScrollAnimations() {
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// ========================================
// Smooth Scrolling for Nav Links
// ========================================
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-links a, .hero-cta a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed nav
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ========================================
// Navigation Highlight on Scroll
// ========================================
function initNavHighlight() {
    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    function highlightNav() {
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNav);
    highlightNav(); // Run once on load
}

// ========================================
// Terminal Typing Effect (Optional Enhancement)
// ========================================
function initTerminalTyping() {
    const terminalBody = document.querySelector('.terminal-body');
    if (!terminalBody) return;
    
    // Add subtle hover effect to terminal
    terminalBody.addEventListener('mouseenter', () => {
        terminalBody.style.background = 'rgba(255, 255, 255, 0.02)';
    });
    
    terminalBody.addEventListener('mouseleave', () => {
        terminalBody.style.background = 'transparent';
    });
}

// ========================================
// Add active state styling
// ========================================
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: var(--accent);
    }
    
    .nav-links a.active::before {
        opacity: 1;
        transform: translateX(0);
    }
`;
document.head.appendChild(style);

// ========================================
// Optional: Console Easter Egg
// ========================================
console.log(`
%c
╔═══════════════════════════════════════════════╗
║                                               ║
║   Hey there, curious developer! 👋            ║
║                                               ║
║   Looking for backend challenges?             ║
║   Let's connect: kiplongeiallan@gmail.com     ║
║                                               ║
╚═══════════════════════════════════════════════╝
`, 'color: #f59e0b; font-family: monospace;');

