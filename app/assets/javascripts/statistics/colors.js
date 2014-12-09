var Color = function() {
  this.container = {
    'blue':'#0CB6B6',
    'orange':'#FF6600',
    'humidityLight':'#81CFE0',
    'humidityDark':'#52B3D9'
  }
}

Color.prototype.get = function(color) {
  return this.container[color];
}

var color = new Color();
