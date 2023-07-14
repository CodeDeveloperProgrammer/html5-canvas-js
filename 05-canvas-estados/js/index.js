window.onload=function() {
    canvas = document.getElementById("canvas");
    if (canvas && canvas.getContext) {
        //context = ctx
        ctx = canvas.getContext("2d");
        if (ctx) {
            //Definimos colores
            ctx.fillStyle = "yellow";
            ctx.strokeStyle = "#ff0000";
            ctx.lineWidth = 5;
            //x,y,w,h
            ctx.fillRect(50,50,100,100);
            ctx.strokeRect(50,50,100,100);

            //Guardamos la configuración
            ctx.save();

            //Cambio el color de relleno
            ctx.fillStyle = "orange";
            ctx.strokeStyle = "#0000ff";
            ctx.lineWidth = 15;
            ctx.fillRect(200,50,100,100);
            ctx.strokeRect(200,50,100,100);

            //Restauro los valores iniciales
            ctx.restore();
            ctx.fillRect(350,50,100,100);
            ctx.strokeRect(350,50,100,100);

        } else {
            alert("Tu navegador NO soporta la etiqueta canvas");
        } 
    }
}