$(".homeslideshow").click( function(){
	$("#picshow").animate({
		opacity: 0
	}, 1500);
	$("#picshow").attr("src", "http://media.mercola.com/assets/images/food-facts/banana-fb.jpg");
	$("#picshow").animate({
		opacity: 0
	}, 1500);
});