var Animacion = function (canvas) {
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext("2d");
  this.t = 0; //tiempo
  this.tiempoInicio = 0;
  this.tiempoFinal = 0;
  this.frame = 0;
  this.animacion = false;

  window.requestAnim = function (callback) {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  };
};
