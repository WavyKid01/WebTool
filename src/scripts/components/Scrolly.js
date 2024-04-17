export default class Scrolly {
  constructor(element) {
    this.element = element;

    this.options = {
      //On utilisera les options ailleurs donc on la rend global
      rootMargin: '0px 0px -100px 0px', //quatre côté de l'écran --- On pourrait mettre 0px 0px 0px 0px
    };

    this.init();
  }

  init() {
    const observer = new IntersectionObserver(
      this.watch.bind(this),
      this.options
    ); //on peut changer le nom de la méthode callback(On doit bind le this )-----les options créées dans le constructor

    const items = this.element.querySelectorAll('[data-scrolly]');
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      observer.observe(item); //va regarder les items qui ont l'attribut data scrolly et le call a chaque fois qu'il rentre dans l'écran
    }
  }

  watch(entries, observer) {
    //la methode watch (callBack par defaut) envoie des parametres (entries, observer) comme addEventListener avec evt
    //console.log(entries); pour voir les parametres disponibles de entries
    for (let i = 0; i < entries.length; i++) {
      const entry = entries[i];
      const target = entry.target; //entry.target renvoie les éléments HTML de entry et on le stock dans une const

      //quand un quelque chose devient visible dans l'écran, on ajoute la classe .is-active, sinon on l'enleve
      if ('noRepeat' in this.element.dataset) {
        //Camel Case en Script
        if (entry.isIntersecting) {
          target.classList.add('is-active');
          observer.unobserve(target); //Faire arrêter de jouer l'animation après la première fois jouée
          //On prend l'élément HTML (target) qui a été observé et on arrête l'observation (unobserve)
        } else {
          target.classList.remove('is-active');
        }
      } else if (entry.isIntersecting) {
        target.classList.add('is-active');
      } else {
        target.classList.remove('is-active');
      }
    }
  }
}
