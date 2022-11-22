// let suma1 = parseInt(prompt("Ingrese un numero"));
// let suma2 = parseInt(prompt("Ingrese un numero"));

// let resultadosuma = suma1+suma2;  

// alert("El resultado de tu operacion es: " + (suma1 + suma2));


// let resta1 = parseInt(prompt("Ingrese un numero"));
// let resta2 = parseInt(prompt("Ingrese un numero"));

// let resultadoresta = resta1 - resta2;  

// alert("El resultado de tu operacion es: " + (resta1 - resta2));


// let division1 = parseInt(prompt("Ingrese un numero"));
// let division2 = parseInt(prompt("Ingrese un numero"));

// let resultadodivision = division1 / division2;  

// alert("El resultado de tu operacion es: " + (division1 / division2));


// let multiplica1 = parseInt(prompt("Ingrese un numero"));
// let multiplica2 = parseInt(prompt("Ingrese un numero"));

// let resultadomultiplica = multiplica1 * multiplica2;  

// alert("El resultado de tu operacion es: " + (multiplica1 * multiplica2));



 

//  let numero1 = prompt("Ingrese un numero");

//  numero1 = parseInt(numero1)

//  let numero2 = prompt("Ingrese otro numero");

//  numero2 = parseInt(numero2);

//  let suma = numero1 + numero2;

//  alert("El resultado de la suma es " + suma);

//  let resta = numero1 - numero2;

//  alert("El resultado de la resta es " + resta);

//  let multiplicar = numero1 * numero2;

//  alert("El resultado de la multiplicacion es " + multiplicar);

//  let dividir = numero1 / numero2;

//  alert("El resultado de la division es " + dividir);


let operacion = prompt("¿Qué operación desea? +Suma -Resta *Multiplicacion /Division");

let operacion1 = parseInt(prompt("Escribe el primer numero:"));

let operacion2 = parseInt(prompt("Escribe el segundo numero:"));

let resultado;

 var letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N',
 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'T'];

 function sumar(numero1, numero2){
 	return numero1 + numero2;
 }

 function restar(numero1, numero2){
 	return numero1 - numero2;
 }

 function multiplicar(numero1, numero2){
 	return numero1 * numero2;
 }

 function dividir(numero1, numero2){
 	if (numero1 == 0){
 			alert("No se puede dividir por cero")
 	}else{
 		if (numero2 == 0){
 			alert("No se puede dividir por cero")	
 		}else{
 			return numero1 / numero2
 		}
	}
 }



 switch (operacion){
 	case "+":
 		resultado = sumar(operacion1,operacion2);
         alert("El resultado de tu operacion es: " + resultado);
 		break;

 	case "-":
		resultado = restar(operacion1,operacion2);
 		alert("El resultado de tu operacion es: " + resultado);
 		break;

 	case "*":
 		resultado = multiplicar(operacion1,operacion2);
 		alert("El resultado de tu operacion es: " + resultado);
 		break;

 	case "/":
 		resultado = dividir(operacion1,operacion2);
 		alert("El resultado de tu operacion es: " + resultado);
 		break;
 			default:
 			alert("si no es +-*/ La opción no es correcta.");
 			break;
 }

     

 