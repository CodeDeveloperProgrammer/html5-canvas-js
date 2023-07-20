window.onload = function () {
  canvas = document.getElementById("canvas");
  if (canvas && canvas.getContext) {
    ctx = canvas.getContext("2d");
	
	//Cuadrado
    if (ctx) {
      var inicioX = 85;
      var inicioY = 70;
      var desplazamiento = 20;
      var lineas = 25;

      ctx.lineWidth = 10; //grosor de la linea
      ctx.strokeStyle = "salmon"; //color de la linea
      ctx.lineCap = "round"; //tipo de linea que se usa para el punto final
      ctx.lineJoin = "round"; //tipo de linea que se usa para el punto de union
      ctx.beginPath(); //inicia el dibujo
      ctx.moveTo(inicioX, inicioY); //inicia el dibujo en la posicion inicial

	  //Cuadrado 1 
      for (var i = 0; i < lineas; i++) {
        var x = inicioX + (i + 1) * desplazamiento; // 
        var y = inicioY;

		// Si es par, se mueve hacia abajo, si es impar, se mueve hacia arriba
        if (i % 2 == 0) {
          y = inicioY + 100;
        }
        ctx.lineTo(x, y);
      }
      ctx.stroke(); //dibuja la linea
    } else {
      alert("Tu navegador NO soporta la etiqueta canvas");
    }
  }
};
