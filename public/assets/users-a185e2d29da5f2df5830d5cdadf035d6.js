// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function () {
    var city = $('#city-name').text();
  $.get("http://api.openweathermap.org/data/2.5/weather?q="+ city +",es&lang=es", function(data){
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
  });


  var celsius = function(value) {
    return Math.round(value - 273.15);
  }

  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });
});
