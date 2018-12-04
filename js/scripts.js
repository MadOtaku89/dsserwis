$(document).ready(function() {
	$("#carousel").owlCarousel({
		autoPlay: 50000,
		items:2,
  		itemsDesktop:false,
  		itemsDesktopSmall:false,
  		itemsTablet:false,
  		itemsTabletSmall:false,
  		itemsMobile:false,
		itemsCustom:[
	        [0, 1],
	        [1200, 2],
      	],
		navigation:false,
		pagination:false
	});
	$("#slider").owlCarousel({
		autoPlay: false,
		itemsCustom:[
	        [0, 1],
	        [744, 0],
      	],
		navigation:false,
		pagination:false
	});

	function parallax(){
    	var scrolled = $(window).scrollTop();
	  	$('.parallax-back1').css('top', -(scrolled * 0.2) + 'px');
	  	$('.parallax-front1').css('top', -(scrolled * 0.1) + 'px');
	  	$('.parallax-back2').css('top', -(scrolled * 0.25) + 'px');
  	}
  	$(window).scroll(function(e){
    	parallax();
	});
	$(".logo_brand").click(function(){
		$(".logo_brand img").addClass("active")
	});

	

	$(".piptik").click(function(){
		if ($(".piptik").hasClass("active") == false){
			$(".product").show();
			$(".fadetoblack").fadeIn(700);
			$(".piptik").addClass("active");
			$(".product, .piptik").animate({
				left: "+=520"
			},1000, function() {
			});
		}
		else{
			$(".fadetoblack").fadeOut(700);
		    $(".piptik").removeClass("active");
			$(".product, .piptik").animate({
				left: "-=520"
			},1000, function() {
			    $(".product").hide();
			});
		}
	});

});