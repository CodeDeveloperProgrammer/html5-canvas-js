window.onload = function () {
  canvas = document.getElementById("canvas");
  if (canvas && canvas.getContext) {
    ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.lineWidth = 10;
      ctx.strokeStyle = "yellow";
      ctx.beginPath();

      var x1 = 20, y1 = 20; //punto inicial de la curva
      var cpx = 150, cpy = 200; //control point x & y
      var x2 = 400, y2 = 20; //punto final de la curva

      ctx.moveTo(x1, y1);
      ctx.quadraticCurveTo(cpx, cpy, x2, y2);
      ctx.stroke();

      ctx.fillRect(x1, y1, 5, 5);
      ctx.fillRect(x2, y2, 5, 5);
      ctx.fillRect(cpx, cpy, 5, 5);
    } else {
      alert("Tu navegador NO soporta la etiqueta canvas");
    }
  }
};
