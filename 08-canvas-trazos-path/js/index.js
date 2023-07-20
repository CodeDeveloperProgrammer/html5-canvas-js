window.onload = function () {
  canvas = document.getElementById("canvas");
  if (canvas && canvas.getContext) {
    ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.lineWidth = 10;
      ctx.strokeStyle = "yellow";
      //ctx.fillStyle = "por defecto es black";

      //Path
      ctx.beginPath();
      ctx.moveTo(50, 100);
      ctx.lineTo(100, 50);
      ctx.lineTo(150, 100);
      ctx.lineTo(100, 150);
      ctx.stroke();

      //Path
      ctx.beginPath();
      ctx.moveTo(200, 100);
      ctx.lineTo(250, 50);
      ctx.lineTo(300, 100);
      ctx.lineTo(250, 150);
      ctx.closePath();
      ctx.stroke();

      //Path
      ctx.beginPath();
      ctx.moveTo(350, 100);
      ctx.lineTo(400, 50);
      ctx.lineTo(450, 100);
      ctx.lineTo(400, 150);
      ctx.fill();
      ctx.closePath();
      ctx.stroke();

      //Path
      ctx.beginPath();
      ctx.fillStyle='#a80077';      
      ctx.moveTo(500, 100);
      ctx.lineTo(550, 50);
      ctx.lineTo(600, 100);
      ctx.lineTo(550, 150);
      ctx.fill();
      ctx.closePath();
      ctx.stroke();
    } else {
      alert("Tu navegador NO soporta la etiqueta canvas");
    }
  }
};
