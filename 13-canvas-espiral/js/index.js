
window.onload=function() {
		canvas = document.getElementById("canvas"); // obtiene el canvas del index.html
		if (canvas && canvas.getContext) {
			ctx = canvas.getContext("2d");

			// Si existe el canvas y su contexto
			if (ctx) {
				let radio = 0, angulo = 0; // radio y angulo

				ctx.lineWidth = 10; // ancho de la linea
				ctx.strokeStyle = "crimson"; // color de la linea
				ctx.beginPath(); // inicia el trazo
				ctx.moveTo(canvas.width/2, canvas.height/2); // origen de la linea

				for (var i = 0; i < 250; i++) {
					radio+=0.75; // incrementa el radio

					//segun por lo que se divida se obtiene mas o menos vueltas
					angulo += (Math.PI*2)/50; // angulo de cada punto

					var x = canvas.width/2 + radio * Math.cos(angulo); 
					var y = canvas.height/2 + radio * Math.sin(angulo);

					ctx.lineTo(x,y); // linea
				}
				ctx.stroke(); // dibuja la linea
			} else {
				alert("Tu navegador NO soporta la etiqueta canvas");
			} 
		}
	};