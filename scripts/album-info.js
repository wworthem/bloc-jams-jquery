//updated 3/10/2018
{
  $('#album-title').text(album.title);
  $('.artist').text(album.artist);
  $('.album-details').text(album.releaseInfo);
  $('img#album-cover-art').attr('src', album.albumArtUrl);
}
