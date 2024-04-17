export default class Header {
  constructor(element) {
    this.element = element;
    this.scrollPosition = 0;
    this.scrollLimit = 0.2; //Limite 20% viewport
    this.lastScrollPosition = 0;
    this.html = document.documentElement;
    this.menu = document.getElementById('menu');
    this.navActive = false;

    this.init();
    this.initNavMobile();
  }

  init() {
    window.addEventListener('scroll', this.onScroll.bind(this)); //ajoute un événement sur scroll
    window.addEventListener('click', this.checkActive.bind(this));
  }

  initNavMobile(evt) {
    //burgur
    const toggles = this.element.querySelectorAll('.js-toggle');
    for (let i = 0; i < toggles.length; i++) {
      const toggle = toggles[i];

      toggle.addEventListener('click', this.onToggleNav.bind(this));
    }

    const RemoveNavs = this.element.querySelectorAll('.js-remove');
    for (let i = 0; i < RemoveNavs.length; i++) {
      const RemoveNav = RemoveNavs[i];
      RemoveNav.addEventListener('click', this.removeNavF.bind(this));
    }
  }

  onScroll(event) {
    //cacher le Header
    this.lastScrollPosition = this.scrollPosition;
    this.scrollPosition = document.scrollingElement.scrollTop;
    this.setHeaderState();
    this.setDirectionState();
  }

  onToggleNav(event) {
    this.html.classList.toggle('nav-is-active');

    if (this.navActive) {
      this.navActive = false;
    } else if (!this.navActive) {
      this.navActive = true;
    }

    console.log(this.navActive);
  }

  checkActive(event) {
    if (this.navActive && !this.element.contains(event.target)) {
      this.html.classList.remove('nav-is-active');
      this.navActive = false;
    }
  }

  removeNavF(event) {
    this.html.classList.remove('nav-is-active');
  }

  setHeaderState() {
    const scrollHeight = document.scrollingElement.scrollHeight;

    if ('not-hiding' in this.element.dataset) {
      if (this.scrollPosition > scrollHeight * this.scrollLimit) {
        this.html.classList.remove('header-is-hidden');
      }
    } else {
      this.html.classList.add('header-is-hidden');
    }

    if ('scroll-limit' in this.element.dataset) {
      this.scrollLimit = 0.7;
    }
  }

  setDirectionState() {
    if (this.scrollPosition >= this.lastScrollPosition) {
      this.html.classList.add('is-scrolling-down');
      this.html.classList.remove('is-scrolling-up');
    } else {
      this.html.classList.remove('is-scrolling-down');
      this.html.classList.add('is-scrolling-up');
    }
  }
}
