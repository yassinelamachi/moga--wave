// Navigation active state and smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight - 20;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                const value = field.value.trim();
                
                // Clear previous error styling
                field.style.borderColor = '';
                const existingError = field.parentNode.querySelector('.error-message');
                if (existingError) existingError.remove();
                
                // Validate field
                if (!value) {
                    isValid = false;
                    field.style.borderColor = '#dc3545';
                    
                    // Add error message
                    const errorMsg = document.createElement('div');
                    errorMsg.className = 'error-message';
                    errorMsg.textContent = 'This field is required';
                    errorMsg.style.cssText = 'color: #dc3545; font-size: 0.8rem; margin-top: 5px;';
                    field.parentNode.appendChild(errorMsg);
                } else {
                    // Basic email validation
                    if (field.type === 'email' && !isValidEmail(value)) {
                        isValid = false;
                        field.style.borderColor = '#dc3545';
                        
                        const errorMsg = document.createElement('div');
                        errorMsg.className = 'error-message';
                        errorMsg.textContent = 'Please enter a valid email address';
                        errorMsg.style.cssText = 'color: #dc3545; font-size: 0.8rem; margin-top: 5px;';
                        field.parentNode.appendChild(errorMsg);
                    }
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                // Scroll to first error
                const firstError = form.querySelector('[style*="border-color"]');
                if (firstError) {
                    firstError.focus();
                }
            }
        });
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for fade-in effect
    const elementsToAnimate = document.querySelectorAll('.feature-card, .booking-container, .about-section');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    // Set minimum date to today for booking form
    const dateInput = document.getElementById('lesson_date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
    
    // Update form validation
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            const lessonDate = new Date(document.getElementById('lesson_date').value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (lessonDate < today) {
                e.preventDefault();
                alert('Please select a future date for your lesson.');
                return false;
            }
        });
    }
    
    // Dynamic navigation on scroll
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.boxShadow = 'var(--shadow-sm)';
        } else {
            navbar.style.boxShadow = 'var(--shadow-sm)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
    
    // Mobile menu functionality (if nav links exist)
    const mobileMenuSetup = () => {
        if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-btn')) {
            const navContainer = document.querySelector('.nav-container');
            const navLinks = document.querySelector('.nav-links');
            
            if (navContainer && navLinks) {
                // Create hamburger menu button
                const menuBtn = document.createElement('button');
                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                menuBtn.className = 'mobile-menu-btn';
                menuBtn.setAttribute('aria-label', 'Toggle navigation menu');
                menuBtn.style.cssText = `
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    color: var(--primary);
                    cursor: pointer;
                    padding: 0.5rem;
                `;
                
                navContainer.appendChild(menuBtn);
                
                // Hide nav links on mobile by default
                navLinks.style.display = 'none';
                
                menuBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
                    navLinks.style.flexDirection = 'column';
                    navLinks.style.position = 'absolute';
                    navLinks.style.top = '100%';
                    navLinks.style.left = '0';
                    navLinks.style.width = '100%';
                    navLinks.style.background = 'white';
                    navLinks.style.padding = '1rem';
                    navLinks.style.boxShadow = 'var(--shadow-sm)';
                    navLinks.style.zIndex = '999';
                });
                
                // Close menu when link is clicked
                navLinks.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        navLinks.style.display = 'none';
                    });
                });
            }
        }
    };
    
    mobileMenuSetup();
    window.addEventListener('resize', mobileMenuSetup);
    
    // Contact form field focus effects
    const formInputs = document.querySelectorAll('.form-control');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
});

// Utility function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Load page animations after content loads
window.addEventListener('load', function() {
    document.querySelectorAll('img').forEach(img => {
        img.style.transition = 'transform 0.3s ease';
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});