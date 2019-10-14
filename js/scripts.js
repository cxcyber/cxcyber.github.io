
$(document).ready(function(){
	var headerHeight = $('header').height();
	$('.top-gap').css('height',headerHeight);
	$(window).on('resize load', function() {
		var headerHeight = $('header').height();
		$('.top-gap').css('height',headerHeight);
	});	
 
 
	AOS.init({
		easing: 'ease',
		once: true,
		duration: 1000
	});
		 
		
   });