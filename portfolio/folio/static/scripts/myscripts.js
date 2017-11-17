$(document).ready(function () {
	console.log("test");
});


function photoScroll(){
	$('html, body').animate({scrollTop: ($('#photos').offset().top)},800);
};

function contactsScroll(){
	$('html, body').animate({scrollTop: ($('#contact').offset().top)},800);
};

function aboutScroll(){
	$('html, body').animate({scrollTop: ($('#about').offset().top)},800);
};