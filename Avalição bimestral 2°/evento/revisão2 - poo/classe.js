class Evento {
    constructor(id, descricao, data) {
        this.id = id;
        this.descricao = descricao;
        this.data = data;
    }
}
class Agenda {
    constructor() {
        this.eventos = [];
    }
    adicionarEvento(evento) {
        this.eventos.push(evento)
    }
    excluirEvento(id) {
        for (let i = 0; i < this.eventos.length; i++) {
            if (this.eventos[i].id == id) {
                this.eventos.splice(i, 1)
                i--
            }
        }
    }
}
