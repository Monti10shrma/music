let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtubePlayer', {
    events: {
      onReady: () => console.log('YouTube Player Ready'),
    },
  });
}

function playPause() {
  const state = player.getPlayerState();
  if (state === YT.PlayerState.PLAYING) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
}

function nextSong() {
  console.log("Next song functionality can be implemented here.");
  // Add your playlist functionality or load another YouTube link dynamically
}

function prevSong() {
  console.log("Previous song functionality can be implemented here.");
  // Add your playlist functionality or load another YouTube link dynamically
}
