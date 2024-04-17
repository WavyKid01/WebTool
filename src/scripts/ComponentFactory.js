import Scrolly from './components/Scrolly';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Youtube from './components/Youtube';
import Tabs from './components/Tabs';
import TypeWriter from './components/TypeWriter';
import Modal from './components/Modal';
import Parallax from './components/Parallax';
import Accordion from './components/Accordion';
import Audio from './components/Audio';
import Tracking from './components/Tracking';
import NavLinkActive from './components/NavLinkActive';

export default class ComponentFactory {
  constructor() {
    this.componentList = {
      Carousel,
      Header,
      Scrolly,
      Youtube,
      Tabs,
      Parallax,
      TypeWriter,
      Modal,
      Accordion,
      Audio,
      Tracking,
      NavLinkActive,
    };
    this.init();
  }

  init() {
    const components = document.querySelectorAll('[data-component]');
    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;

      if (this.componentList[componentName]) {
        new this.componentList[componentName](element);
      } else {
        console.log(
          `La composante ${componentName} n'existe pas ou ne fonction pas!`
        );
      }
    }
  }
}
