window.onload = function () {
  canvas = document.getElementById("canvas");
  if (canvas && canvas.getContext) {
    ctx = canvas.getContext("2d");
    if (ctx) {
      var puntas = 15;
      var vertices = puntas * 2;
      var angulo = (Math.PI * 2) / vertices;
      var radioInterno = 40;
      var radioExterno = 80;
      var xx = (canvas.width / 2) + 120;
      var yy = canvas.height / 2;

      ctx.strokeStyle = "red"; // color del borde
      ctx.fillStyle = "yellow"; // color de relleno
      ctx.lineWidth = 10; // grosor del borde
      ctx.beginPath(); // inicio de la figura

      for (var i = 0; i < vertices; i++) {
        var x, y;

        if (i % 2 == 0) { // si es par
          x = Math.cos(angulo * i) * radioExterno; // calcula la posicion de x
          y = Math.sin(angulo * i) * radioExterno; // calcula la posicion de y
        } else { // si es impar
          x = Math.cos(angulo * i) * radioInterno;
          y = Math.sin(angulo * i) * radioInterno;
        }
        ctx.lineTo(xx + x, yy + y); // dibuja la linea
      
      }
      ctx.closePath(); // termina la figura
      ctx.fill(); // rellena la figura
      ctx.stroke(); // dibuja el borde
    } else {
      alert("Tu navegador NO soporta la etiqueta canvas");
    }
  }
};
