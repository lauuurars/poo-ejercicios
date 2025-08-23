class PERSONA {
    constructor(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    mostrarDatos() {
        return `Hola soy ${this.nombre}, tengo ${this.edad} y mi profesión es ${this.profesion}`
    }

    verificarEdad() {
        if (this.edad >= 18) {
            return "Eres mayor de edad :D"
        } else {
            return "No eres mayor de edad :c"
        }
    }
}

const laura = new PERSONA("Laura", 18, "Diseñadora uwu");
console.log(laura.mostrarDatos());
console.log(laura.verificarEdad());