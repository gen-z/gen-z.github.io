srcLinks = ["http://fitnessandhealthadvisor.com/wp-content/uploads/2013/05/bananas1.jpeg","http://media.mercola.com/assets/images/food-facts/banana-fb.jpg", "https://upload.wikimedia.org/wikipedia/commons/4/44/Bananas_white_background_DS.jpg", "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bananas.jpg"];
$("#circle1").click( function(){
	$("#picshow")
		.fadeOut(1000, function(){
			$("#picshow").attr("src", srcLinks[0]);
	})
		.fadeIn(1000);
});
$("#circle2").click( function(){
	$("#picshow")
		.fadeOut(1000, function(){
			$("#picshow").attr("src", srcLinks[1]);
	})
		.fadeIn(1000);
});
$("#circle3").click( function(){
	$("#picshow")
		.fadeOut(1000, function(){
			$("#picshow").attr("src", srcLinks[2]);
	})
		.fadeIn(1000);
});
$("#circle4").click( function(){
	$("#picshow")
		.fadeOut(1000, function(){
			$("#picshow").attr("src", srcLinks[3]);
	})
		.fadeIn(1000);
});