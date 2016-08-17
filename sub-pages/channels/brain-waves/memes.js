var i = 0;
srcLinks = ["https://s-media-cache-ak0.pinimg.com/236x/79/d3/6c/79d36c87c8dcb704ccc07921d8987ee1.jpg", "meme2.jpg", "meme3.jpg", "meme1.jpg", "", "", "", "", "", "", "", "", "", "", ""];

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