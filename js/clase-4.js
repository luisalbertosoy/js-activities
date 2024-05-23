/* function simpleSum (numberOne, numberTwo) {
    return numberOne + numberTwo;
}

let result = simpleSum (6, 6);

console.log(result); */

/* function calculator (numberOne, numberTwo, operation) {
    switch (operation) {
        case '+':
            return numberOne + numberTwo;
            break;
        case '-':
            return numberOne - numberTwo;
            break;
        case '*':
            return numberOne * numberTwo;
            break;
        case '/':
            return numberOne / numberTwo;
            break;
        default:
            return 0;
            break;
    }
}

console.log(calculator(6, 2, '*')); */

/* let nombre = 'Totoro';

function getName () {
    let nombre = 'Filomena';
    console.log(nombre);
}

console.log(nombre);

getName(); */

/* function sumar (numberOne, numberTwo) {
    let resultado = numberOne + numberTwo;
    return resultado;
}

function restar (numberOne, numberTwo) {
    let resultado = numberOne - numberTwo;
    return resultado;
}

console.log(sumar(4, 4));
console.log(restar(6, 3));

const suma = function (a, b) { return a + b };
const resta = function (a, b) { return a - b };

console.log( suma(4, 4) );
console.log( resta(10, 5) );

const simpleSuma = (a, b) => { return a + b};
const simpleResta = (a, b) => { return a - b };

console.log( simpleSuma(6, 6) );
console.log( simpleResta(9, 3) ); */

/* const suma = (a, b) => { return a + b };
const resta = (a, b) => { return a - b};

const iva =  x => { x * .16 };
let precioProducto = 500;
let descuento = 50;

let nuevoPrecio = resta (suma(precioProducto, iva(precioProducto)), descuento);
console.log(nuevoPrecio); */

/* function suma (a, b) {
    let resultado = a + b;
}

suma(3, 3);

console.log(resultado); */

function saludar() {
    let nombre = prompt('Ingresa tu nombre, me gustaría saludarte');
    console.log('Hola ' + nombre + ', mucho gusto en conocerte.');
}

saludar();
saludar();
saludar();
saludar();
saludar();

function calculadora(a, b) {
    
}