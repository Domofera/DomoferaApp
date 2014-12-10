var ChartCanvas = function(id) {
  this.canvas = document.createElement('canvas');
  this.canvas.id = id;
  this.canvas.className = "canvas";

  this.container = document.createElement('div');
  this.container.className = "canvasContainer";
  this.container.appendChild(this.canvas);
}

ChartCanvas.prototype.getContainer = function() {
  return this.container;
}
