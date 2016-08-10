$("#kevin").click( function(){
	$("#kevin").css("opacity","1.0");
	$("#joey").css("opacity","0.5");
	$("#founderbio")
		.fadeOut(1000, function(){
			$("#founderpic").attr("src", "http://coolwildlife.com/wp-content/uploads/galleries/post-1593/Brown%20Bear%20Picture%20001.jpg");
			$("#foundertext").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie tellus vel facilisis hendrerit. Curabitur fermentum nec ligula nec venenatis. Etiam tempor ipsum id lacus interdum, et tristique eros vulputate. Donec eleifend eros arcu, nec tempus lectus faucibus vitae. Nam purus nisi, dignissim vitae dui et, fermentum tristique diam. Nullam scelerisque elit vel tellus auctor, eu ultrices nibh aliquam. In justo nisl, dictum ac pretium at, placerat tincidunt ex. Ut vestibulum feugiat lorem id tristique. Phasellus eu nunc mauris.Vivamus lorem augue, facilisis sed bibendum sed, suscipit in nulla. Duis tellus ante, vestibulum sed nibh sit amet, sagittis posuere ex. Vivamus varius dapibus dolor et ornare. Donec vitae tempus nulla. Cras volutpat consequat metus, et pharetra metus facilisis vitae. Aenean pretium eros id dignissim aliquet. Integer vitae commodo nisi. Donec dolor nisl, congue eget vehicula non, pulvinar vitae ligula. Maecenas facilisis mattis nunc, ut posuere lorem pharetra at. Proin tellus tortor, vehicula vitae velit ut, efficitur convallis dolor. Sed a nibh orci. Vestibulum a est augue.");
			$("#foundername").html("Kevin Calderon");
		})
		.fadeIn(1000);
});

$("#joey").click( function(){
	$("#joey").css("opacity","1.0");
	$("#kevin").css("opacity","0.5");
	$("#founderbio")
		.fadeOut(1000, function(){
			$("#founderpic").attr("src", "http://i.imgur.com/ppAEzBx.jpg");
			$("#foundertext").html("Maecenas pellentesque ultricies faucibus. Nullam et mattis augue, posuere faucibus velit. Vestibulum ut molestie turpis, vel congue lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec feugiat ut sem nec vehicula. Quisque ut eleifend felis, at vulputate erat. Vestibulum auctor orci nec convallis suscipit. In sed ipsum nunc. Suspendisse vitae erat dui. Nullam gravida ut felis cursus dignissim. Nam vel nibh vel sapien feugiat eleifend. Etiam odio urna, congue in bibendum ut, imperdiet sit amet velit. Nam vitae tempor eros. Donec tristique justo tempus ante imperdiet pulvinar. Praesent maximus rhoncus tortor, at elementum tellus mollis ut. Proin elementum feugiat eros, ac feugiat quam bibendum mollis. Duis volutpat mi tortor, ut egestas elit elementum quis. Vestibulum eu molestie ipsum. Curabitur id fringilla lorem. Morbi efficitur condimentum pulvinar. Cras et porta lectus. Nam sed augue eleifend, sollicitudin mauris fringilla, efficitur libero.");
			$("#foundername").html("Joey Cabrera");
		})
		.fadeIn(1000);
});