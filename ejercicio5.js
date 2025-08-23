class cuentaBancaria {
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }

    mostrarSaldoActual() {
        return  `Tu saldo actual es: ${this.saldo} pesos` //ussando return evitamos que nos tire undefined en la consola. 
    }

    depositarDinero(dinero) {
        if (dinero > 0){
            this.saldo += dinero // significa el saldo anterior + el dinero agregado es como: this.saldo = this.saldo + dinero.
            console.log(`Usted ha depositado más dinero a su cuenta >:3`);
            console.log(this.mostrarSaldoActual()); //mostramos el saldo nuevo actualizado.
        } else {
            console.log("Dinero depositado incorrectamente");
        }
    }

    retirarDinero(dineroARetirar) {
        if (dineroARetirar < this.saldo){
            this.saldo -= dineroARetirar //tomamos el saldo anterior y restamos el dinero que queremos retirar.
            console.log(this.mostrarSaldoActual());
            return dineroARetirar; //salida para devolver algo.
        } else {
            console.log('Saldos insuficientes :c');
            return this.saldo;
        }

    }
}

const cuentaDeLaura = new cuentaBancaria("Laura Riascos", 100000);
console.info(cuentaDeLaura.mostrarSaldoActual());
cuentaDeLaura.depositarDinero(20000);
cuentaDeLaura.retirarDinero(50);