let fast = document.getElementsByClassName('fast');
let medium = document.getElementsByClassName('medium');
let slow = document.getElementsByClassName('slow');
let test = document.getElementsByClassName('test');
let test_deux = document.getElementsByClassName('test_deux');
let test_trois = document.getElementsByClassName('test_trois');
let test_quatre = document.getElementsByClassName('test_quatre');

export default class Tracking {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    document.addEventListener('mousemove', this.mouseMovement.bind(this));
  }

  mouseMovement(evt) {
    const mouseX = evt.pageX;
    const mouseY = evt.pageY;

    if (fast) {
      fast[0].style.transform =
        'translateX(' + mouseX * 0.01 + '%) translateY(' + mouseY * 0.04 + '%)';
    }
    if (medium) {
      medium[0].style.transform =
        'translateX(' +
        mouseX * 0.005 +
        '%) translateY(' +
        mouseY * 0.03 +
        '%)';
    }
    if (slow) {
      slow[0].style.transform =
        'translateX(' +
        mouseX * 0.001 +
        '%) translateY(' +
        mouseY * 0.02 +
        '%)';
    }
    if (test) {
      test[0].style.transform =
        'translateX(' +
        mouseX * 0.02 +
        '%) translateY(' +
        mouseY * 0.002 +
        '%)';
    }
    if (test_deux) {
      test_deux[0].style.transform =
        'translateX(' +
        mouseX * 0.04 +
        '%) translateY(' +
        mouseY * 0.002 +
        '%)';
    }
    if (test_trois) {
      test_trois[0].style.transform =
        'translateX(' +
        mouseX * 0.05 +
        '%) translateY(' +
        mouseY * 0.002 +
        '%)';
    }
    if (test_quatre) {
      test_quatre[0].style.transform =
        'translateX(' +
        mouseX * 0.07 +
        '%) translateY(' +
        mouseY * 0.002 +
        '%)';
    }
  }
}
