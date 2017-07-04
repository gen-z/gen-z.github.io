var i = 0;
var backgroundImg = ["http://www.mejoratuanimo.com/img_tapas_saludable/241a.jpg", "https://cdn.authoritynutrition.com/wp-content/uploads/2016/08/hand-holding-apple-facebook.jpg", "https://livelovefruit.com/wp-content/uploads/2013/07/health-benefits-of-watermelon.jpg", "http://static4.businessinsider.com/image/52bc95536bb3f76818ab355b-1190-625/the-supreme-court-says-the-tomato-is-a-vegetable--not-a-fruit.jpg"];
var srcText = ["<a id='carouselLinks' href='assets/section/channels/brain-waves/meme1.jpg'><p></br></br></br>Navin Namoon and His Quest For the Blind</br><small>Although it may seem impossible, Coding is a thing for the blind.</br> Navin is trying to make that easier.</br>#SpotlightZ</small></p></a>", "<a id='carouselLinks' href='assets/section/channels/brain-waves/meme1.jpg'><p></br></br></br>John Namoon and His Quest For the Blind</br><small>Although it may seem impossible, Coding is a thing for the blind.</br> Navin is trying to make that easier.</br>#SpotlightZ</small></p></a>", "<a id='carouselLinks' href='assets/section/channels/brain-waves/meme1.jpg'><p></br></br></br>David Namoon and His Quest For the Blind</br><small>Although it may seem impossible, Coding is a thing for the blind.</br> Navin is trying to make that easier.</br>#SpotlightZ</small></p></a>", "<a id='carouselLinks' href='assets/section/channels/brain-waves/meme1.jpg'><p></br></br></br>Analise Namoon and His Quest For the Blind</br><small>Although it may seem impossible, Coding is a thing for the blind.</br> Navin is trying to make that easier.</br>#SpotlightZ</small></p><a>"];
var channelLink = ["http://www.google.com", "sub-pages/channels/uspol/hillary.html", "sub-pages/channels/fashion/streetware.html", "sub-pages/channels/sports/skateboard.html"];

//$("#circle1").click( function(){
//	i=0;
//	$(".homeslideshow")
//		.fadeOut(1000, function(){
//			$("#picshow").attr("src", srcLinks[i]);
//			$("#slideshowName").html(srcText[i]);
//			$(".channelLink").attr("href", channelLink[i]);
//	})
//		.fadeIn(1000);
//});
//$("#circle2").click( function(){
//	i = 1;
//	$(".homeslideshow")
//		.fadeOut(1000, function(){
//			$("#picshow").attr("src", srcLinks[i]);
//			$("#slideshowName").html(srcText[i]);
//			$(".channelLink").attr("href", channelLink[i]);
//	})
//		.fadeIn(1000);
//});
//$("#circle3").click( function(){
//	i=2;
//	$(".homeslideshow")
//		.fadeOut(1000, function(){
//			$("#picshow").attr("src", srcLinks[i]);
//			$("#slideshowName").html(srcText[i]);
//			$(".channelLink").attr("href", channelLink[i]);
//	})
//		.fadeIn(1000);
//});
//$("#circle4").click( function(){
//	i=3;
//	$(".homeslideshow")
//		.fadeOut(1000, function(){
//			$("#picshow").attr("src", srcLinks[i]);
//			$("#slideshowName").html(srcText[i]);
//			$(".channelLink").attr("href", channelLink[i]);
//	})
//		.fadeIn(1000);
//});

window.setInterval(function () {
	if(i<3){
		i += 1;
		$("#carousel").fadeOut(100, function (){
			$(this).css("background-image", "url("+backgroundImg[i]+")").html(srcText[i]);
			
			$("#carouselLinks").attr("href", channelLink[i]);
		})
		.fadeIn(1000);
	}
	else {
		i=0;
		$("#carousel").fadeOut(100, function (){
			$(this).css("background-image", "url("+backgroundImg[i]+")").css("background-size","cover").html(srcText[i]);
			$("#carouselLinks").attr("href", channelLink[i]);
		})
		.fadeIn(1000);
	}
}, 10000);

