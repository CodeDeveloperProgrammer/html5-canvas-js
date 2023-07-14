window.onload = function () {
  canvas = document.getElementById("canvas");
  if (canvas && canvas.getContext) {
    //POR LO GENERAL SE PUEDE VER COMO context
    context = canvas.getContext("2d");
    if (context) {
      //ESTILOS
      context.lineWidth = 25;
      context.strokeStyle = "#A076F9";

      //INICIO DEL TRAZO
      context.beginPath();
      context.lineCap = "round";
      context.moveTo(50, 50);
      context.lineTo(400, 300);
      context.stroke();

      //INICIO DEL TRAZO 2
      context.strokeStyle = "salmon";
      context.beginPath();
      context.lineCap = "square";
      context.moveTo(50, 150);
      context.lineTo(350, 114);
      context.stroke();

      //INICIO DEL TRAZO 3
      context.strokeStyle = "#FF9E00";
      context.beginPath();
      context.lineCap = "butt";
      context.moveTo(500, 50);
      context.lineTo(24, 100);
      context.stroke();

      //INICIO DEL TRAZO 4 con trazos continuos
      context.strokeStyle = "blue";
      context.lineCap = "butt";
      context.beginPath();
      context.moveTo(50, 200);
      context.lineTo(20, 350);
      context.stroke();

      context.beginPath();
      context.lineCap = "round";
      context.moveTo(75, 350);
      context.lineTo(125, 250);
      context.lineTo(175, 350);
      context.stroke();

      context.beginPath();
      context.lineJoin = "round";
      context.moveTo(175, 350);
      context.lineTo(225, 250);
      context.lineTo(275, 350);
      context.stroke();

      context.beginPath();
      context.lineJoin = "bevel";
      context.moveTo(275, 350);
      context.lineTo(325, 250);
      context.lineTo(375, 350);
      context.stroke();

      context.beginPath();
      context.lineJoin = "miter";
      context.moveTo(375, 350);
      context.lineTo(425, 250);
      context.lineTo(475, 350);
      context.stroke();
      context.strokeStyle='color';
      
    } else {
      alert("Tu navegador, NO soporta la etiqueta canvas");
    }
  }
};
