$(document).ready(function(){var t=$("#city-name").text();$.get("http://api.openweathermap.org/data/2.5/weather?q="+t+",es&lang=es",function(t){var r=t.weather[0].description,a=t.weather[0].icon,n=e(t.main.temp)+" \xbaC",i=t.main.pressure+" hPa",p=t.main.humidity+" %",m=t.wind.speed+" mps";$("#description").text(r),$("#temperature").text(n),$("#pressure").text(i),$("#humidity").text(p),$("#wind").text(m),$("#icon").attr("src","http://openweathermap.org/img/w/"+a+".png")});var e=function(t){return Math.round(t-273.15)}});