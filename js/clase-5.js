/* class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = Math.round(this.precio * 1.16);
    }
    vender() {
        this.vendido = true;
    }
}

const producto1 = new Producto('Audífonos JBL BT', '899');
const producto2 = new Producto('Memoria USB KIngston 128 GB', '499');
producto1.sumaIva();
producto2.sumaIva();
producto1.vender();

console.log(producto1);
console.log(producto2); */

/**
 * @param {string} id
 * @param {string} name
 * @param {number} stock
 * @param {number} 
 */


const producto = {
    id: '02345',
    name: 'Play Station 5',
    stock: 40,
    price: 7999,
}

function showProperty(property, object) {
    return object[property];
}

/* console.log('SKU: ' + producto.id,\n 'Product name: ' + producto.name, 'Stock: ' + producto.stock, 'Price: ' + producto.price); */

function Product(id, name, stock, price) {
    this.id = id;
    this.name = name;
    this.stock = stock;
    this.price = price;
}

const product1 = new Product('0214', 'Nintendo Switch', 122, 4999);
const product2 = new Product('0215', 'Mario Bros 2040', 32, 899);

console.log(product1);

