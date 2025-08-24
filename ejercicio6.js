class Triangulo {
    constructor(lado1, lado2, lado3) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    verificarTipo() {
        if (this.lado1 === this.lado2 && this.lado2 === this.lado3) {
            return "Tu triángulo es equilátero"; // revisamos si todos los lados son iguales.
        } else if(this.lado1 === this.lado2 || this.lado2 === this.lado3 || this.lado1 === this.lado3) {
            return "Tu triángulo es isósceles"; // revisamos si al menos de sus lados son iguales.
        } else {
            return "Tu triángulo es escaleno :p" // si no se cumplen las primeras 2 condiciones, sabemos que es escaleno.
        }
    }



        perimetro() {
            return this.lado1 + this.lado2 + this.lado3;
        }
}

const miTriangulo = new Triangulo (7, 5, 7);
console.log(miTriangulo.perimetro());
console.log(miTriangulo.verificarTipo());