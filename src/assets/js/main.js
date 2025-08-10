// Enhanced Unify Demo JavaScript
console.log('🎉 Unify Demo Site loaded successfully!');

// Main application functionality
class UnifyDemo {
  constructor() {
    this.init();
  }

  init() {
    this.setupSmoothScrolling();
    this.setupNavigation();
    this.setupContactForm();
    this.setupAnimations();
    console.log('Unify Demo initialized with all features!');
  }

  // Smooth scrolling for anchor links
  setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Active navigation highlighting
  setupNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
        link.classList.add('active');
      }
    });
  }

  // Contact form handling
  setupContactForm() {
    const form = document.querySelector('.contact-form form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleFormSubmission(form);
      });
    }
  }

  handleFormSubmission(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    console.log('Form submitted:', data);
    
    // Show success message
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Message Sent!';
    submitButton.disabled = true;
    
    setTimeout(() => {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
      form.reset();
    }, 2000);
  }

  // Intersection Observer for animations
  setupAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe cards and features
    const animatedElements = document.querySelectorAll('.card, .feature, .product-card');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }
}

// Live reload support for development
if (typeof EventSource !== 'undefined') {
  const eventSource = new EventSource('/__events');
  eventSource.onmessage = function(event) {
    if (event.data === 'reload') {
      console.log('🔄 Live reload triggered');
      window.location.reload();
    }
  };
  
  eventSource.onerror = function() {
    console.log('📡 Live reload connection lost');
    eventSource.close();
  };
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.unifyDemo = new UnifyDemo();
});