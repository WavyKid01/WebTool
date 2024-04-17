import { jarallax, jarallaxVideo } from 'jarallax';

export default class Parallax {
  constructor(element) {
    this.element = element;

    jarallaxVideo();
    this.init();
  }

  init() {
    console.log('jara');

    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.3,
    });

    jarallax(document.querySelectorAll('.jarallax_deux'), {
      speed: 0.6,
    });
  }
}
