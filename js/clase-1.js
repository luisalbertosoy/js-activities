let userName = prompt('Hola!, un nombre de usuario por favor.');
let birthdayYear = prompt('Ingresa tu año de nacimiento para verificar tu edad');

let age = 2024 - birthdayYear;


if (age >= 18) {
    alert('Bienvenido, ' + userName + ' tu edad es ' + age + ', tienes la edad para ingresar a the JavaScript Club.');
}
else {
    alert('Lo sentimos, ' + userName + ' tu edad es ' + age + ', no tienes la edad para ingresar a the JavaScript Club.');
};

console.log('Development branch created');