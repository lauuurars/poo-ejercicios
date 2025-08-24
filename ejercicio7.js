class Vehículo {
    mover(){
        return `Me estoy moviendo lol`;
    }
}

class Bicicleta extends Vehículo {
    mover() {
        return `Soy una bici que se mueve!!`;
    }
}

class Coche extends Vehículo {
    mover() {
        return `Soy un coche que se mueve!!`;
    }
}

class Avión extends Vehículo {
    mover() {
        return `Soy un avión que se mueve!!`;
    }
}

const bici = new Bicicleta();
console.log(bici.mover());

const cochecito = new Coche();
console.log(cochecito.mover());

const avioncito = new Avión();
console.log(avioncito.mover());