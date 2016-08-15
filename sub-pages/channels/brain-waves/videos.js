vidLink = ["FzEJSRAzo-Q",'oSYcSLU8GFM',"y1sHKG72UCs"]
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
			if(i<2){
				i+=1;
				player.loadVideoById(vidLink[i]);
			}
			else {
				i=0;
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
				player.loadVideoById(vidLink[i]);
			}
			else {
				i=3;
				player.loadVideoById(vidLink[i]);
			}
	})
		.fadeIn(1000);
});