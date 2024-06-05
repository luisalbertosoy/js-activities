let simpsons = ['Homero', 'marge', 'lisa', 'maggie', 'bart', 'Lenny', 'Bob', 'Apu', 'Flanders'];

let frutas = ['fresa', 'mango'];


for ( let i = 0; i < simpsons.length; i++) {
    console.log(simpsons[i]);
}

/* let character_1 = {
    name: 'Homer',
    lastname: 'Simpson',
    age: 40,
    married: true,
    address: 'Avenida Siempre Viva No. 310',
    sector: 7,
    section: 'G',
} */

// Métodos Mutables

/* simpsons.push('Huesos'); // agrega al final
simpsons.unshift('Bob'); // agrega al inicio    

simpsons.shift(); // elimina el primero
simpsons.pop(); // elimina el último */

/* simpsons.splice(0, 3);

for (let i = 0; i < simpsons.length; i++) {
    console.log((i+1) + '. ' + simpsons[i]);
}

const cantidad = Number(prompt('Cuántos elementos desea eliminar'));
const desde = Number(prompt('Ingrese 0 para eliminar'));

const rest = simpsons.splice(desde, cantidad);

for (let i = 0; i < simpsons.length; i++) {
    console.log('valor eliminado: ' + desde[i]);
}

// .concat suma arrays

let inventario = simpsons.concat(frutas);

console.log(inventario);

// .slice corta una fracción del array (elementos) */

