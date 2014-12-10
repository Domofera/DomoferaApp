window.onload = function(){
  var humidityContext = document.getElementById("canvasHumidity").getContext("2d");
  var windContext     = document.getElementById("canvasWind").getContext("2d");
  var floorContext    = document.getElementById("canvasFloor").getContext("2d");
  var phContext       = document.getElementById("canvasPh").getContext("2d");
  var lightContext    = document.getElementById("canvasLight").getContext("2d");
  var tempContext     = document.getElementById("canvasTemp").getContext("2d");

  window.myBar = new Chart(humidityContext).Line(humidityData, {
    responsive : true
  });
  window.myBar = new Chart(windContext).Line(windData, {
    responsive : true
  });
  window.myBar = new Chart(floorContext).Line(floorData, {
    responsive : true
  });
  window.myBar = new Chart(phContext).Line(phData, {
    responsive : true
  });
  window.myBar = new Chart(lightContext).Line(lightData, {
    responsive : true
  });
  window.myBar = new Chart(tempContext).Line(tempData, {
    responsive : true
  });
}
