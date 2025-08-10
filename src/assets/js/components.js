// Component-specific JavaScript
console.log('📦 Component scripts loaded');

// Card component interactions
class CardComponent {
  static init() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
      });
    });
  }
}

// Product card component
class ProductCard {
  static init() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
      const img = card.querySelector('img');
      if (img) {
        img.addEventListener('load', () => {
          img.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
      }
    });
  }
}

// Hero component animations
class HeroComponent {
  static init() {
    const hero = document.querySelector('.hero');
    if (hero) {
      const title = hero.querySelector('h1');
      const subtitle = hero.querySelector('p');
      const button = hero.querySelector('.btn');
      
      // Staggered animation
      setTimeout(() => title && (title.style.opacity = '1'), 100);
      setTimeout(() => subtitle && (subtitle.style.opacity = '1'), 300);
      setTimeout(() => button && (button.style.opacity = '1'), 500);
      
      // Initially hide elements
      [title, subtitle, button].forEach(el => {
        if (el) {
          el.style.opacity = '0';
          el.style.transition = 'opacity 0.6s ease';
        }
      });
    }
  }
}

// Navigation component
class NavigationComponent {
  static init() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
      });
    }
  }
}

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
  CardComponent.init();
  ProductCard.init();
  HeroComponent.init();
  NavigationComponent.init();
  console.log('✅ All components initialized');
});