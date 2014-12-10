var humidityData = {
  labels : ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio",
            "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
  datasets : [
  {
    label : 'Humedad',
    fillColor : color.get('humidityLight'),
    strokeColor : color.get('humidityDark'),
    highlightFill: color.get('humidityLight'),
    highlightStroke: color.get('humidityDark'),
    data : [35,40,45,80,60,40,30,20,35,65,50,45]
  }
  ]
}
