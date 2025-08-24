class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarInfo() {
        return `Mi producto es ${this.nombre} y su costo es $${this.precio}`;
    }
}

class ProductoElectronico extends Producto {
    constructor(nombre, precio, garantia) {
        super(nombre, precio);
        this.garantia = garantia;
    }

    mostrarInfo() {
        return `Mi producto es ${this.nombre}, su costo es $${this.precio} y su garantía es de ${this.garantia} años`;
    }
}

const miProducto = new ProductoElectronico ("iPhone 17", 250000, 3);
console.log(miProducto.mostrarInfo());