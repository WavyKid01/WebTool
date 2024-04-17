import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(element) {
    this.element = element;

    this.options = {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
        clickable: true,
      },
    };

    this.init();
  }

  init() {
    this.setOptions();

    new Swiper(this.element, this.options);
  }

  setOptions() {
    this.variant = this.element.dataset.variant;

    if (this.variant == 'loop') {
      this.options = {
        loop: true,
        autoplay: true,
      };
    }

    if (this.variant == 'split') {
      this.options = {
        pagination: {
          el: this.element.querySelector('.swiper-pagination'),
          clickable: true,
        },
        // Responsive breakpoints
        breakpoints: {
          1825: {
            slidesPerView: 3,
          },
          1690: {
            slidesPerView: 2.8,
          },
          // when window width is >= 1550px
          1550: {
            slidesPerView: 2.6,
          },
          1480: {
            slidesPerView: 2.4,
          },
          1300: {
            slidesPerView: 2.2,
          },
          1250: {
            slidesPerView: 2,
          },
          940: {
            slidesPerView: 1.6,
          },
          860: {
            slidesPerView: 1.4,
          },
          680: {
            slidesPerView: 1.3,
          },
          520: {
            slidesPerView: 1,
          },
          375: {
            slidesPerView: 1,
          },
        },
      };
    }
    if (this.variant == 'split2') {
      this.options = {
        pagination: {
          el: this.element.querySelector('.swiper-pagination'),
          clickable: true,
        },
        // Responsive breakpoints
        breakpoints: {
          425: {
            slidesPerView: 1.5,
          },
          375: {
            slidesPerView: 1,
          },
        },
      };
    }
  }
}
