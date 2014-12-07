// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
  var getData = function(data) {
    var description = data['weather'][0]['description'];
    var icon        = data['weather'][0]['icon'];
    var temperature = celsius(data['main']['temp']) + ' ºC';
    var pressure    = data['main']['pressure'] + ' hPa';
    var humidity    = data['main']['humidity'] + ' %';
    var wind        = data['wind']['speed'] + ' mps';

    $('#description').text(description);
    $('#temperature').text(temperature);
    $('#pressure').text(pressure);
    $('#humidity').text(humidity);
    $('#wind').text(wind);
    $('#icon').attr("src", 'http://openweathermap.org/img/w/' + icon + '.png');
  }

  var loadingImg = function() {
    $('#loading').src = "/assets/loading.gif";
  }

  var stopLoading = function() {
    $('#loading').remove();
  }

  var celsius = function(value) {
    return Math.round(value - 273.15);
  }

  var city = $('#city-name').text();
  var url = "http://api.openweathermap.org/data/2.5/weather?q="+ city +",es&lang=es";
  $.ajax({
    url: url,
    type: 'GET',
    beforeSend: function() {
      loadingImg();
    },
    complete: function() {
      stopLoading();
    },
    success: function(data) {
      stopLoading();
      getData(data);
    }
  });

  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });
