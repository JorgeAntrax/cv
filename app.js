// app js here
// 
let $containerSlider = document.querySelector('.containerSlider');
let $label = document.querySelector('.subtitle.cta-label');
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
}, 8000);
