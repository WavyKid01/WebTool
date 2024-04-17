export default class Youtube {
  constructor(element) {
    this.element = element;

    this.videoContainer = this.element.querySelector('.js-video');
    this.poster = this.element.querySelector('.js-poster');
    this.videoId = this.element.dataset.videoId;
    this.hideControls = this.element.dataset.hideControls === 'true' ? 0 : 1; //!mettre controls à 0 si l'attribut est à true, sinon 1  //Prendre la valeur de l'attribut data-hide-controls
    this.autoplay = this.poster ? 1 : 0; //S'il y a un poster, retourne 1, sinon 2
    this.playerReady = false;

    Youtube.instances.push(this);

    if (this.videoId) {
      Youtube.loadScript();
    } else {
      console.error('spécifier un id');
    }
  }

  static loadScript() {
    //Quand on utilise "static", on ne peut pas utiliser de bind(this).
    //Loader la librarie script de Youtube AVANT le reste

    if (!Youtube.scriptIsLoading) {
      Youtube.scriptIsLoading = true;

      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(script);
    }
  }

  init() {
    //pour garder la "copie virtuel" de la méthode this.initPlayer.bind(this), met dans variable
    this.initPlayer = this.initPlayer.bind(this);
    if (this.poster) {
      this.element.addEventListener('click', this.initPlayer);
    } else {
      this.initPlayer();
    }
  }

  initPlayer(event) {
    //si la méthode a été appelé par le click, on enlève l'événement
    if (event) {
      this.element.removeEventListener('click', this.initPlayer);
    }

    this.player = new YT.Player(this.videoContainer, {
      height: '100%',
      width: '100%',
      videoId: this.videoId,

      //Parametre pour faire des choses: Cacher Icon Youtube
      playerVars: {
        rel: 0,
        autoplay: this.autoplay,
        controls: this.hideControls,
      }, //Variale pour booliean //Boolean: 1 = true, 2 = false //Rel = video suggestion relevant
      events: {
        onReady: () => {
          //arrow function
          this.playerReady = true;
          const observer = new IntersectionObserver(this.watch.bind(this), {
            rootMargin: '0px 0px 0px 0px',
          });
          observer.observe(this.element);
        },

        onStateChange: (event) => {
          if (event.data == YT.PlayerState.PLAYING) {
            //  pause tous les vidéos SAUF celui qui joue
            Youtube.pauseAll(this); //le this du push qui est dans le constructor
          } else if (event.data == YT.PlayerState.ENDED) {
            //Quand la video fini
            this.player.seekTo(0);
            this.player.pauseVideo();
          }
        },
      },
    }); //YT and un objet créé par Youtube
  }

  watch(entries) {
    if (this.playerReady && !entries[0].isIntersecting) {
      this.player.pauseVideo();
    }
  }

  static initAll() {
    document.documentElement.classList.add('is-video-ready'); //Classe d'état

    for (let i = 0; i < Youtube.instances.length; i++) {
      const instance = Youtube.instances[i];
      instance.init();
    }
  }

  static pauseAll(currentInstance) {
    for (let i = 0; i < Youtube.instances.length; i++) {
      const instance = Youtube.instances[i];

      if (instance.playerReady && instance !== currentInstance) {
        instance.player.pauseVideo();
      }
    }
  }
}

Youtube.instances = [];
window.onYouTubeIframeAPIReady = Youtube.initAll; //Quand cette méthode est appeler (automatiquement appelé par la librarie de Youtube), en réalité, appelle ma méthode (MAPPING)
