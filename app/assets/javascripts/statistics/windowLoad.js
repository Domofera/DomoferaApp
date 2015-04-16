window.onload = function(){
  var today = new Date();
  $('#monthParam').val(today.getMonth()+1);
  $('#yearParam').val(today.getFullYear());
  $('#dayParam').val(today.getDate());
  loadData();
};

var loadData = function() {
  var equivalence = {
    "Día" : "d",
    "Mes" : "m",
    "Año" : "y",
    "Temperatura del aire" : "temperature_air",
    "Temperatura del suelo": "temperature_floor",
    "Humedad del aire"     : "humidity_air",
    "Humedad del suelo"    : "humidity_floor",
    "Luz"                  : "light"
  };

  var username  = $('#username').text();
  var month     = $('#monthParam').val();
  var year      = $('#yearParam').val();
  var day       = $('#dayParam').val();
  var mode      = equivalence[$('#modeParam').val()];
  var attribute = equivalence[$('#attributeParam').val()];
  console.log(attribute);

  $('.canvasContainer').each(function(index) {
    var canvasContext = this.firstChild.nextSibling.getContext("2d");
    var data = getTerminalData(username, this.id, day, month, year, mode, canvasContext, attribute);
  })
};

var Colors = {
  temperature_floor: {
    min: [102,61,0],
    max: [178, 107,71],
    average: [230, 138, 92]
  },
  temperature_air: {
    min: [255,153,102],
    max: [129, 161,97],
    average: [184, 230, 138]
  },
  humidity_floor: {
    min: [173,133,255],
    max: [110, 85, 163],
    average: [138, 106, 204]
  },
  humidity_air: {
    min: [0,153,255],
    max: [0, 85,143],
    average: [0, 122, 204]
  },
  light: {
    min: [178, 71, 0],
    max: [255,204, 0],
    average: [255, 224, 102]
  }
}

var chart = null;

document.getElementById('update-data').addEventListener('click', function() {
  loadData();
});

function drawMonth(days, value) {
  var max = value + '_max';
  var min = value + '_min';
  var average = value + '_average';
  var colors = Colors[value];
  var data = {
      labels: getDaysArray(days),
      datasets: [
          {
              label: "Mínimo",
              fillColor: "rgba("+ colors.min[0] +"," + colors.min[1] +"," + colors.min[2] +",0.5)",
              strokeColor: "rgba("+ colors.min[0] +"," + colors.min[1] +"," + colors.min[2] +",0.5)",
              highlightFill: "rgba("+ colors.min[0] +"," + colors.min[1] +"," + colors.min[2] +",1)",
              highlightStroke: "rgba("+ colors.min[0] +"," + colors.min[1] +"," + colors.min[2] +",1)",
              data: getDaysArrayData(days, min)
          },
          {
              label: "Medio",
              fillColor: "rgba("+ colors.average[0] +"," + colors.average[1] +"," + colors.average[2] +",0.5)",
              strokeColor: "rgba("+ colors.average[0] +"," + colors.average[1] +"," + colors.average[2] +",0.5)",
              highlightFill: "rgba("+ colors.average[0] +"," + colors.average[1] +"," + colors.average[2] +",1)",
              highlightStroke: "rgba("+ colors.average[0] +"," + colors.average[1] +"," + colors.average[2] +",1)",
              data: getDaysArrayData(days, average)
          },
          {
              label: "Máximo",
              fillColor: "rgba("+ colors.max[0] +"," + colors.max[1] +"," + colors.max[2] +",0.5)",
              strokeColor: "rgba("+ colors.max[0] +"," + colors.max[1] +"," + colors.max[2] +",0.5)",
              highlightFill: "rgba("+ colors.max[0] +"," + colors.max[1] +"," + colors.max[2] +",1)",
              highlightStroke: "rgba("+ colors.max[0] +"," + colors.max[1] +"," + colors.max[2] +",1)",
              data: getDaysArrayData(days, max)
          }
      ]
  };
  return data;
}

function drawDay(dayData) {
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

function drawYear(data, value, colors) {
  var max = value + '_max';
  var min = value + '_min';
  var average = value + '_average';
  var colors = Colors[value];
  var data = {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
               "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      datasets: [
          {
              label: "Mínimo",
              fillColor: "rgba("+ colors.min[0] +"," + colors.min[1] +"," + colors.min[2] +",0.5)",
              strokeColor: "rgba("+ colors.min[0] +"," + colors.min[1] +"," + colors.min[2] +",0.5)",
              highlightFill: "rgba("+ colors.min[0] +"," + colors.min[1] +"," + colors.min[2] +",1)",
              highlightStroke: "rgba("+ colors.min[0] +"," + colors.min[1] +"," + colors.min[2] +",1)",
              data: getYearArrayData(data, min)
          },
          {
              label: "Medio",
              fillColor: "rgba("+ colors.average[0] +"," + colors.average[1] +"," + colors.average[2] +",0.5)",
              strokeColor: "rgba("+ colors.average[0] +"," + colors.average[1] +"," + colors.average[2] +",0.5)",
              highlightFill: "rgba("+ colors.average[0] +"," + colors.average[1] +"," + colors.average[2] +",1)",
              highlightStroke: "rgba("+ colors.average[0] +"," + colors.average[1] +"," + colors.average[2] +",1)",
              data: getYearArrayData(data, average)
          },
          {
              label: "Máximo",
              fillColor: "rgba("+ colors.max[0] +"," + colors.max[1] +"," + colors.max[2] +",0.5)",
              strokeColor: "rgba("+ colors.max[0] +"," + colors.max[1] +"," + colors.max[2] +",0.5)",
              highlightFill: "rgba("+ colors.max[0] +"," + colors.max[1] +"," + colors.max[2] +",1)",
              highlightStroke: "rgba("+ colors.max[0] +"," + colors.max[1] +"," + colors.max[2] +",1)",
              data: getYearArrayData(data, max)
          }
      ]
  };
  return data;
}

function drawChart(data, mode) {
  return drawDay(data);
};

function getDaysArray(days) {
  var arr = [];
  days.forEach(function(element, index) {
    arr.push(index+1);
  })
  return arr;
};

function getDaysArrayData(days, value) {
  var arr = [];
  days.forEach(function(element) {
    arr.push(element[value])
  });
  return arr;
};

function getYearArrayData(data, value) {
  var arr = [];
  data.forEach(function(element) {
    arr.push(element[value]);
  })
  return arr;
};

function getTerminalData(username, id, day, month, year, mode, context, attribute) {
  var url  = "/api/statistics?username="+ username
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
        if (chart) chart.destroy();
        chart = new Chart(context).Bar(dayData);
      } else if (mode == 'm') {

        var month  = drawMonth(data, attribute);
        if (chart) chart.destroy();
        chart = new Chart(context).Line(month);
      } else if (mode == 'y') {
        var yearData = drawYear(data, attribute);
        if (chart) chart.destroy();
        chart = new Chart(context).Line(yearData);
      }
    }
  });
}
