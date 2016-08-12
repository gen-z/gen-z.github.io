var i = 0;
srcLinks = ["http://media0.giphy.com/media/lKXEBR8m1jWso/giphy.gif","https://s3.amazonaws.com/wp-ag/wp-content/uploads/sites/72/2015/04/ClintonShruggiegif.gif", "http://img.ffffound.com/static-data/assets/6/8e3f5db6667474cf5430c5fc392dd3f3f1105abb_m.gif", "http://67.media.tumblr.com/ca1d7c1d12576587b2f18e4c32280c54/tumblr_mnw4cjrJuV1s3igp0o1_500.gif"];
srcText=["BrainWaves/#Editorials", "Politics/#Hillary","Art/#Modern", "Sports/#Skateboarding"];
channelLink = ["sub-pages/channels/brain-waves/editorials.html","sub-pages/channels/uspol/hillary.html","sub-pages/channels/art/modern.html","sub-pages/channels/sports/skateboard.html"];

$("#circle1").click( function(){
	i=0;
	$(".homeslideshow")
		.fadeOut(1000, function(){
			$("#picshow").attr("src", srcLinks[i]);
			$("#slideshowName").html(srcText[i]);
			$(".channelLink").attr("href", channelLink[i]);
	})
		.fadeIn(1000);
});
$("#circle2").click( function(){
	i = 1;
	$(".homeslideshow")
		.fadeOut(1000, function(){
			$("#picshow").attr("src", srcLinks[i]);
			$("#slideshowName").html(srcText[i]);
			$(".channelLink").attr("href", channelLink[i]);
	})
		.fadeIn(1000);
});
$("#circle3").click( function(){
	i=2;
	$(".homeslideshow")
		.fadeOut(1000, function(){
			$("#picshow").attr("src", srcLinks[i]);
			$("#slideshowName").html(srcText[i]);
			$(".channelLink").attr("href", channelLink[i]);
	})
		.fadeIn(1000);
});
$("#circle4").click( function(){
	i=3;
	$(".homeslideshow")
		.fadeOut(1000, function(){
			$("#picshow").attr("src", srcLinks[i]);
			$("#slideshowName").html(srcText[i]);
			$(".channelLink").attr("href", channelLink[i]);
	})
		.fadeIn(1000);
});

	window.setInterval(function() {
		   if(i<3){
				i += 1;
			   	$(".homeslideshow")
					.fadeOut(1000, function(){
			$("#picshow").attr("src", srcLinks[i]);
			$("#slideshowName").html(srcText[i]);
			$(".channelLink").attr("href", channelLink[i]);
	})
		.fadeIn(1000);
			}
			else {
				i=0;
				$(".homeslideshow")
		.fadeOut(1000, function(){
			$("#picshow").attr("src", srcLinks[i]);
			$("#slideshowName").html(srcText[i]);
			$(".channelLink").attr("href", channelLink[i]);
	})
		.fadeIn(1000);
			}
		   }, 10000);