class Libro {
    constructor(titulo, autor, año) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
    }

    infoLibro() {
        return `El libro es: ${this.titulo}, fue escrito por: ${this.autor} y se publicó en el año: ${this.año}`;
    }

    libroAntiguo() {
        if (this.año < 1950) {
            return `Tu libro es antiguo`
        }
    }
}

const mujercitas = new Libro ("Mujercitas", "Louisa May Alcott", 1868);
console.log(mujercitas.infoLibro());
console.log(mujercitas.libroAntiguo());