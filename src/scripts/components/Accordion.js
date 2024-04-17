export default class Accordion {
    constructor(element) {
      this.element = element;
      this.container = this.element.querySelectorAll('.js-header');
      
      this.removeClass = true;
      
      this.init();
    }
    
    init() {
      if ('notClosing' in this.element.dataset) {
        this.removeClass = false;
      }
      
      for (let i = 0; i < this.container.length; i++) {
        const accordion = this.container[i];
        
        accordion.addEventListener('click', this.openAccordion.bind(this));
        //si l'accordéon à le data-auto-open, il sera déjà actif lors du chargement de la page
        if ('autoOpen' in accordion.dataset) {
          accordion.classList.add('acc-is-active');
        }
      }
    }
  
    /**
     * ouvre le contenu de l'accordéon
     * @param {Event} event - représente le click
     */
    openAccordion(event) {
    
      const targetAccordion = event.currentTarget;
      targetAccordion.classList.toggle('acc-is-active');
      
      for (let i = 0; i < this.container.length; i++) { 
        this.otherAccordion = this.container[i];
        //si data-not-closing est présent, n'enlève pas la classe
        if (
          this.removeClass == false
          // ||
          // 'autoOpen' in this.container.dataset.length >= 3
        ) {
          return;
        }
        //si d'autres accordéons sont ouverts quand on clique sur un, ferme les autres
        else if (this.otherAccordion != targetAccordion) {
          this.otherAccordion.classList.remove('acc-is-active');
        }
      }
    }
  }