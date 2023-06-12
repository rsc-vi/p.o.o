// 1° 
class Passageiro {
    constructor(andarPretendido, peso) {
        this.andarPretendido = andarPretendido;
        this.peso = peso;
    };

};
// 2°
class Elevador {
    constructor(pesoMaximoSuportado) {
        this.andarAtual = 0
        this.pesoMaximoSuportado = 9
        this.listaDePassageiros = []

    };
    // 3°
    pesoMaximoSuportado(passageiro) {

        if (this.listaDePassageiros.length < this.pesoMaximoSuportado) {
            this.listaDePassageiros.push(passageiro);

            console.log(`1 passageiro que deseja ir ao andar ${passageiro.andarPretendido} entrou no elevador. Agora o elevador tem ${this.listaDePassageiros.length} passageiros.`);
        } else {
            console.log(`O passageiro não pode entrar no elevador. Agora o elevador tem ${this.listaDePassageiros.length} passageiros.`);


        };


    };
    // 4°
    //4.1
    movimentar(andarDeDestino) {
        this.andarAtual = andarDeDestino;
        console.log(`Agora o elevador está no andar ${this.andarAtual}.`);

        let contar = 0;

        for (let i = 0; i < this.listaDePassageiros.length; i++) {
            if (this.listaDePassageiros[i].andarPretendido == this.andarAtual) {
                this.listaDePassageiros.splice(i, 1);
                contar++
            }
        };

        console.log(`${contar} saíram do elevador.`);
        console.log(`${this.listaDePassageiros.length} continuam no elevador.`);
    };
}

//abagaras

