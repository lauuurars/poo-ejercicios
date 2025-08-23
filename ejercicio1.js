class coche {
    constructor (marca, modelo, año ) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    // agregamos métodos

    mostrarInfo(){
        console.log(`La marca del coche es: ${this.marca}, modelo: ${this.modelo}, y del año: ${this.año} `)
    }

    determinarAntiguo() {
        if (this.año < 2000) {
            console.log("El coche es antiguo!!");
        } 
    }

    verificarLujo() {
    const marcasLujo = ["Mercedes", "BMW", "Audi"];
    return marcasLujo.includes(this.marca); //includes es un método para comparar elemento por elemento.
    }

} 
const audi = new coche ("Audi", "Q7", 1997);

console.log(audi.mostrarInfo());
console.log(audi.determinarAntiguo());
console.log(audi.verificarLujo());