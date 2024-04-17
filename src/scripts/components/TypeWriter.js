import Typewriter from 'typewriter-effect/dist/core';

export default class TypeWriter {
  constructor(element) {
    this.element = element;

    this.typeOptions = {
      strings: ['votre', 'Formulaire', 'Envoyé'],
      autoStart: true,
      loop: true,
    };
    this.init();
  }

  init() {
    this.typewriter = new Typewriter(this.element, this.typeOptions);
    console.log('advil');
  }
}
