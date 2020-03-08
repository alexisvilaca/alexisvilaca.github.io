
$(document).ready(function(){
	$('.hamburgerMenu').click(function(){
		$(this).toggleClass('open');
	});
});


$('.hamburgerMenu').click( function() {
    $(".hamburgerNavigation").toggleClass("show");
} );



$(document).ready(function(){
	$('.hero-hamburgerMenu').click(function(){
		$(this).toggleClass('hero-open');
	});
});


$('.hero-hamburgerMenu').click( function() {
    $(".hero-hamburgerNavigation").toggleClass("hero-show");
} );
