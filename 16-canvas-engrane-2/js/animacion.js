var Animacion = function (canvas) {
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext("2d");
  this.t = 0; //tiempo
  this.timeInterval = 0;
  this.tiempoInicio = 0;
  this.tiempoFinal = 0;
  this.frame = 0;
  this.animacion = false;

  window.requestAnim = (function (callback) {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();
};

Animacion.prototype.limpiaCanvas = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Animacion.prototype.getContext = function () {
  return this.ctx;
};

Animacion.prototype.getCanvas = function () {
  return this.canvas;
};

Animacion.prototype.getFrame = function () {
  return this.frame;
};

Animacion.prototype.getTimeInterval = function () {
  return this.timeInterval;
};

Animacion.prototype.getTime = function () {
  return this.t;
};

Animacion.prototype.getFps = function () {
  return this.timeInterval > 0 ? 1000 / this.timeInterval : 0;
};

Animacion.prototype.getAnimacion = function () {
  return this.animacion;
};

Animacion.prototype.setDibuja = function (func) {
  this.dibujar = func;
};

Animacion.prototype.inicio = function () {
  this.animacion = true;
  var fecha = new Date();
  this.tiempoInicio = fecha.getTime();
  this.tiempoFinal = this.tiempoInicio;

  if (this.dibujar !== undefined) {
    this.dibujar();
  }

  this.loopAnimacion();
};

Animacion.prototype.stop = function () {
  this.animacion = false;
  console.log(this.animacion);
};

Animacion.prototype.loopAnimacion = function () {
  var that = this;
  this.frame++;
  var fecha = new Date();
  var tiempo = fecha.getTime();
  this.timeInterval = tiempo - this.tiempoFinal;
  this.t += this.timeInterval;
  this.tiempoFinal = tiempo;

  if (this.dibujar !== undefined) {
    this.dibujar();
  }

  if (this.animacion) {
    requestAnim(function () {
      that.loopAnimacion();
    });
  }
};

function Engrane(config) {
  //Centro
  this.centroX = config.centroX;
  this.centroY = config.centroY;
  //Radios de los circulos
  this.radioExterno = config.radioExterno;
  this.radioInterno = config.radioInterno;
  this.radioMedio = config.radioMedio;
  this.radioCentro = config.radioCentro;
  //Numero de puntos
  this.numPuntos = config.numPuntos;
  this.colorExterno = config.colorExterno;
  this.colorInterno = config.colorInterno;
  this.colorCentro = config.colorCentro;
  //Parámetros para animación
  this.angulo = config.angulo;
  this.velocidad = config.velocidad;
  this.clockwise = config.clockwise;
}
Engrane.prototype.dibuja = function (ctx) {
  //Animación
  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.rotate(this.theta);
  //
  ctx.beginPath();
  ctx.lineJoin = "bevel";

  //Las puntas del engrane
  for (var i = 0; i < this.numPuntos; i++) {
    var radio = null;

    if (i % 2 == 0) {
      radio = this.radioExterno;
    } else {
      radio = this.radioInterno;
    }

    var angulo = ((Math.PI * 2) / this.numPuntos) * (i + 1);
    //Calculamos las coordenadas externas
    var x = radio * Math.sin(angulo) + this.centroX;
    var y = radio * Math.cos(angulo) + this.centroY;

    //Dibujamos la línea
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }

  ctx.closePath();

  //Datos de la linea
  ctx.lineWidth = 5;
  ctx.strokeStyle = this.colorExterno;
  ctx.fillStyle = this.colorInterno;
  ctx.stroke();

  //Dibujamos círculo
  ctx.beginPath();
  ctx.arc(this.centroX, this.centroY, this.radioMedio, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fill();

  //Centro
  ctx.beginPath();
  ctx.arc(this.centroX, this.centroY, this.radioCentro, 0, Math.PI * 2);
  ctx.fillStyle = this.colorCentro;
  ctx.stroke();
  ctx.fill();
  ctx.restore();
};
window.onload = function () {
  canvas = document.getElementById("canvas");
  if (canvas && canvas.getContext) {
    ctx = canvas.getContext("2d");
    if (ctx) {
      var anim = new Animacion("canvas");
      var gears = [];
      //Añade engrane
      gears.push(
        new Engrane({
          centroX: canvas.width / 2,
          centroY: canvas.height / 2,
          radioExterno: 95, //radio externo
          radioInterno: 50, //radio interno
          radioMedio: 80, //radio medio
          radioCentro: 20, //radio centro
          numPuntos: 50, //numero de puntos
          colorExterno: "red", //color externo
          colorInterno: "orange", //color interno
          colorCentro: "green", //color central
          angulo: 0, //angulo
          velocidad: 1 / 1000, //milisegundos
          clockwise: true, //direccion
        })
      );
      //
      anim.setDibuja(function () {
        // Actualiza
        for (var i = 0; i < gears.length; i++) {
          var gear = gears[i];
          var theta = gear.angulo * this.getTimeInterval();
          var nuevo = gear.clockwise ? theta : -1 * theta;
          gear.angulo += nuevo;
        }
        // Limpia
        this.limpiaCanvas();
        // Dibuja
        for (var i = 0; i < gears.length; i++) {
          gears[i].dibuja(ctx);
        }
      });
      anim.inicio();
      //
      setTimeout(function () {
        anim.stop();
      }, 5000);
    } else {
      alert("Tu navegador NO soporta la etiqueta canvas");
    }
  }
};
