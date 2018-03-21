class Helper {
  playPauseAndUpdate(song = player.currentlyPlaying)
  {
    player.playPause(song);
    //const newDuration = player.soundObject.getDuration();
    //alert ('duration is = '+song.duration);
    $('#time-control .total-time').text(song.duration);
  } //end of playPauseAndUpdate....
} //end of Helper class...

const helper = new Helper();
