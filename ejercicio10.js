class Figura {
    calcularArea() {
        return 0;
    }
}

class Circulo extends Figura {
    constructor (radio) {
        super(); //siempre se llama la propiedad super, que hereda las propiedades de la clase padre.
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * this.radio * this.radio; //área = pi x radio al cuadrado. representamos pi con Math.PI
    }
}

class Cuadrado extends Figura {
    constructor (ladoCuadrado){
        super();
        this.ladoCuadrado = ladoCuadrado; 
    }

    calcularArea() {
        return this.ladoCuadrado * this.ladoCuadrado; //área = lado x lado, o lado al cuadrado.
    }
}

class Rectángulo extends Figura {
    constructor (baseRectangulo, alturaRectangulo) {
        super();
        this.baseRectangulo = baseRectangulo;
        this.alturaRectangulo = alturaRectangulo;
    }

    calcularArea() {
        return this.baseRectangulo * this.alturaRectangulo; // área = base x altura.
    }
}


const miCirculo = new Circulo (12);
console.log(miCirculo.calcularArea());

const miCuadrado = new Cuadrado(7);
console.log(miCuadrado.calcularArea());

const miRectangulo = new Rectángulo(5, 4);
console.log(miRectangulo.calcularArea());