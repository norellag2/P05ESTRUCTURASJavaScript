// Estructuras iterativas o bucles

// ciclo for
// a partir de una expresión de declaración, otra expresión de control y otra 
//expresión de actualización ejecuta en bucle un bloque de código
for (i = 0; i < 10; i++) {
     console.log ('El valor de i es' + i);
}

//ciclo while
let password = '1234';
// ejecutan un bloque de codigo en bucle mientras se cumpla una expresion condicional
//para el ejemplo vamos a usar unos métodos muy antiguos de javascript en el DOM (mala practica)
while (password !== '1234' ) {
 password = prompt ('Escriba su contraseña');
}

//Hay una version do while que se diferencia en que si la expresion no se cumple
// si se llega a ejecutar la primera iteración (no se suele utilizar)
do {
    password = prompt ('Escriba su contraseña');
} while 
    (password !== '1234')
