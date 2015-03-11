window.onload = function(){
  var username = $('#username').text();
  var month    = $('#monthParam').val();
  var year     = $('#yearParam').val();
  var day      = $('#dayParam').val();
  var mode     = $('#modeParam').val();


  $('.canvasContainer').each(function(index) {
    var canvasContext = this.firstChild.nextSibling.getContext("2d");
    var data = getTerminalData(username, this.id, day, month, year, mode, canvasContext);

  })
};


function drawDay(dayData) {
  console.log(dayData);
  var data = {
      labels: ["Temp Aire", "Temp Suelo", "Hum Aire",
              "Hum Suelo",   "Luz"],
      datasets: [
          {
              label: "Mínimos",
              fillColor: "rgba(84,220,235,0.5)",
              strokeColor: "rgba(84,220,235,0.5)",
              highlightFill: "rgba(84,220,235,1)",
              highlightStroke: "rgba(84,220,235,1)",
              data: [dayData.temperature_floor_min, dayData.temperature_air_min,
                    dayData.humidity_floor_min, dayData.humidity_air_min,
                    dayData.light_min]
          },
          {
              label: "Media",
              fillColor: "rgba(24,167,214,0.5)",
              strokeColor: "rgba(24,167,214,0.5)",
              highlightFill: "rgba(24,167,214,1)",
              highlightStroke: "rgba(24,167,214,1)",
              data: [dayData.temperature_floor_average, dayData.temperature_air_average,
                    dayData.humidity_floor_average, dayData.humidity_air_average,
                    dayData.light_average]
          },
          {
              label: "Máximos",
              fillColor: "rgba(3,129,171,0.5)",
              strokeColor: "rgba(3,129,171,0.5)",
              highlightFill: "rgba(3,129,171,1)",
              highlightStroke: "rgba(3,129,171,1)",
              data: [dayData.temperature_floor_max, dayData.temperature_air_max,
                    dayData.humidity_floor_max, dayData.humidity_air_max,
                    dayData.light_max]
          }
      ]
  };
  return data;
};

function drawChart(data, mode) {
  return drawDay(data);
};

function getTerminalData(username, id, day, month, year, mode, context) {
  var url  = "http://localhost:3000/api/statistics?username="+ username
                                                 + "&id="    + id
                                                 + "&day="   + day
                                                 + "&month=" + month
                                                 + "&year="  + year
                                                 + "&mode="  + mode;
  $.ajax({
    url: url,
    type: 'GET',
    success: function(data) {
      if (mode == 'd') {
        var dayData = drawDay(data);
        var newChart = new Chart(context).Bar(dayData);
      } else if (mode == 'm') {
        var monthData = drawMonth(data);
        var newChart = new Chart(context).Line(monthData);
      } else if (mode == 'y') {
        var yearData = drawYear(data);
        var newChart = new Chart(context).Line(yearData);
      }
    }
  });
}
