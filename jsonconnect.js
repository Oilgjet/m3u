// jsonconnect liveevent
$.getJSON('https://dl.dropbox.com/scl/fi/29ez5sz4quhgjmk5sidys/liveevent.json?rlkey=k2zg5zn40qkyto0r2e6je9oce&dl=0', 
function(result) {
  let event = result.event;
  //console.log(event);

  $.each(event, function(i, result) {
    $('#liveevent').append('<div onclick="' + result.url + '()" class="live-event_item"><img src="' + result.poster + '" class="live-event_image" /><h3><span>' + result.tanggal + '</span></h3><h4><span>' + result.jam + '</span></h4></div>');
  });
});

// jsonconnect Popular tv
$.getJSON('https://dl.dropbox.com/scl/fi/d0jg026d18u3yey8gzv0n/acarafavorit.json?rlkey=a5jvkpmpvh0kmt19g8mkq3vrk&dl=0', 
function(result) {
  let acara = result.acara;
  //console.log(event);

  $.each(acara, function(i, result) {
    $('#acara').append('<div onclick="' + result.url + '()" class="acaratv_item"><img src="' + result.poster + '" class="acaratv_image" /><h3><span>' + result.tanggal + '</span></h3><h4><span>' + result.jam + '</span></h4></div>');
  });
});

// jsonconnect sportlist
$.getJSON('https://dl.dropbox.com/scl/fi/wayiqt26q2ca9v8b8rwju/sportlist.json?rlkey=epy5gih21az1b8aascq148qyn&dl=0', 
function(result) {
  let sportlist = result.sportlist;
  //console.log(sportlist);

  $.each(sportlist, function(i, result) {

    $('#sportlist').append('<div class="sportlist_item"><a href="go:' + result.url + '" class="stretched-link"><img src="' + result.poster + '" class="sportlist_image" /></a></div>');

  });
});

// jsonconnect thaitv
$.getJSON('https://dl.dropboxusercontent.com/scl/fi/l5wtjkarusjuf82zstr4f/thaitv.json?rlkey=z66r8wj5ho15ins61jlaiykyr&dl=0', 
function(result) {
  let thaitv = result.thaitv;
  //console.log(thaitv);
  

  let kategory = 'thaitv';
  $.each(thaitv, function(i, result) {
    if (kategory = result.kategori) {
      $('#thaitv').append('<div id="' + result.id + '" class="thaitv_item"><img src="' + result.logo + '" class="tv_image"></div>');
      $('#' + result.id + '').click(function() {
        document.getElementById("objek").innerHTML = '<iframe src="intent://' + result.url + '?|referer=' + result.ref + '&User-Agent=' + result.useragent + '#Intent;scheme=' + result.protokol + ';type=video/*;package=com.genuine.leone;S.browser_fallback_url=market://details?id=com.genuine.leone.ad;S.title=PLAYIDTV;end" height="0" width="0" style="border:none;display:none;" title="SS Sport"></iframe>'
      });
    }

  });
});

//json connect movies
$.getJSON('https://dl.dropboxusercontent.com/scl/fi/aqp9eepqud5cn4ri4l4ig/movies.json?rlkey=yr88n7olnbdegvadhb5tharc5&dl=0', function(result) {
  let movies = result.movies;
  //console.log(movies);

  let conten = '';

  $.each(movies, function(i, result) {
    if (i > 15) {
      return;
    }

    $('#movies').append('<div id="' + result.kode + '" class="movies_item"><img src="' + result.poster + '" class="movies_image"></div>');
    //conten += '<div id="' + result.kode + '" class="item"><img src="' + result.poster + '"></div>'
    $('#' + result.kode + '').click(function() {
      document.getElementById("objek").innerHTML = '<iframe src="' + result.url + '" height="0" width="0" style="border:none;display:none;" title="SS Sport"></iframe>'
    });

  });
});

//json connect series
$.getJSON('https://dl.dropbox.com/scl/fi/gdt1iwc9w3wea1x01goch/series.json?rlkey=3pc2ihckfcvrifojd1r1xz1df&dl=0', function(result) {
  let series = result.series;
  //console.log(series);

  let conten = '';

  $.each(series, function(i, result) {
    if (i > 8) {
      return;
    }

    $('#series').append('<div id="' + result.kode + '" class="movies_item"><img src="' + result.poster + '" class="movies_image"></div>');
    //conten += '<div id="' + result.kode + '" class="item"><img src="' + result.poster + '"></div>'
    $('#' + result.kode + '').click(function() {
      location.href = 'https://blacktvreborn.my.id/movies/page/series/get.html?code=' + result.kode + '';
    });

  });
});

//jsonconnect indonesia movies
let kategori = ' movies';
$.getJSON('https://dl.dropbox.com/scl/fi/aqp9eepqud5cn4ri4l4ig/movies.json?rlkey=yr88n7olnbdegvadhb5tharc5&dl=0', function(result) {
  let movies = result.movies;
  let conten = '';
  let j = 0;
  //console.log(result);
  $.each(movies, function(i, result) {
    if (result.kategori == kategori) {
      if (j > 9) {
        return;
      }
      j++;
      //console.log(result.kode);
      $('#indonesia').append('<div id="' + result.kode + '" class="movies_item"><img src="' + result.poster + '" class="movies_image"></div>');
      //conten += '<div id="' + result.kode + '" class="item"><img src="' + result.poster + '"></div>'
      $('#' + result.kode + '').click(function() {
        document.getElementById("objek").innerHTML = '<iframe src="' + result.url + '" height="0" width="0" style="border:none;display:none;" title="SS Sport"></iframe>'
      });
    }
  });
});
          
