/* let userName = prompt('Hola!, un nombre de usuario por favor.');
let birthdayYear = prompt('Ingresa tu año de nacimiento para verificar tu edad');

let age = 2024 - birthdayYear;


if (age >= 18) {
    alert('Bienvenido ' + userName + ' tu edad es ' + age + ', tienes la edad para ingresar a the JavaScript Club.');
}
else {
    alert('Lo sentimos ' + userName + ' tu edad es ' + age + ', no tienes la edad para ingresar a the JavaScript Club.');
};

console.log('Development branch created'); */

/* let userName = prompt("Ingresar nombre de usuario");

if (userName == "") {
    alert("No ingresaste el nombre de usuario");
}
else {
    alert("Nombre de usuario ingresado " + userName);
}

console.log("Hola " + userName); */

/* let price = prompt("Ingresa un número del 1 al 200");

if (price == "") {
    alert("No ingresaste ningún número")
}
else if (price < 20) {
    alert("El precio es menor que $20.00")
}
else if (price < 50) {
    alert("El precio es menor a $50.00")
}
else if (price < 100) {
    alert("El precio es menor que $100.00")
}
else {
    alert("El precio es mayor que $100.00")
} */

/* let enterName = prompt("Ingresar nombre");
let enterLastName = prompt("Ingresar primer apellido");

if ((enterName != "") && (enterLastName != "")) {
    alert("Nombre: " + enterName + "\nApellido: " + enterLastName);
} else {
    alert("Error: Ingresar nombre y apellido")
} */

/* let enteredName = prompt("Ingresar nombre");

if ((enteredName == "ANA") || (enteredName == "ana") || (enteredName == "aNa") || (enteredName == "Ana") || (enteredName == "aNA") || (enteredName == "ANa") || (enteredName == "anA") || (enteredName == "AnA")) {
    alert("El nombre ingresado es Ana");
} else {
    alert("El nombre ingresado no es Ana");
} */

let enteredName = prompt("Ingresar nombre correcto");

if ((enteredName != "") && (enteredName == "ANA") || (enteredName == "ana") || (enteredName == "aNa") || (enteredName == "Ana") || (enteredName == "aNA") || (enteredName == "ANa") || (enteredName == "anA") || (enteredName == "AnA")) {
    alert("Hola Ana");
} else {
    alert("Error: Ingresar nombre válido");
}

