window.onload=function() {
  canvas = document.getElementById("canvas");
  if (canvas && canvas.getContext) {
    ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.lineWidth = 10;
      ctx.strokeStyle = "green";
      ctx.fillStyle = "pink";

      //Se usa Math.PI para convertir los radianes a grados

      //Arco en el sentido de las manecillas del reloj, por defecto
      ctx.beginPath();
      //(punto inicial x,y | radio r | ángulo iicial, ángulo final )
      ctx.arc(100,150,50,1.1*Math.PI,1.9*Math.PI);
      ctx.stroke();

      //Arco en el sentido contrario a las manecillas del reloj
      ctx.beginPath();
      ctx.arc(250,150,50,1.1*Math.PI,1.9*Math.PI, true);
      ctx.stroke();

      //Círculo 
      ctx.beginPath();
      ctx.arc(400,150,50,0,2*Math.PI);
      ctx.fill();
      ctx.stroke();

    } else {
      alert("Tu navegador NO soporta la etiqueta canvas");
    } 
  }
}