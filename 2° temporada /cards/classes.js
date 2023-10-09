//crie uma classe Aluno
//ele devera ter 3 atributos
//nome
//idade
//matricula
// quadradinho do css >> display flex
class Aluno {
    ///construtor gera o objeto
    constructor(primeironome, ultimonome, dataDeNascimento, matricula, foto) {
        //this.turma = turma;
        this.primeironome = primeironome;
        this.ultimonome = ultimonome;

        this.dataDeNascimento = new Date(dataDeNascimento);
        this.matricula = matricula;
        this.foto = foto;
    }
    getNome() {
        return `${this.ultimonome} , ${this.primeironome}`
    }

    getIdade() {
        let hoje = new Date();
        return hoje.getFullYear() - this.dataDeNascimento.getFullYear();


        //return( hoje.getFullYear() - this.dataDeNascimento.getFullYear() );
    }
}
// aclasse turma deverar ter:
// 1 atributo: listraDeAlunos

// 1 metodo: adicionarAluno()
//o metodo adicionarAluno devera ter uma entrada: aluno
//a entrada deverar ser adicionado ao final do atributo listaDeAlunos

// metodo adicionarAluno devera iniciar o 
//atributo com um array vazio
class Turma{
    constructor(){
        this.listaDeAlunos = [];
    }
    adicionarAluno(aluno){
        this.listaDeAlunos.push(aluno);
    }
}


