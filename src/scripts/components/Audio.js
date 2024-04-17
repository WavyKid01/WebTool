export default class Audio {
    constructor(element) {
        this.element = element;
    
        this.init();
      }
    
      init() {
        document.addEventListener('play', function(e) {
            var audios = document.getElementsByTagName('audio');
        
            for (var i = 0, len = audios.length; i < len; i++) {
                if (audios[i] != e.target) {
                    audios[i].pause();
                }
            }
        }, true);
      }
}