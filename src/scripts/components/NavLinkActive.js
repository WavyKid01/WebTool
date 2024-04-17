export default class NavLinkActive {
  constructor(element) {
    this.element = element;
    this.links = this.element.querySelectorAll('a');

    this.init();
  }

  init() {
    let otherLinkActive = false;
    let allLinkActive = false;

    this.links.forEach((link) => {
      if (link.href === window.location.href) {
        link.classList.add('nav-link-active');
        if (link.textContent.trim() !== 'Tout') {
          otherLinkActive = true;
        } else {
          allLinkActive = true;
        }
      }
    });

    // Remove nav-link-active class from "All" link if another link is active
    if (otherLinkActive) {
      const allLink = this.element.querySelector('a');
      allLink.classList.remove('nav-link-active');
    }

    // If no other link is active, mark "All" link as active
    if (!otherLinkActive && !allLinkActive) {
      const allLink = this.element.querySelector('a');
      allLink.classList.add('nav-link-active');
    }
  }
}
