$(".homeslideshow").click( function(){
	$("#picshow").animate({
		opacity: 0
	}, 1500);
	console.log("okay"),
	$("#picshow").delay(3000);
	$("#picshow").attr("src", "http://media.mercola.com/assets/images/food-facts/banana-fb.jpg");
	
	$("#picshow").animate({
		opacity: 100
	}, 1500);
});