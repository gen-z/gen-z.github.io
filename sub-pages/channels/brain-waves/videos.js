vidLink = ["FzEJSRAzo-Q",'oSYcSLU8GFM',"y1sHKG72UCs", "qg8OJB_NpgA", "Zxt1YZXkcsU", "VEX7KhIA3bU", "qRv7G7WpOoU", ]
var i = 0;
// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: vidLink[i],
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
$("#right").click( function(){
	$("#player")
		.fadeOut(1000, function(){
			if(i<9){
				i+=1;
				$(".video").css("color","white");
				$("#video" + (i+1)).css("color", "black");
				player.loadVideoById(vidLink[i]);
			}
			else {
				i=0;
				$(".video").css("color","white");
				$("#video1").css("color", "black");
				player.loadVideoById(vidLink[i]);
			}
	})
		.fadeIn(1000);
});
$("#left").click( function(){
	$("#player")
		.fadeOut(1000, function(){
			if(i>0){
				i-=1;
				$(".video").css("color","white");
				$("#video"+(i+1)).css("color", "black");
				player.loadVideoById(vidLink[i]);
			}
			else {
				i=9;
				$(".video").css("color","white");
				$("#video10").css("color", "black");
				player.loadVideoById(vidLink[i]);
			}
	})
		.fadeIn(1000);
});

$("#video1").click(function() {
	i=0;
	$(".video").css("color","white");
	$("#video1").css("color", "black");
	$("#player")
		.fadeOut(1000, function(){
			player.loadVideoById(vidLink[0]);
	})
		.fadeIn(1000);
})
$("#video2").click(function() {
	i=1;
	$(".video").css("color","white");
	$("#video2").css("color", "black");
	$("#player")
		.fadeOut(1000, function(){
			player.loadVideoById(vidLink[1]);
	})
		.fadeIn(1000);
})
$("#video3").click(function() {
	i=2;
	$(".video").css("color","white");
	$("#video3").css("color", "black");
	$("#player")
		.fadeOut(1000, function(){
			player.loadVideoById(vidLink[2]);
	})
		.fadeIn(1000);
})
$("#video4").click(function() {
	i=3;
	$(".video").css("color","white");
	$("#video4").css("color", "black");
	$("#player")
		.fadeOut(1000, function(){
			player.loadVideoById(vidLink[3]);
	})
		.fadeIn(1000);
})
$("#video5").click(function() {
	i=4;
	$(".video").css("color","white");
	$("#video5").css("color", "black");
	$("#player")
		.fadeOut(1000, function(){
			player.loadVideoById(vidLink[4]);
	})
		.fadeIn(1000);
})
$("#video6").click(function() {
	i=5;
	$(".video").css("color","white");
	$("#video6").css("color", "black");
	$("#player")
		.fadeOut(1000, function(){
			player.loadVideoById(vidLink[5]);
	})
		.fadeIn(1000);
})
$("#video7").click(function() {
	i=6;
	$(".video").css("color","white");
	$("#video7").css("color", "black");
	$("#player")
		.fadeOut(1000, function(){
			player.loadVideoById(vidLink[6]);
	})
		.fadeIn(1000);
})
$("#video8").click(function() {
	i=7;
	$(".video").css("color","white");
	$("#video8").css("color", "black");
	$("#player")
		.fadeOut(1000, function(){
			player.loadVideoById(vidLink[7]);
	})
		.fadeIn(1000);
})
$("#video9").click(function() {
	i=8;
	$(".video").css("color","white");
	$("#video9").css("color", "black");
	$("#player")
		.fadeOut(1000, function(){
			player.loadVideoById(vidLink[8]);
	})
		.fadeIn(1000);
})
$("#video10").click(function() {
	i=9;
	$(".video").css("color","white");
	$("#video10").css("color", "black");
	$("#player")
		.fadeOut(1000, function(){
			player.loadVideoById(vidLink[9]);
	})
		.fadeIn(1000);
})