// Simple Unify starter JavaScript
console.log('🎉 Unify starter kit loaded successfully!');

// Example: Simple interactive functionality
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded. Ready for your awesome content!');
  
  // Add smooth scrolling to anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});