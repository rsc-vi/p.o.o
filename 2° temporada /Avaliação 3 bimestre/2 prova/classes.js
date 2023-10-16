//1
class Participante {
    constructor(id, nome, numeroDaCamisa) {
        this.id = id;
        this.nome = nome;
        this.numeroDaCamisa = numeroDaCamisa;
    }
}
//2
class Professor extends Participante {
    constructor(id, nome, numeroDaCamisa, siape) {
        super(id, nome, numeroDaCamisa)
        this.siape = siape;
    }
}
//3
class Aluno extends Participante {
    constructor(id, nome, numeroDaCamisa, matricula) {
        super(id, nome, numeroDaCamisa)
        this.matricula = matricula;
    }
}
//4
class Time {
    constructor(nome) {
        this.nome = nome;
        this.participante = []
    }
    //5    
    adicionarParticipante(participante) {
        if (participante instanceof Aluno) {
            this.participante.push(participante);
        }
        else {
            console.log("os times só podem ser formados por alunos")
        }
    }
}