var i = 0;
srcLinks = ["http://media0.giphy.com/media/lKXEBR8m1jWso/giphy.gif","https://s3.amazonaws.com/wp-ag/wp-content/uploads/sites/72/2015/04/ClintonShruggiegif.gif", "http://img.ffffound.com/static-data/assets/6/8e3f5db6667474cf5430c5fc392dd3f3f1105abb_m.gif", "http://67.media.tumblr.com/ca1d7c1d12576587b2f18e4c32280c54/tumblr_mnw4cjrJuV1s3igp0o1_500.gif"];

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