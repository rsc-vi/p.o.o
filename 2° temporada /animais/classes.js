class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    emitirSom() {
        console.log('RAWH');
    }
}
// -----------------------------------------------------
class Cachorro extends Animal {
    constructor(nome) {
        super(nome);
    }

    emitirSom() {
        console.log('AUAU');
    }
}
// -----------------------------------------------------
class Gato extends Animal {
    constructor(nome) {
        super(nome);
    }

    emitirSom() {
        console.log('MIAU MIAU, MEU PARCEIRO');
    }
}
// -----------------------------------------------------
class Siames extends Gato {
    // Quando há variação nas entradas de de um método,
    // diz-se que há uma SOBRECARGA do método. 
    constructor(nome, cor='cinza') {
        super(nome);
        this.cor = cor;
    }

    emitirSom() {
        console.log('MIAU MIAU, MR. XADEN');
    }
}
// -----------------------------------------------------

