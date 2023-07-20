window.onload = function () {
    canvas = document.getElementById("canvas");
    if (canvas && canvas.getContext) {
        ctx = canvas.getContext("2d");
        if (ctx) {
            //DEFINICION DE COLORES
            ctx.fillStyle = "yellow";
            ctx.strokeStyle= "blue";
            ctx.lineWidth= 5;
            
            //x,y,w,h
            ctx.fillRect(50,50,100,100);
            ctx.strokeRect(50,50,100,100);  
            
            //CAMBIAR COLOR DE RELLENO
            ctx.fillStyle = "rgba(50,250,50,0.25)";
            ctx.fillRect(250,150,100,100);
            ctx.strokeRect(250,150,100,100);
        } else {
            alert('Tu navegador, NO soporta la etiqueta canvas');
        }
    }
}