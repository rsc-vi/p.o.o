class Jogador {
    constructor(_id, _nome, _numeroDaCamisa) {
        this._id = _id;
        this._nome = _nome;
        this._numeroDaCamisa = _numeroDaCamisa;
    }
}
class Time {
    constructor(nome) {
        this._nome = nome;
        this._jogadores = [];
    }

    adicionarJogador(jogador) {
        this._jogadores.push(jogador)
    }

    removerJogador(id) {
        for (let i = 0; i < this._jogadores.length; i++) {
            //Este if verifica se o nome da entrada é igual ao nome do objeto que está no indice i.
            if (id == this._jogadores[i].id) {
                this._jogadores.splice(i, 1);
                i--;
            }
        }
    }
} 
