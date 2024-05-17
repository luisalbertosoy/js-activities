/* for (let i = 1; i <= 4; i++) {
    let nombre = prompt('Ingresa tu nombre para recibir un turno');
    if (nombre == "") {
        alert('No ingresaste un nombre');
        i = i - 1;
        continue;
    }
    console.log('Hola ' + nombre + ' tienes el número ' + i);
} */

//Switch

/* let option;

while (option != 0) {
    let animal = prompt('Ingrese el animal que desea escuchar su sonido');

    switch (animal) {
        case 'perro':
            alert('El ' + animal + 'Hace Guauf');
            break;
        case 'gato':
            alert('El ' + animal + 'Hace Miau');
            break;
        case 'loro':
            alert('El ' + animal + 'Hace Haaa haaa');
            break;
        case 'delfin':
            alert('El ' + animal + 'Hace Ikikikikik');
            break;
        case 'zorro':
            alert('El ' + animal + 'Hace Tin tin tin tin');
            break;
        default:
            alert('No conozco el sonido de ese animal');
    }
} */

// Cajero Automático

/**
 * 1. Ver saldo
 * 2. Ingresar dinero
 * 3. Retirar parcialmente dinero
 * 4. Retirar todo el dinero
 * 0. Opción de salida
*/

let saldo = 0;

let option;

while (option != 0) {
    option = prompt(`
    Buen día, ingresa una de las siguientes opciones:
    * 1. Ver saldo
    * 2. Ingresar dinero
    * 3. Retiro parcial de dinero
    * 4. Retiro total de dinero
    * 0. Salir
    `);

    /* switch (option) {
        case '1':
            alert(saldo);
            break;
        case '2':
            const moneyIn = Number(prompt('Ingrese la cantidad que desea agregar'));
            saldo += moneyIn;
            alert('Transacción realizada con éxito, tu nuevo saldo es: ' + saldo);
            break;
        case '3':
            const moneyOutPartial = Number(prompt('Ingrese la cantidad que desea retirar'));
            saldo -= moneyOutPartial;
            alert('Fondos retirados con éxito, tu nuevo saldo es: ' + saldo);
            break;
        case '4':
            saldo = 0;
            alert('Fondos totales retirados con éxito, tu nuevo saldo es: ' + saldo);
            break;
        case '0':
            alert('Gracias por usar ATM Services, vuelva pronto.')
            break;
        default:
            option = '';
            alert('Ingrese opción válida');
            continue;
    } */
    if (option == 1) {
        alert('Tu saldo es: ' + saldo);
    } else if (option == 2) {
        const moneyIn = Number(prompt('Ingrese la cantidad que desea agregar'))
        saldo += moneyIn;
        alert('Transacción rerealizada con exito, tu nuevo saldo es: ' + saldo);
    } else if (option == 3) {
        const moneyOutPartial = Number(prompt('Ingrese la cantidad que desea retirar'))
        saldo -= moneyOutPartial;
        alert('Transacción rerealizada con exito, tu nuevo saldo es: ' + saldo);
    } else if (option == 4) {
        saldo = 0;
        alert('Fondos totales retirados con éxito, tu nuevo saldo es: ' + saldo);
    } else if (option == 0) {
        alert('Gracias por usar ATM Services, vuelve pronto.');
    } else {
        alert('Ingrese opción válida');
    }
}

/* switch (option) {
    case '1':
        alert(saldo);
        break;
    case '2':
        const moneyIn = Number(prompt('Ingrese la cantidad que desea agregar'));
        saldo += input;
        alert('Transacción realizada con éxito, tu nuevo saldo es: ' + saldo);
        break;
    case '3':
        const moneyOutPartial = Number(prompt('Ingrese la cantidad que desea retirar'));
        saldo -= moneyOutPartial;
        alert('Fondos retirados con éxito, tu nuevo saldo es: ' + saldo);
        break;
    case '4':
        saldo = 0;
        alert('Fondos totales retirados con éxito, tu nuevo saldo es: ' + saldo);
        break;
    default:
        alert('Ingrese opción válida');
        break;
} */