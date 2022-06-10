//Estructuras (de control de flujo)

//Estructuras condicionales (que nos permiten definir si unas instrucciones se ejecutan o no)

// if
//if (expresion condicional) {
    // código a ejecutar si se cumple
// }

let nombre = 'Helena';
let edad = 22;
let esMayorEdad;

if ( edad >=16) {
    esMayorEdad = true;
    console.log (nombre + ' es mayor de edad');
}

// if-else
//if (expresion condicional) {
    // código a ejecutar si se cumple
// } else {
    //codigo a ejecutar si no se cumple la expresion
// }

let valor1 = 10;
let valor2 = 20;

if (valor1 > valor2) {
    console.log('valor1 es mayor que valor2 ');
    
} else {
    console.log('valor1 es menor o igual que valor2 ');
}

// if-else-if
if (valor1 > valor2) {
    console.log ('valor1 es mayor que valor2');
} else if ( valor1 === valor2) {
   console.log ( 'valor1 es igual a valor2');
} else {
    console.log ( 'valor1 menor que valor2');
}

