window.onload = function () {
  canvas = document.getElementById("canvas");
  if (canvas && canvas.getContext) {
    ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.lineWidth = 10;
      ctx.strokeStyle = "darkgreen";
      ctx.beginPath();

      
      var x1 = 220, y1 = 20; //punto inicial de la curva
      var cp1x = 20, cp1y = 100; //control point 1
      var cp2x = 400, cp2y = 100; //control point 2
      var x2 = 220, y2 = 300; //punto final de la curva
	  
	  //dibujar curva
      ctx.moveTo(x1, y1);
      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x2, y2);
      ctx.stroke();

	
      ctx.fillRect(x1, y1, 5, 5);
      ctx.fillRect(x2, y2, 5, 5);
      ctx.fillRect(cp1x, cp1y, 5, 5);
      ctx.fillRect(cp2x, cp2y, 5, 5);
    } else {
      alert("Tu navegador NO soporta la etiqueta canvas");
    }
  }
};
