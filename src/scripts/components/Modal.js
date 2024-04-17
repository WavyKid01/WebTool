export default class Modal {
  constructor(element) {
    this.element = element;
    this.modals = this.element.querySelectorAll('.modal');

    this.init();
  }

  init() {
    for (let i = 0; i < this.modals.length; i++) {
      const modal = this.modals[i];
      modal.addEventListener('mouseover', this.hoverModal.bind(this));
    }
  }

  hoverModal(event) {
    const img = event.currentTarget;

    img;
  }
}
