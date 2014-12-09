window.onload = function(){
  var humidityContext = document.getElementById("canvasHumidity").getContext("2d");
  var windContext = document.getElementById("canvasWind").getContext("2d");
  window.myBar = new Chart(humidityContext).Bar(humidityData, {
    responsive : true
  });
  window.myBar = new Chart(windContext).Bar(windData, {
    responsive : true
  });
}
