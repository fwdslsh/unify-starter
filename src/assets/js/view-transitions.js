/**
 * View Transitions API Support for Unify Demo
 * Provides smooth page transitions and enhanced navigation experience
 */

class ViewTransitions {
  constructor() {
    this.isSupported = 'startViewTransition' in document;
    this.init();
  }

  init() {
    if (!this.isSupported) {
      console.log('View Transitions API not supported');
      return;
    }

    this.setupNavigationTransitions();
    this.setupPageTransitions();
    console.log('🎬 View Transitions API initialized');
  }

  setupNavigationTransitions() {
    // Handle navigation clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      
      if (!link || !this.shouldTransition(link)) {
        return;
      }

      e.preventDefault();
      this.navigateWithTransition(link.href, link);
    });
  }

  shouldTransition(link) {
    // Only transition internal links
    const url = new URL(link.href, window.location.origin);
    return (
      url.origin === window.location.origin &&
      !link.hasAttribute('download') &&
      !link.getAttribute('href')?.startsWith('#') &&
      !link.target
    );
  }

  async navigateWithTransition(url, linkElement) {
    // Set transition names based on link context
    this.setTransitionNames(linkElement);

    if (!document.startViewTransition) {
      window.location.href = url;
      return;
    }

    const transition = document.startViewTransition(async () => {
      await this.updatePage(url);
    });

    try {
      await transition.finished;
    } catch (error) {
      console.log('Transition interrupted:', error);
    }
  }

  setTransitionNames(linkElement) {
    // Set different transition animations based on navigation type
    const main = document.querySelector('main');
    
    if (linkElement.closest('.main-nav')) {
      main.style.viewTransitionName = 'main-nav-transition';
    } else if (linkElement.closest('.hero')) {
      main.style.viewTransitionName = 'hero-transition';
    } else if (linkElement.closest('.card')) {
      main.style.viewTransitionName = 'card-transition';
    } else {
      main.style.viewTransitionName = 'main-content';
    }
  }

  async updatePage(url) {
    try {
      const response = await fetch(url);
      const html = await response.text();
      const newDocument = new DOMParser().parseFromString(html, 'text/html');
      
      // Update page content
      document.title = newDocument.title;
      document.querySelector('main').innerHTML = newDocument.querySelector('main').innerHTML;
      
      // Update meta tags
      this.updateMetaTags(newDocument);
      
      // Update browser history
      window.history.pushState(null, '', url);
      
      // Reinitialize page scripts
      this.reinitializePageScripts();
      
    } catch (error) {
      console.error('Failed to load page:', error);
      window.location.href = url;
    }
  }

  updateMetaTags(newDocument) {
    const metaSelectors = [
      'meta[name="description"]',
      'meta[name="keywords"]',
      'meta[property^="og:"]',
      'meta[name^="twitter:"]'
    ];

    metaSelectors.forEach(selector => {
      const oldMeta = document.querySelector(selector);
      const newMeta = newDocument.querySelector(selector);
      
      if (oldMeta && newMeta) {
        oldMeta.setAttribute('content', newMeta.getAttribute('content'));
      }
    });
  }

  reinitializePageScripts() {
    // Reinitialize any page-specific functionality
    const event = new CustomEvent('pageTransition', {
      detail: { url: window.location.href }
    });
    document.dispatchEvent(event);
  }

  setupPageTransitions() {
    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
      if (this.isSupported) {
        this.navigateWithTransition(window.location.href, null);
      }
    });

    // Add custom transition styles
    this.injectTransitionStyles();
  }

  injectTransitionStyles() {
    const style = document.createElement('style');
    style.textContent = `
      /* Additional transition styles for different navigation types */
      ::view-transition-old(main-nav-transition) {
        animation: slide-out-up 300ms cubic-bezier(0.2, 0, 0, 1) forwards;
      }
      
      ::view-transition-new(main-nav-transition) {
        animation: slide-in-down 300ms cubic-bezier(0.2, 0, 0, 1) forwards;
      }
      
      ::view-transition-old(hero-transition) {
        animation: scale-out 400ms cubic-bezier(0.2, 0, 0, 1) forwards;
      }
      
      ::view-transition-new(hero-transition) {
        animation: scale-in 400ms cubic-bezier(0.2, 0, 0, 1) forwards;
      }
      
      ::view-transition-old(card-transition) {
        animation: flip-out 350ms cubic-bezier(0.2, 0, 0, 1) forwards;
      }
      
      ::view-transition-new(card-transition) {
        animation: flip-in 350ms cubic-bezier(0.2, 0, 0, 1) forwards;
      }
      
      @keyframes slide-out-up {
        to { transform: translateY(-100%); }
      }
      
      @keyframes slide-in-down {
        from { transform: translateY(-100%); }
      }
      
      @keyframes scale-out {
        to { transform: scale(0.8); opacity: 0; }
      }
      
      @keyframes scale-in {
        from { transform: scale(1.2); opacity: 0; }
      }
      
      @keyframes flip-out {
        to { transform: rotateY(90deg); opacity: 0; }
      }
      
      @keyframes flip-in {
        from { transform: rotateY(-90deg); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new ViewTransitions();
  });
} else {
  new ViewTransitions();
}

// Make available globally for debugging
window.ViewTransitions = ViewTransitions;