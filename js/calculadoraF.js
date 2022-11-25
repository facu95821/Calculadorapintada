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


//Calculadora pintada

//  let operacion = prompt("¿Qué operación desea? +Suma -Resta *Multiplicacion /Division");

//  let operacion1 = parseInt(prompt("Escribe el primer numero:"));

//  let operacion2 = parseInt(prompt("Escribe el segundo numero:"));


 var num1 = 0;
 var num2 = 0;
 var opera;

function darNumero(numero){
 if(num1==0){
	 num1 = numero;
 }else{
	 num1 += numero;
 }
 refrescar();
}


function operar(valor){
 if (num1 == 0){
	 num1 = parseFloat(document.getElementById("valor_numero").value);

 }else{
 	(num2 = parseFloat(num1));
 	num1= 0;
 	opera = valor;
}
}

function esIgual(){
 num1 = parseFloat(num1);
 switch (opera){
	 case 1:
		 num1 += num2;
	 break;
	 case 2:
		 num1 = num2 - num1;
	 break;
	 case 3:
		 num1 *= num2;
	 break;
	 case 4:
		 num1 = num2 / num1;
	 break;
 }
 refrescar();
 num2 = parseFloat(num1);
 num1 = 0;
}

function refrescar(){
 document.getElementById("valor_numero").value = num1;
}
     

 