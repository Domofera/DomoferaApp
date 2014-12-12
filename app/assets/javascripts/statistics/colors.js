var Color = function() {
  this.container = {
    'blue'          :'#0CB6B6',
    'orange'        :'#FF6600',

    'humidityLight' :'#47A3FF',
    'humidityDark'  :'#007AA3',

    'windLight'     :'#E62E8A',
    'windDark'      :'#B2246B',

    'floorLight'    :'#CC3300',
    'floorDark'     :'#8F2400',

    'tempLight'     :'#FF9900',
    'tempDark'      :'#CC7A00',

    'lightLight'    :'#FFFF99',
    'lightDark'     :'#FFCC00',

    'phLight'       :'#009933',
    'phDark'        :'#006B24'
  }
}

Color.prototype.get = function(color) {
  return this.container[color];
}

var color = new Color();
