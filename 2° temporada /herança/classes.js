class Participante {
    constructor(nome, cpf, dataDeNascimento) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataDeNascimento = dataDeNascimento;
    }
}
//extends indica quem é a classe mãe
class Aluno extends Participante {
    constructor(nome, cpf, dataDeNascimento, matricula) {
        //super chama o constructor da classe mãe
        super(nome, cpf, dataDeNascimento);
        this.matricula = matricula;
    }
}

class Professor extends Participante {
    constructor(nome, cpf, dataDeNascimento, siape, formacao) {
        super(nome, cpf, dataDeNascimento);
        this.siape = siape;
        this.formacao = formacao;
    }
}

class EventoAcademico {
    constructor() {
        this.listaDeParticipantes = [];
    }


    cadastrarParticipante(participante) {
        //instanceof verifica a classe do objeto
        if(participante instanceof Participante){
            this.listaDeParticipantes.push(participante);
        } else{
            console.error('Só é permitido cadastrar Alunos')
        }
    }
}

