//Estructuras switch
// es un mecanismo usado cuando tenemos que evaluar muchas condiciones de manera que simplifica los if-else-if

let diaSemana = 3;

switch (diaSemana) {
    case 1:
        console.log ('hoy es lunes');
        break; 
    case 2: 
         console.log ('hoy es martes');
         break;
    case 3: 
         console.log ('hoy es miércoles');
         break;
    case 4: 
         console.log ('hoy es jueves');
         break;
    case 5: 
         console.log ('hoy es viernes');
         break;
    case 6: 
         console.log ('hoy es sábado');
         break;
    case 7: 
         console.log ('hoy es domingo');
         break;
    default: 
    console.log ('Día no válido'); //cuando se pone un valor que no corresponde por ejempleo si cambiamos 3 por 8
}

//Pueden usar diferentes valores en el mmismo case

let mes = 'Octubre';

switch (mes) {
    case 'enero':
    case 'febrero':
    case 'marzo':
    console.log ('estamos en el 1er trimestre')
    break;
    case 'abril':
    case 'mayo':
    case 'junio':
    console.log ('estamos en el 2º trimestre')
    break;
    case 'julio':
    case 'agosto':
    case 'septiembre':
    console.log ('estamos en el 3º trimestre')
    break;
    case 'octubre':
    case 'noviembre':
    case 'diciembre':
    console.log ('estamos en el 4º trimestre')
    break;
   default:
       console.log ('mes no válido');

}