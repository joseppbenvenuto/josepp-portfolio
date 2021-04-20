$('.loader').delay(1000).fadeOut('slow');
$('#overlayer').delay(1000).fadeOut('slow');

jQuery(function () {
	$('.fancybox').fancybox({});
});

document.addEventListener('DOMContentLoaded', function () {
	var typed = new Typed('.type', {
		strings: ['Data Analyst.', 'Retail Investor.', 'Problem Solver.'],
		stringsElement: null,
		// typing speed
		typeSpeed: 60,
		// time before typing starts
		startDelay: 600,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: '|',
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
	});
});

const hamburgerButton = document.querySelector('.hamburger-button');
const overlay = document.querySelector('.overlay');

hamburgerButton.addEventListener('click', (e) => {
	e.preventDefault();
	hamburgerButton.classList.toggle('active');
	overlay.classList.toggle('visible');
});
