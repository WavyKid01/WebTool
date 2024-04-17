export default class Tabs {
  constructor(element) {
    this.element = element;
    this.tabContents = this.element.querySelectorAll('.tab__content');
    this.tabButtons = this.element.querySelectorAll('.js-tab');
    this.init();
  }

  init() {
    //Chaque Boutons avec leur propre click
    for (let i = 0; i < this.tabButtons.length; i++) {
      const tabButton = this.tabButtons[i];
      tabButton.addEventListener('click', this.switchTabs.bind(this));
    }
  }

  switchTabs(event) {
    const tabId = event.currentTarget.getAttribute('data-tab-id');
    console.log(event.currentTarget.getAttribute('data-tab-id'));
    // cacher tout le contenu

    for (let i = 0; i < this.tabContents.length; i++) {
      this.tabContents[i].classList.remove('is-active');
    }

    // Montrer le contenu selectionné
    const selectedContent = this.element.querySelector(
      `[data-tab-content-id="${tabId}"]`
    );
    selectedContent.classList.add('is-active');

    // Update le bouton tab active

    for (let i = 0; i < this.tabButtons.length; i++) {
      this.tabButtons[i].classList.remove('is-active');
    }
    event.currentTarget.classList.add('is-active');
  }
}
