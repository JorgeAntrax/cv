// app js here
// 
let $containerSlider = document.querySelector('.containerSlider');
let $label = document.querySelector('.cta-label');
let $cont = 0;
setInterval(() => {
	$cont++;
	if($cont < 5) {
		$containerSlider.style.marginLeft = `-${$cont * 100}%`;
	}else {
		$cont = 0;
		$containerSlider.style.marginLeft = `${$cont * 100}%`;
	}

	switch($cont) {
		case 0:
			$label.textContent = 'Hablemos sobre tu proyecto';
		break;
		case 1:
			$label.textContent = '¿Deseas saber porque?';
		break;
		case 2:
			$label.textContent = '¿Quieres saber como?';
		break;
		case 3:
			$label.textContent = '¿Quieres que tu negocio sea exitoso?';
		break;
		case 4:
			$label.textContent = '¿Corporativo no debe de ser sinonimo de aburrido, te explico cómo?';
		break;
	}
}, 5000);

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
    motiveMotion: function(cont, autoplay = false) {
      if(!this.motive.el) this.motive.el = document.getElementById('ui_motive_slider');
      if(autoplay) cont = (cont < this.motive.limit) ? cont + 1 : 0;
      this.motive.el.scrollLeft = cont * this.motive.el.clientWidth;
      this.motive.current = cont;

      if(autoplay) {
        document.querySelectorAll('.dot[data-key]').forEach($item => {
          if($item.dataset.key != cont) {
            $item.classList.remove('active');
          }else{
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