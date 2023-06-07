// 1° 
class Passageiro {
    constructor(andarPretendido) {
        this.andarPretendido = andarPretendido;
    };
};
// 2°
class Elevador {
    constructor() {
        this.andarAtual = 0
        this.quantidadeMaximaDePassageiros = 9
        this.listaDePassageiros = []

    };
    // 3°
    adicionarPassageiro(passageiro) {

        if (this.listaDePassageiros.length < this.quantidadeMaximaDePassageiros) {
            this.listaDePassageiros.push(passageiro);

            console.log(`1 passageiro que deseja ir ao andar ${passageiro.andarAtual} entrou no elevador. Agora o elevador tem ${this.listaDePassageiros.length} passageiros.`);
        } else {
            (`O passageiro não pode entrar no elevador. Agora o elevador tem ${this.listaDePassageiros.length} passageiros.`);


        }

        ;
    };
    // 4°
    //4.1
    movimentar(andarDeDestino) {
        this.andarAtual = andarDeDestino;
        console.log(this.andarAtual);
    }

    //4.2    
    removerPassageiros(passageiro) {
        for (let i = 0; i < this.listaDePassageiros.length; i++) {
            if (this.listaDePassageiros[i].andarPretendido == this.andarAtual) {

            }
        }

    }
};


