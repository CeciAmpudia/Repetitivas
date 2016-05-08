// #1 SUMA 10 NUMEROS CICLO WHILE
/* var resultado = 0
var n = 10
var i = 1

while(i <= n) {
	resultado += i;
	i++;
}
document.write(resultado) */


// #2 SUMA 10 NUMEROS CICLO DO WHILE
/* var resultado = 0
var i = 1

do {
	var va = prompt("Cual es la cantidad?")
	resultado = parseInt(resultado) + parseInt(va);
	
} while(i <= 10)
document.write(resultado) */


// #3 SUMA 10 NUMEROS CICLO FOR
/* var resultado = 0

for (var i = 1; i <= 10; i++) {
	var va = prompt("Cual es la cantidad?")
	resultado = parseInt(resultado) + parseInt(va);
}
document.write(resultado) */


// #4 EDAD PROMEDIO
/* var nA = prompt("Numero de Alumnos")
var r = 0
var i = 1

	//Ciclo FOR
	for (var i = 1; i <= nA; i++) {
		var edad = prompt("Edad")
		r = parseInt(r) + parseInt(edad);
	}
	var promedio = parseInt(r)/nA;
	document.write(promedio) 

	//Ciclo WHILE
	var i = 1
	while(i <= nA) {
		var edad = prompt("Edad")
		r = parseInt(r) + parseInt(edad);
		i++;
	}
	var promedio = parseInt(r)/nA;
	document.write(promedio) 

	//Ciclo DO WHILE
	do {
		var edad = prompt("Edad")
		r = parseInt(r) + parseInt(edad);
		i++;
	}
	while(i <= nA)
	var promedio = parseInt(r)/nA;
	document.write(promedio) */

// #5 NUMEROS PARES DEL 0-100
/* var r = 0
 var n = 100

 for (var i = 0; i <= n; i += 2) {
 	r =+ i;
 	alert(r);
 } */


// #7 TABLAS DE MULTIPLICAR
/* var num = prompt("Ingrese el número");
	//Ciclo For
	for (var c = 0; c <= 10; c++) {
	rpta = num * c;
	alert(num + " * " + c + " = " + rpta);
	}

	//Ciclo While
	var c=0;
	while(c <= 10){
	rpta = num * c;
	alert(num + " * " + c + " = " + rpta);
	c++;
	}

	//Ciclo Do-While
	var c=0;
	do{
	rpta = num * c;
	alert(num + " * " + c + " = " + rpta);
	c++;
	}
	while(c <= 10) */


// #9 CALIFICACIONES ALUMNOS
/*var r = 0

for(var i = 1; i <= 40; i++){
	var ca = prompt("Calificacion")
	r = parseInt(r) + parseInt(ca);
	
}
var media = r/40;
document.write("La media es:" + media);*/


// #10 CUBO Y CUARTA DE UN NUMERO

var re = 0

for(var i = 1; i <= 10; i++) {
	var num = prompt("Numero: ")
	re =+ i
	var cubo = num * num * num;
	var cuarta = num * num *  num * num;
	document.write("<br>Numero: " + num)
	document.write("<br> El cubo es: " + cubo)
	document.write("<br> La cuarta es: " + cuarta)
}
