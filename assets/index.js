var i = 0;
var backgroundImg = ["assets/section/spotlightz/assets/article1b.png", "assets/section/news/assets/article3a.png", "assets/section/brainwaves/assets/article1a.png", "assets/section/politics/assets/article2.jpg"];
var srcText = ["<a id='carouselLinks' href='assets/section/spotlightz/article1.html'><p></br></br></br>Mateusz Mach: The Story of One Amazing Polish Teen</br><small>Enter Mateusz Mach the Polish teen responsible for creating the app 'Five.'<br>Magda Wojtara<br>#SpotlightZ</small></p></a>", "<a id='carouselLinks' href='assets/section/news/article3.html'><p></br></br></br>Little Rock Shooting</br><small>A nightclub in Little Rock, Arkansas, became the target of a violent exchange of gunfire at around 2:30AM, Saturday morning<br>Leanne Pichay<br>#News</small></p></a>", "<a id='carouselLinks' href='assets/section/brainwaves/article1.html'><p></br></br></br>Ripped Pants, Trampolines, and Questbridge</br><small>I will never forget the night after my Junior Prom. No, not because I ripped the pants of my rental tuxedo while trying (and succeeding, if I may add) to land a front flip on my friend’s trampoline at 12’o clock in the night.<br>Jude Batoon<br>#Brainwaves</small></p></a>", "<a id='carouselLinks' href='assets/section/politics/article2.html'><p></br></br></br>Why Assassination Jokes Aren't Funny</br><small>If you’ve been watching the news lately, you’ve almost surely seen headlines concerning the latest person (ex. Kathy Griffin, Johnny Depp) who has made a joke about assassinating the current POTUS, Donald Trump.<br>Kelsey Zeser<br>#Politics</small></p></a>"];
var channelLink = ["assets/section/spotlightz/article1.html", "assets/section/news/article3.html", "assets/section/brainwaves/article1.html", "assets/section/politics/article2.html"];

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

