window.onload = function () {
  canvas = document.getElementById("canvas");
  if (canvas && canvas.getContext) {
    //POR LO GENERAL SE PUEDE VER COMO CTX
    context = canvas.getContext("2d");
    if (context) {
      //ESTILOS
      context.lineWidth = 25;
      context.strokeStyle = "yellow";

      //INICIO DEL TRAZO
      context.beginPath();
      context.moveTo(50, 50);
      context.lineTo(400, 400);
      context.stroke();

      //INICIO DEL TRAZO 2
      context.strokeStyle = "salmon";
      context.beginPath();
      context.moveTo(50, 150);
      context.lineTo(400, 4);
      context.stroke();

      //INICIO DEL TRAZO 3
      context.strokeStyle = "#FF9E00";
      context.beginPath();
      context.moveTo(600, 250);
      context.lineTo(4, 200);
      context.stroke();

      //INICIO DEL TRAZO 4
      context.strokeStyle = "#9998B0";
      context.beginPath();
      context.moveTo(300, 0);
      context.lineTo(300, 600);
      context.stroke();
    } else {
      alert("Tu navegador, NO soporta la etiqueta canvas");
    }
  }
};
