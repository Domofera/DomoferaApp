function drawMonth(a,r){var e=r+"_max",t=r+"_min",i=r+"_average",o=Colors[r],l={labels:getDaysArray(a),datasets:[{label:"M\xednimo",fillColor:"rgba("+o.min[0]+","+o.min[1]+","+o.min[2]+",0.5)",strokeColor:"rgba("+o.min[0]+","+o.min[1]+","+o.min[2]+",0.5)",highlightFill:"rgba("+o.min[0]+","+o.min[1]+","+o.min[2]+",1)",highlightStroke:"rgba("+o.min[0]+","+o.min[1]+","+o.min[2]+",1)",data:getDaysArrayData(a,t)},{label:"Medio",fillColor:"rgba("+o.average[0]+","+o.average[1]+","+o.average[2]+",0.5)",strokeColor:"rgba("+o.average[0]+","+o.average[1]+","+o.average[2]+",0.5)",highlightFill:"rgba("+o.average[0]+","+o.average[1]+","+o.average[2]+",1)",highlightStroke:"rgba("+o.average[0]+","+o.average[1]+","+o.average[2]+",1)",data:getDaysArrayData(a,i)},{label:"M\xe1ximo",fillColor:"rgba("+o.max[0]+","+o.max[1]+","+o.max[2]+",0.5)",strokeColor:"rgba("+o.max[0]+","+o.max[1]+","+o.max[2]+",0.5)",highlightFill:"rgba("+o.max[0]+","+o.max[1]+","+o.max[2]+",1)",highlightStroke:"rgba("+o.max[0]+","+o.max[1]+","+o.max[2]+",1)",data:getDaysArrayData(a,e)}]};return l}function drawDay(a){var r={labels:["Temp Aire","Temp Suelo","Hum Aire","Hum Suelo","Luz"],datasets:[{label:"M\xednimos",fillColor:"rgba(84,220,235,0.5)",strokeColor:"rgba(84,220,235,0.5)",highlightFill:"rgba(84,220,235,1)",highlightStroke:"rgba(84,220,235,1)",data:[a.temperature_floor_min,a.temperature_air_min,a.humidity_floor_min,a.humidity_air_min,a.light_min]},{label:"Media",fillColor:"rgba(24,167,214,0.5)",strokeColor:"rgba(24,167,214,0.5)",highlightFill:"rgba(24,167,214,1)",highlightStroke:"rgba(24,167,214,1)",data:[a.temperature_floor_average,a.temperature_air_average,a.humidity_floor_average,a.humidity_air_average,a.light_average]},{label:"M\xe1ximos",fillColor:"rgba(3,129,171,0.5)",strokeColor:"rgba(3,129,171,0.5)",highlightFill:"rgba(3,129,171,1)",highlightStroke:"rgba(3,129,171,1)",data:[a.temperature_floor_max,a.temperature_air_max,a.humidity_floor_max,a.humidity_air_max,a.light_max]}]};return r}function drawYear(a,r,e){var t=r+"_max",i=r+"_min",o=r+"_average",e=Colors[r],a={labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],datasets:[{label:"M\xednimo",fillColor:"rgba("+e.min[0]+","+e.min[1]+","+e.min[2]+",0.5)",strokeColor:"rgba("+e.min[0]+","+e.min[1]+","+e.min[2]+",0.5)",highlightFill:"rgba("+e.min[0]+","+e.min[1]+","+e.min[2]+",1)",highlightStroke:"rgba("+e.min[0]+","+e.min[1]+","+e.min[2]+",1)",data:getYearArrayData(a,i)},{label:"Medio",fillColor:"rgba("+e.average[0]+","+e.average[1]+","+e.average[2]+",0.5)",strokeColor:"rgba("+e.average[0]+","+e.average[1]+","+e.average[2]+",0.5)",highlightFill:"rgba("+e.average[0]+","+e.average[1]+","+e.average[2]+",1)",highlightStroke:"rgba("+e.average[0]+","+e.average[1]+","+e.average[2]+",1)",data:getYearArrayData(a,o)},{label:"M\xe1ximo",fillColor:"rgba("+e.max[0]+","+e.max[1]+","+e.max[2]+",0.5)",strokeColor:"rgba("+e.max[0]+","+e.max[1]+","+e.max[2]+",0.5)",highlightFill:"rgba("+e.max[0]+","+e.max[1]+","+e.max[2]+",1)",highlightStroke:"rgba("+e.max[0]+","+e.max[1]+","+e.max[2]+",1)",data:getYearArrayData(a,t)}]};return a}function drawChart(a){return drawDay(a)}function getDaysArray(a){var r=[];return a.forEach(function(a,e){r.push(e+1)}),r}function getDaysArrayData(a,r){var e=[];return a.forEach(function(a){e.push(a[r])}),e}function getYearArrayData(a,r){var e=[];return a.forEach(function(a){e.push(a[r])}),e}function getTerminalData(a,r,e,t,i,o,l,g){var h="http://localhost:3000/api/statistics?username="+a+"&id="+r+"&day="+e+"&month="+t+"&year="+i+"&mode="+o;$.ajax({url:h,type:"GET",success:function(a){if("d"==o){var r=drawDay(a);chart&&chart.destroy(),chart=new Chart(l).Bar(r)}else if("m"==o){var e=drawMonth(a,g);chart&&chart.destroy(),chart=new Chart(l).Line(e)}else if("y"==o){var t=drawYear(a,g);chart&&chart.destroy(),chart=new Chart(l).Line(t)}}})}var ChartCanvas=function(a){this.canvas=document.createElement("canvas"),this.canvas.id=a,this.canvas.className="canvas",this.container=document.createElement("div"),this.container.className="canvasContainer",this.container.appendChild(this.canvas)};ChartCanvas.prototype.getContainer=function(){return this.container};var Color=function(){this.container={blue:"#0CB6B6",orange:"#FF6600",humidityLight:"#47A3FF",humidityDark:"#007AA3",windLight:"#E62E8A",windDark:"#B2246B",floorLight:"#CC3300",floorDark:"#8F2400",tempLight:"#FF9900",tempDark:"#CC7A00",lightLight:"#E6B800",lightDark:"#806600",phLight:"#009933",phDark:"#006B24"}};Color.prototype.get=function(a){return this.container[a]};var color=new Color,floorData={labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],datasets:[{fillColor:color.get("floorLight"),strokeColor:color.get("floorDark"),highlightFill:color.get("floorLight"),highlightStroke:color.get("floorDark"),data:[80,85,75,90,85,60,30,20,35,75,70,75]}]},humidityData={labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],datasets:[{label:"Humedad",fillColor:color.get("humidityLight"),strokeColor:color.get("humidityDark"),highlightFill:color.get("humidityLight"),highlightStroke:color.get("humidityDark"),data:[35,40,45,80,60,40,30,20,35,65,50,45]}]},lightData={labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],datasets:[{fillColor:color.get("lightLight"),strokeColor:color.get("lightDark"),highlightFill:color.get("lightLight"),highlightStroke:color.get("lightDark"),data:[20,25,25,40,45,60,75,85,60,55,45,30]}]},phData={labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],datasets:[{fillColor:color.get("phLight"),strokeColor:color.get("phDark"),highlightFill:color.get("phLight"),highlightStroke:color.get("phDark"),data:[20,40,15,30,55,80,60,30,45,35,60,45]}]},tempData={labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],datasets:[{fillColor:color.get("tempLight"),strokeColor:color.get("tempDark"),highlightFill:color.get("tempLight"),highlightStroke:color.get("tempDark"),data:[5,10,12,15,20,30,35,38,25,15,10,8]}]},windData={labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],datasets:[{fillColor:color.get("windLight"),strokeColor:color.get("windDark"),highlightFill:color.get("windLight"),highlightStroke:color.get("windDark"),data:[50,40,20,80,60,40,30,20,35,65,50,45]}]};window.onload=function(){var a=new Date;$("#monthParam").val(a.getMonth()+1),$("#yearParam").val(a.getFullYear()),$("#dayParam").val(a.getDate()),loadData()};var loadData=function(){var a={"D\xeda":"d",Mes:"m","A\xf1o":"y","Temperatura del aire":"temperature_air","Temperatura del suelo":"temperature_floor","Humedad del aire":"humidity_air","Humedad del suelo":"humidity_floor",Luz:"light"},r=$("#username").text(),e=$("#monthParam").val(),t=$("#yearParam").val(),i=$("#dayParam").val(),o=a[$("#modeParam").val()],l=a[$("#attributeParam").val()];console.log(l),$(".canvasContainer").each(function(){var a=this.firstChild.nextSibling.getContext("2d");getTerminalData(r,this.id,i,e,t,o,a,l)})},Colors={temperature_floor:{min:[102,61,0],max:[178,107,71],average:[230,138,92]},temperature_air:{min:[255,153,102],max:[129,161,97],average:[184,230,138]},humidity_floor:{min:[173,133,255],max:[110,85,163],average:[138,106,204]},humidity_air:{min:[0,153,255],max:[0,85,143],average:[0,122,204]},light:{min:[178,71,0],max:[255,204,0],average:[255,224,102]}},chart=null;document.getElementById("update-data").addEventListener("click",function(){loadData()});