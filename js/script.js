var flipbookEL = document.getElementById('flipbook');


$(document).ready(() => {
	$(flipbookEL).turn({
		autoCenter: true,
		imageResolution: 2,
		size: false,
		elevation: 0,
		gradients: false
	});

// 	$(flipbookEL).turn("next"); // Flip to the next page
// 	$(flipbookEL).turn("previous"); // Flip to the previous page



})


