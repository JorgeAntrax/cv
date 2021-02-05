const init = () => {
  
const $app = new Vue({
  el: '#root',
  name: 'Landing',
  data: {
    motive: {
      el: null,
      timer: 5000,
      current: 0,
      limit: 2,
      slides: [
        {
          text: 'Debes subir un escalon a la vez, asi es como se logra hasta el obstáculo más dificil',
          author: 'Leo Quintana'
        },
        {
          text: 'Sólo podremos tomar decisiones acertadas si sabemos cómo analizar e interpretar los datos',
          author: 'Avinash Kaushik'
        },
        {
          text: 'Cualquier tecnología no comprendida por el hombre es indistinguible de la magia',
          author: 'Arthur C. Clark'
        }
      ]
    }
  },
  methods: {
    toogleMotive: function (e) {
      this.motiveMotion((e.target.dataset.key * 1));
      e.target.siblings().forEach($item => $item.removeClass('active'));
      e.target.classList.add('active');
    },
    motiveMotion: function (cont, autoplay = false) {
      if (!this.motive.el) this.motive.el = document.getElementById('ui_motive_slider');
      if (autoplay) cont = (cont < this.motive.limit) ? cont + 1 : 0;
      this.motive.el.scrollLeft = cont * this.motive.el.clientWidth;
      this.motive.current = cont;

      if (autoplay) {
        document.querySelectorAll('.dot[data-key]').forEach($item => {
          if ($item.dataset.key != cont) {
            $item.classList.remove('active');
          } else {
            $item.classList.add('active');
          }
        });
      }
    }
  }
});

const motion = () => {
  $app.motiveMotion($app.motive.current, true);
  setTimeout(motion, $app.motive.timer);
};
setTimeout(motion, $app.motive.timer);
setTimeout(() => document.querySelector('html').classList.add('loaded'), 1500);
}

var containerSlider, label;

containerSlider = document.querySelector('.containerSlider');
label = document.querySelector('.cta-label');
var $cont = 0;
function initSlide() {
  $cont = $cont < 5 ? $cont + 1 : 0;
  containerSlider.scrollLeft = $cont * containerSlider.clientWidth;
  setInterval(() => initSlide, 5000);
}
setInterval(() => initSlide, 5000);
