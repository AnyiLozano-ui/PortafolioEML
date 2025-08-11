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
		if (page === 3) {
			handleAddClickButton('.ola1', () => {
				dataCounter = 0
				$('#sonido-boton')[0].play()
				modalOpenend = 'modal-1'
				$('.modal img').attr('src', dataImages[modalOpenend][0].image)
				$('.modal').fadeIn()
				$('#magazine').turn('disable', true)
			})

			handleAddClickButton('.ola2', () => {
				dataCounter = 0
				$('#sonido-boton')[0].play()
				modalOpenend = 'modal-2'
				$('.modal img').attr('src', dataImages[modalOpenend][0].image)
				$('.modal').fadeIn()
				$('#magazine').turn('disable', true)
			})

			handleAddClickButton('.ola3', () => {
				dataCounter = 0
				$('#sonido-boton')[0].play()
				modalOpenend = 'modal-3'
				$('.modal img').attr('src', dataImages[modalOpenend][0].image)
				$('.modal').fadeIn()
				$('#magazine').turn('disable', true)
			})

			handleAddClickButton('.ola4', () => {
				dataCounter = 0
				$('#sonido-boton')[0].play()
				modalOpenend = 'modal-4'
				$('.modal img').attr('src', dataImages[modalOpenend][0].image)
				$('.modal').fadeIn()
				$('#magazine').turn('disable', true)
			})

			handleAddClickButton('.ola5', () => {
				dataCounter = 0
				$('#sonido-boton')[0].play()
				modalOpenend = 'modal-5'
				$('.modal img').attr('src', dataImages[modalOpenend][0].image)
				$('.modal').fadeIn()
				$('#magazine').turn('disable', true)
			})

			handleAddClickButton('.ola6', () => {
				dataCounter = 0
				$('#sonido-boton')[0].play()
				modalOpenend = 'modal-6'
				$('.modal img').attr('src', dataImages[modalOpenend][0].image)
				$('.modal').fadeIn()
				$('#magazine').turn('disable', true)
			})

			handleAddClickButton('.ola7', () => {
				dataCounter = 0
				$('#sonido-boton')[0].play()
				modalOpenend = 'modal-7'
				$('.modal img').attr('src', dataImages[modalOpenend][0].image)
				$('.modal').fadeIn()
				$('#magazine').turn('disable', true)
			})
		}
	})

	$('#magazine').on('turning', () => {
		$('#sonido-boton')[0].play()
	})

	$('.home').on('click', () => {
		$('#magazine').turn('page', 3)
	})

	$('.home1').on('click', () => {
		$('#magazine').turn('page', 3)
	})

	$('.home2').on('click', () => {
		$('#magazine').turn('page', 3)
	})

	$('.modal-home3').on('click', () => {
		$('.modal').fadeOut()
		$('#magazine').turn('disable', false)
	})

	$('.mensaje').on('click', () => {
		$('#magazine').turn('page', 4)
	})

	$('.modal-adelante').on('click', () => {
		if (dataCounter < dataImages[modalOpenend].length - 1) {
			$('.modal img').attr(
				'src',
				dataImages[modalOpenend][dataCounter + 1].image
			)
			$('#sonido-boton')[0].play()
			dataCounter++
		} else {
			dataCounter = 0
			$('.modal').fadeOut()
			$('#magazine').turn('disable', false)
		}
	})

	$('.modal-atras').on('click', () => {
		if (dataCounter - 1 > -1) {
			$('.modal img').attr(
				'src',
				dataImages[modalOpenend][dataCounter - 1].image
			)
			$('#sonido-boton')[0].play()
			dataCounter--
		} else {
			dataCounter = 0
			$('.modal').fadeOut()
			$('#magazine').turn('disable', false)
		}
	})
})
