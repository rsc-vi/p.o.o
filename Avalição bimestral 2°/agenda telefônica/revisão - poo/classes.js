class Contato {
    constructor(nome, telefone) {
        this.nome = nome;
        this.telefone = telefone;

    }
}
class AgendaTelefonicaato {
    constructor() {
        this.listadeContatos = [];

    }
    adicionarcontato(contato) {
        this.listadeContatos.push(contato)
    }
    excluircontato(nome) {
        for (let i = 0; i < this.listadeContatos.length; i++) {
            if (this.listadeContatos[i].nome == nome) {
                this.listadeContatos.splice(i, 1)
                i--
            }
        }
    }
}