// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$( document ).ready(function() {
  var icons = {
    //day
    '01d': 'flaticon-sun79',
    '02d': 'flaticon-cloudy19',
    '03d': 'flaticon-simple33',
    '04d': 'flaticon-clouds11',
    '09d': 'flaticon-rain4',
    '10d': 'flaticon-sun8',
    '11d': 'flaticon-electrical16',
    '13d': 'flaticon-snowing9',
    '50d': 'flaticon-sea1',

    //night
    '01n': 'flaticon-crescent32',
    '02n': 'flaticon-clouds',
    '03n': 'flaticon-simple33',
    '04n': 'flaticon-clouds11',
    '09n': 'flaticon-rain4',
    '10n': 'flaticon-sun8',
    '11n': 'flaticon-electrical16',
    '13n': 'flaticon-snowing9',
    '50n': 'flaticon-sea1'
  }

  var getData = function(data) {
    var description = data['weather'][0]['description'];
    var icon        = icons[data['weather'][0]['icon']];
    var temperature = celsius(data['main']['temp']) + ' ºC';
    var pressure    = data['main']['pressure'] + ' hPa';
    var humidity    = data['main']['humidity'] + ' %';
    var wind        = data['wind']['speed'] + ' mps';

    $('#description').text(description);
    $('#temperature').text(temperature);
    $('#pressure').text(pressure);
    $('#humidity').text(humidity);
    $('#wind').text(wind);
    $('#icon').addClass('icon ' + icon);
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

  $("#new-terminal").click(function(e) {
    e.preventDefault();
    $("#new-terminal-form").toggle("slow");
  });
});
