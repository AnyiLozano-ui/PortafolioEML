const dataImages = {
	'modal-1': [
		{ image: './images/image3.jpg' },
		{ image: './images/image4.jpg' },
		{ image: './images/image5.jpg' },
		{ image: './images/image6.jpg' },
	],
	'modal-2': [
		{ image: './images/image7.jpg' },
		{ image: './images/image8.jpg' },
		{ image: './images/imagen9.jpg' },
		{ image: './images/imagen13.jpg' },
	],
	'modal-3': [
		{ image: './images/imagen10.jpg' },
		{ image: './images/imagen11.jpg' },
	],
	'modal-4': [{ image: './images/imagen12.jpg' }],
	'modal-5': [
		{ image: './images/imagen14.jpg' },
		{ image: './images/imagen15.jpg' },
		{ image: './images/imagen16.jpg' },
		{ image: './images/imagen17.jpg' },
		{ image: './images/imagen18.jpg' },
		{ image: './images/imagen22.jpg' },
	],
	'modal-6': [{ image: './images/imagen19.jpg' }],
	'modal-7': [{ image: './images/imagen20.jpg' }],
}

const handleAddClickButton = (element, callback) =>
	$(element).on('click', callback)

const handleInitTurnjs = () => {
	let data = null
	$('#magazine').turn({
		gradients: true,
		autoCenter: true,
		display: 'single',
		duration: 1500,
		when: {
			start: (event, pageObject, corner) => {
				// ❌ Si la modal está activa, bloquea
				if ($('.modal:visible').length > 0) {
					console.log('🔒 Bloqueado: modal activa')
					event.preventDefault()
					return false
				}

				// ❌ Si el clic fue sobre tu div personalizado, bloquea
				if ($(event.target).closest('.esquina-custom').length > 0) {
					console.log(
						'🔒 Bloqueado: clic en div esquina personalizada'
					)
					event.preventDefault()
					return false
				}

				// ✅ De lo contrario, permite el giro
			},
		},
	})

	$('#magazine').on('turning', function (event, page, view) {
		if ($('.modal:visible').length > 0) {
			console.log('🔒 Bloqueado: modal activa')
			event.preventDefault() // ⛔ Evita el cambio de página
			return false
		}
	})

	$(window).on('resize', () => {
		const flipbook = $('#magazine')
		flipbook.turn('destroy')
	})
}

const handleEvents = () => {
	for (let i = 1; i <= 7; i++) {
		$(`.ola${i}`).on({
			mouseenter: function () {
				// Detener la animación y cambiar a imagen amarilla
				$(this)
					.find('img')
					.css('animation-play-state', 'paused')
					.attr('src', `./images/amari${i}.png`)
			},
			mouseleave: function () {
				// Reanudar la animación y volver a imagen azul
				$(this)
					.find('img')
					.css('animation-play-state', 'running')
					.attr('src', `./images/bola${i}.png`)
			},
		})
	}
}

$(document).ready(() => {

	$(window).on('load', function () {
		setTimeout(function () {
			$('#loader').css('opacity', 0)
			$('#magazine').css('opacity', 1)

			setTimeout(function () {
				$('#loader').css('display', 'none')
			}, 1000)
		}, 2000)
	})

	handleInitTurnjs()
	handleEvents()
	// Pagina 1
	handleAddClickButton('.boton', () => {
		$('#sonido-boton')[0].play()
		$('#magazine').turn('page', 2)
	})
	let dataCounter = 0
	let modalOpenend = ''

	$('#magazine').bind('turned', (e, page) => {
		if (page === 6) {
			const lines = [...document.querySelectorAll('.type .line')]
			const speed = 55 // ms por carácter (coincide con --speed)
			let accDelay = 0

			lines.forEach((el) => {
				const chars = el.textContent.replace(/\s+/g, ' ').trim().length
				el.style.setProperty('--chars', chars)
				el.style.setProperty('--delay', accDelay + 'ms')

				const duration = chars * speed
				accDelay += duration + 350 // pausa entre líneas

				// Activa animación sólo después de setear variables
				requestAnimationFrame(() => {
					if (!el.classList.contains('run')) {
						el.classList.add('run')
					}
				})
			})

			$('.home5').on('click', () => {
				$('#magazine').turn('page', 1)
			})
		
			$('.atras5').on('click', () => {
				$('#magazine').turn('page', 5)
			})
		}
	})

	$('#magazine').on('turning', () => {
		$('#sonido-boton')[0].play()
	})

	$('.home1').on('click', () => {
		$('#magazine').turn('page', 1)
	})

	$('.atras1').on('click', () => {
		$('#magazine').turn('previous')
	})

	$('.adelante1').on('click', () => {
		$('#magazine').turn('next')
	})

	$('.home2').on('click', () => {
		$('#magazine').turn('page', 1)
	})

	$('.atras2').on('click', () => {
		$('#magazine').turn('previous')
	})

	$('.adelante2').on('click', () => {
		$('#magazine').turn('next')
	})

	$('.home3').on('click', () => {
		$('#magazine').turn('page', 1)
	})

	$('.atras3').on('click', () => {
		$('#magazine').turn('previous')
	})

	$('.adelante3').on('click', () => {
		$('#magazine').turn('next')
	})

	$('.home4').on('click', () => {
		$('#magazine').turn('page', 1)
	})

	$('.atras4').on('click', () => {
		$('#magazine').turn('previous')
	})

	$('.adelante4').on('click', () => {
		$('#magazine').turn('next')
	})

	$('.raya1').on('click', () => {
		$('#magazine').turn('page', 5)
	})
	$('.raya2').on('click', () => {
		$('#magazine').turn('page', 5)
	})
	$('.raya3').on('click', () => {
		$('#magazine').turn('page', 4)
	})
	$('.raya4').on('click', () => {
		$('#magazine').turn('page', 4)
	})
	$('.raya5').on('click', () => {
		$('#magazine').turn('page', 3)
	})
	$('.raya').on('click', () => {
		$('#magazine').turn('page', 3)
	})

	

	//loader
})
