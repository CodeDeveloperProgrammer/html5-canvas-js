window.onload = function () {
  canvas = document.getElementById("canvas");
  if (canvas && canvas.getContext) {
    ctx = canvas.getContext("2d");
    if (ctx) {
      //Centro
      var centroX = canvas.width / 2;
      var centroY = canvas.height / 2;

      //Radios de los circulos
      var radioExterno = 90;
      var radioInterno = 50;
      var radioMedio = radioInterno * 1.6;
      var radioCentro = 20;

      //Numero de puntos
      var numPuntos = 40;

      ctx.beginPath(); // Inicializamos el contexto
      ctx.lineJoin = "bevel"; // Linea de unión

      //Las puntas del engrane
      for (var i = 0; i < numPuntos; i++) {
        var radio = null;

        if (i % 2 == 0) {
          //Par
          radio = radioExterno;
        } else {
          radio = radioInterno;
        }

        var angulo = ((Math.PI * 2) / numPuntos) * (i + 1);

        //Calculamos las coordenadas externas
        var x = radio * Math.sin(angulo) + centroX;
        var y = radio * Math.cos(angulo) + centroY;

        //Dibujamos la línea
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.closePath(); // Cerramos el contexto

      //Datos de la linea
      ctx.lineWidth = 5;
      ctx.strokeStyle = "red"; // Color de la linea
      ctx.fillStyle = "gray"; // Color de relleno
      ctx.stroke();

      //Dibujamos círculo
      ctx.beginPath();
      ctx.arc(centroX, centroY, radioMedio, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fill();

      //Centro
      ctx.beginPath();
      ctx.arc(centroX, centroY, radioCentro, 0, Math.PI * 2);
      ctx.fillStyle = "green";
      ctx.stroke();
      ctx.fill();
    } else {
      alert("Tu navegador NO soporta la etiqueta canvas");
    }
  }
};
