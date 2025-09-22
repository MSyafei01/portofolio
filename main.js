// JavaScript for Portfolio Website
        // Initialize Particles.js
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#00d9ff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#00d9ff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });

        // Mobile Menu Toggle
        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    document.querySelector('.nav-links').classList.remove('active');
                }
            });
        });



// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
});

// Initialize Application
function initApp() {
    // Hide loading screen after content is loaded
    setTimeout(() => {
        document.querySelector('.loading-screen').classList.add('hidden');
    }, 1500);
    
    // Initialize navigation
    initNavigation();
    
    // Initialize animations
    initAnimations();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize testimonials slider
    initTestimonials();
}



        // Animation on Scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.project-card, .blog-card, .detail-item');
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;
            
            elements.forEach(element => {
                const position = element.getBoundingClientRect();
                
                // If element is in viewport
                if(position.top < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });

            // Scroll to top button
            const scrollButton = document.querySelector('.scroll-top');
            if (scrollTop > 500) {
                scrollButton.classList.add('active');
            } else {
                scrollButton.classList.remove('active');
            }
        }

        // Initialize elements for animation
        document.querySelectorAll('.project-card, .blog-card, .detail-item').forEach(element => {
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });

        // Scroll to top functionality
        document.querySelector('.scroll-top').addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Listen for scroll events
        window.addEventListener('scroll', animateOnScroll);
        // Initial check
        window.addEventListener('load', animateOnScroll);
        animateOnScroll();

        // Add typing animation to hero text
        function initTypingAnimation() {
            const heroTitle = document.querySelector('.hero-title');
            const originalText = heroTitle.textContent;
            heroTitle.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < originalText.length) {
                    heroTitle.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            // Start typing after a delay
            setTimeout(typeWriter, 1500);
        }
        
        // Initialize typing animation
        initTypingAnimation();

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initApp,
        initTypingAnimation,
        animateOnScroll,
    };
}