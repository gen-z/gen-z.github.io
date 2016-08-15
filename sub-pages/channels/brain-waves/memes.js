var i = 0;
srcLinks = ["meme1.jpg", "meme2.jpg", "meme3.jpg", "", "", "", "", "", "", "", "", "", "", "", ""];

$("#left").click( function(){
	if(i>0){
		i-=1;
		$("#picshow")
		.fadeOut(1000, function(){
			$("#picshow").attr("src", srcLinks[i]);
	})
		.fadeIn(1000);
	}
	else {
		i=15;
		$("#picshow")
		.fadeOut(1000, function(){
			$("#picshow").attr("src", srcLinks[i]);
	})
		.fadeIn(1000);
	}
});
$("#right").click( function(){
	if(i<15) {
		i+=1;
		$("#picshow")
		.fadeOut(1000, function(){
			$("#picshow").attr("src", srcLinks[i]);
	})
		.fadeIn(1000);
	}
	else {
		i=0;
		$(".homeslideshow")
		.fadeOut(1000, function(){
			$("#picshow").attr("src", srcLinks[i]);
	})
		.fadeIn(1000);
	}
});