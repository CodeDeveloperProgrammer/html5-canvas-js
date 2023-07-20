/***********
VARIABLES
************/
game = {
	canvas: null,
	ctx: null,
	imagen: null,
	clic: null,
	gameOver: null,
 	ancho: 150,
 	inicioX: 100,
 	inicioY: 25,
 	x: 0,
 	y: 0,
 	renglones: 3,
 	columnas: 4,
 	fichas_array: new Array(),
 	numFichas: 0,
 	banderaBarajea: false,
 	colorMarco: "black",
 	colorFicha: "white",
 	caratula: true,
 	numFotos: 6,
}
/***********
OBJETOS
************/
function Ficha(ii, x, y, w, xx, yy, i, j, bandera){
	this.i = ii;
	this.x = x;
	this.y = y;
	this.w = w;
	this.xx = xx;
	this.yy = yy;
	this.ren = i;
	this.col = j;
	this.bandera = bandera;
	this.dibujar = function(){
		game.ctx.strokeStyle = game.colorMarco;
		if(this.bandera){
			game.ctx.fillStyle = game.colorFicha;
			game.ctx.fillRect(this.xx, this.yy, this.w, this.w);
		} else {
			game.ctx.drawImage(
			game.imagen,this.x,this.y,this.w,this.w,this.xx,this.yy, this.w, this.w);
		}
		game.ctx.strokeRect(this.xx, this.yy, this.w, this.w);
	}
}
/***********
FUNCIONES
************/
const caratula=()=>{
	let imagen = new Image();
	imagen.src = "imagenes/rompecabezas.png";
	imagen.onload =()=>{
		game.ctx.drawImage(imagen,0,0);
	}
}
const ajustar=(xx, yy)=>{
	const pos = game.canvas.getBoundingClientRect();
	const x = xx - pos.left;
	const y = yy - pos.top;
	return {x, y}	
}
const seleccionar=(e)=>{
	if(game.caratula){
		inicio();
	} else {
		const {x,y} = ajustar(e.clientX, e.clientY);
		let i;
		//
		for(i=0; i<game.fichas_array.length; i++){
			ficha = game.fichas_array[i];
			if((x>ficha.xx)&&(x<ficha.xx+ficha.w)&&
			(y>ficha.yy)&&(y<ficha.yy+ficha.w)){
				break;
			}
		}
		if(i<game.fichas_array.length){
			if(game.fichas_array[i].bandera==false){
				buscar(i);	
			}
		}
	}
}
const inicio=()=>{
	game.ctx.clearRect(0,0,game.canvas.width,game.canvas.height);
	game.caratula = false;
	crearFichas();
}
const crearFichas=()=>{
	let foto = Math.floor(Math.random()*game.numFotos)+1;
	game.imagen = new Image();
	game.imagen.src = `imagenes/fondos/fondo${foto}.png`;
	game.imagen.onload = function(){
		var bandera = false;
		var ii = 0;
		for(var i=0; i<game.renglones; i++){
			for(var j=0; j<game.columnas; j++){
				//Coordenadas de las fichas
				x = game.inicioX+game.ancho*j;
				y = game.inicioY+game.ancho*i;
				//Dejaremos en blanco la última ficha
				bandera = (ii==game.numFichas-1);
				//Creamos el arreglo con los objetos de las fichas
				game.fichas_array.push(new Ficha(ii,x,y,game.ancho,x,y,i,j,bandera));
				ii++;	
			}
		}
		barajar();
		crearMini(foto);
	}
}
const crearMini=(foto)=>{
	let mini = new Image();
	mini.src = `imagenes/minis/fondo${foto}.png`;
	mini.onload = function(){
		game.ctx.drawImage(mini,730,25);
	}
}
const tablero=()=>{
	for(let i=0; i<game.numFichas; i++){
		game.fichas_array[i].dibujar();
	}
}
const barajar=()=>{
	game.banderaBarajea = true;
	for(var i=0; i<1000; i++){
		r = Math.floor(Math.random()*game.numFichas);
		buscar(r);
	}
	game.banderaBarajea = false;
	tablero();
	verificar();
	game.canvas.addEventListener("click", seleccionar,false);
}
const buscar=(ficha)=>{
	let ren2, col2;
	let ren = game.fichas_array[ficha].ren;
	let col = game.fichas_array[ficha].col;
	//arriba
	ren2 = ren - 1;
	if(ren2 > -1) intercambiar(ren, col, ren2, col);
	//abajo
	ren2 = ren + 1;
	if(ren2 < game.renglones) intercambiar(ren, col, ren2, col);
	//derecha
	col2 = col + 1;
	if(col2 < game.columnas) intercambiar(ren, col, ren, col2);
	//izquierda
	col2 = col - 1;
	if(col2 > -1) intercambiar(ren, col, ren, col2);	
}
const intercambiar=(ren, col, ren2, col2)=>{
	const i = col + ren * game.columnas;
	const j = col2 + ren2 * game.columnas;
	//
	if(game.fichas_array[j].bandera){
		//
		xx = game.fichas_array[j].x;
		yy = game.fichas_array[j].y;
		game.fichas_array[j].bandera = false;
		game.fichas_array[j].x = game.fichas_array[i].x;
		game.fichas_array[j].y = game.fichas_array[i].y;
		//
		game.fichas_array[i].bandera = true;
		game.fichas_array[i].x = xx;
		game.fichas_array[i].y = yy;
		//
		if(game.banderaBarajea==false){
			tablero();
			verificar();
			game.clic.play();
		} 
	}
}
const verificar=()=>{
	let fichasCorrectas = 0
	for (let i = 0; i < game.numFichas; i++) {
		//console.log(i,game.fichas_array[i].i);
		if(game.fichas_array[i].x==game.fichas_array[i].xx&&game.fichas_array[i].y==game.fichas_array[i].yy) fichasCorrectas++;
	}
	mensaje("Fichas correctas: "+fichasCorrectas,710,400);
	if (fichasCorrectas==game.numFichas) {
		gameOver();
	}
}
const gameOver=()=>{
	mensaje("¡Felicidades!",710,220);
	mensaje("Lo lograste",710,250);
	game.gameOver.play();
	game.canvas.removeEventListener("click", seleccionar,false);
}
const mensaje=(cadena,x,y) =>{
    let medio = (game.canvas.width-x)/2;
	game.ctx.save();
	game.ctx.fillStyle = "black";
	game.ctx.strokeStyle = "black";	
	game.ctx.clearRect(x,y,250,40);
	game.ctx.textBaseline = "top";
	game.ctx.font = "bold 20px Courier";
	game.ctx.textAlign = "center";
	game.ctx.fillText(cadena, x+medio, y);
	game.ctx.restore();
}
/***********
INICIO
************/
window.onload=function(){
	game.canvas = document.getElementById("canvas");
	if(game.canvas && game.canvas.getContext){
		game.ctx = canvas.getContext("2d");
		if (game.ctx) {
			game.numFichas = game.renglones * game.columnas;
			game.clic = document.getElementById("clic");
			game.gameOver = document.getElementById("gameOver");
			caratula();
			game.canvas.addEventListener("click",seleccionar,false);
		} else{
			alert("Tu navegador no soporta el canvas de HTML5")
		};
	}
}	