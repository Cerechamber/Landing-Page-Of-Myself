$(function() {

	function DisableScroll() {
		$('.page').addClass('fixed');
	}

	function EnableScroll() {
		$('.page').removeClass('fixed');
	}



	$('.button_top-menu, .button_footer-menu, .button_red-footer, .phone').click(function(){
		$('.popup-call-top').show();
		$('.popup-container').fadeIn(1000, DisableScroll);
		$('.popup-back').hide();
		$('.popup-call-top').animate({
			'width': '200px',
			'height': '250px'}, 400);
	});

	$('#project, #cost, #know').click(function(){
		$('.popup-back').show();
		$('.popup-container').fadeIn(1000, DisableScroll);
		$('.popup-call-top').hide();
		$('.popup-back').animate({
			'width': '200px',
			'height': '320px'}, 400);
	});

	$('.popup-container').click(function(event){
		if(event.target == this) {
	    $('.popup-container').fadeOut(400, EnableScroll);
	    $('.popup-call-top, .popup-back').animate({
	    	'width': '0',
	    	'height': '0'}, 400);
		}
	});


	$('.summon-menu').click(function(){
		$('.falling-menu').toggle();
	});
	

	$('.falling-menu-link').click(function(){
		$('.falling-menu').hide();
	});

	$('.falling-menu').mouseleave(function(){
		$(this).hide();

	});


	
/*$('.work-pictures_margin').swipe({
   swipe:function(event, direction, distance, duration, fingerCount, fingerData){
   	 if (direction == 'left') {
   	 	var carusel = $(this).parents('.carousel');
   	 	left_carusel(carusel); 
    }
}

});

$('.work-pictures_margin').swipe({
   swipe:function(event, direction, distance, duration, fingerCount, fingerData){
   	 if (direction == 'right') {
   	 	var carusel = $(this).parents('.carousel');
   	 	right_carusel(carusel);   
    }
}

});
*/


$(document).ready(function(){
	$(".carousel").swipe( {
		swipeLeft: function() {
			var carusel = $(this);
			right_carusel(carusel);
		},
		swipeRight: function() {
			var carusel = $(this);
			left_carusel(carusel);
		}
	});
});


	//Обработка клика на стрелку вправо
$(document).on('click', ".slider_right",function(){ 
	var carusel = $(this).parents('.carousel');
	right_carusel(carusel);
	$(carusel).find(".carousel-items .works__second-figure").removeClass("works__second-figure").next().addClass("works__second-figure");
	return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".slider_left",function(){ 
	var carusel = $(this).parents('.carousel');
	left_carusel(carusel);
	$(carusel).find(".carousel-items .works__second-figure").removeClass("works__second-figure").prev().addClass("works__second-figure");
	return false;
});

	//Обработка клика на кружок вправо
$(document).on('click', ".circle-container__circle3",function(){ 
	var carusel = $(this).parent().prev();
	right_carusel(carusel);
	$(this).removeClass("cirle-color-grey").addClass("cirle-color-red").prev().prev().addClass("cirle-color-grey");
	return false;
});
//Обработка клика на кружок влево
$(document).on('click',".circle-container__circle1",function(){ 
	var carusel = $(this).parent().prev();
	left_carusel(carusel);
	$(this).removeClass("cirle-color-grey").addClass("cirle-color-red").next().next().addClass("cirle-color-grey");
	return false;
});


function left_carusel(carusel){
   var block_width = $(carusel).find('.work-pictures_margin').outerWidth();
   $(carusel).find(".carousel-items .work-pictures_margin").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
   $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel-items .work-pictures_margin").eq(-1).remove();    
   $(carusel).find(".carousel-items").animate({left: "0px"}, 150);
   
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.work-pictures_margin').outerWidth();
   $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 150, function(){
	  $(carusel).find(".carousel-items .work-pictures_margin").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .work-pictures_margin").eq(0).remove(); 
      $(carusel).find(".carousel-items").css({"left":"0px"});
   }); 

}

$(function() {
//Раскомментируйте строку ниже, чтобы включить автоматическую прокрутку карусели
//	auto_right('.carousel:first');
})

// Автоматическая прокрутка
function auto_right(carusel){
	setInterval(function(){
		if (!$(carusel).is('.hover'))
			right_carusel(carusel);
	}, 1000)
}
// Навели курсор на карусель
$(document).on('mouseenter', '.carousel', function(){$(this).addClass('hover')})
//Убрали курсор с карусели
$(document).on('mouseleave', '.carousel', function(){$(this).removeClass('hover')})




});
