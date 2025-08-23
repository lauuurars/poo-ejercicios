class RECTANGULO {
    constructor (ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea() {
        return this.ancho * this.alto;
    }

    calcularPerimetro() {
        return this.ancho + this.alto;
    }

    verificarCuadrado() {
        return this.ancho === this.alto;
    }

} 

const miRectangulo = new RECTANGULO (3,5);
console.log(miRectangulo.calcularArea());
console.log(miRectangulo.calcularPerimetro());
console.log(miRectangulo.verificarCuadrado());