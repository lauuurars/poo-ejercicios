class ANIMAL {
    constructor (nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }

    hacerSonido() {
        return "sonido x"
    }

    //añadimos clases hijas

} 

class PERRO extends ANIMAL {
    hacerSonido() {
        return `Mi especie es ${this.especie} y mi sonido es guau guau`;
    }
}

class GATO extends ANIMAL {
    hacerSonido() {
        return `Soy un gato y mi sonido es miauuuuu!!!`
    }
}

const perro = new PERRO();
console.log(perro.hacerSonido()); 

const gato = new GATO();
console.log(gato.hacerSonido());