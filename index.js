srcLinks = ["https://secure.static.tumblr.com/dc40823055c62742b840a1f36fe3a059/rse8v7p/Ckfnrb4gf/tumblr_static__640_v2.gif","http://25.media.tumblr.com/99cbcdc1b112fa1fad105fd5bcec77eb/tumblr_mz3r7taEcg1rqess5o1_500.gif", "https://media4.giphy.com/media/dh6120qvBRyda/200_s.gif"];
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