var Color = function() {
  this.container = {
    'blue'          :'#0CB6B6',
    'orange'        :'#FF6600',

    'humidityLight' :'#81CFE0',
    'humidityDark'  :'#52B3D9',

    'windLight'     :'#E6B8E6',
    'windDark'      :'#8A6E8A',

    'floorLight'    :'#D65C33',
    'floorDark'     :'#8F2400',

    'tempLight'     :'#FF9933',
    'tempDark'      :'#E68A2E',

    'lightLight'    :'#FFFF99',
    'lightDark'     :'#FFCC00',

    'phLight'       :'#00FF99',
    'phDark'        :'#00CC7A'
  }
}

Color.prototype.get = function(color) {
  return this.container[color];
}

var color = new Color();
