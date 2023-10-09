//
//let inputTurma = document.getElementById("iptTurma");
let inputPrimeiroNome = document.getElementById("iptPrimeiroNome");
let inputSegundoNome = document.getElementById("iptSegundoNome");
let inputDatadeNascimento = document.getElementById("iptDatadeNascimento");
let inputMatricula = document.getElementById("iptMatricula");
let buttonCadastrar = document.getElementById("btnCadastrar");

//estaainerDeCards = document.getElementById('containerDeCards')

//LISTENER-----------------------------------------------------------------
buttonCadastrar.addEventListener('click', quandoClicarEmCadastrar);
//FIM DO LISTENER----------------------------------------------------------


//OBJETOS------------------------------------------------------------------
let turma2ano = new Turma();
 //é a div que vai receber os cards:
//let cont

//-------------------------------------------------------------------------
function quandoClicarEmCadastrar(){
    let alunoTemporario = new Aluno(
        //inputTurma.value,
        inputPrimeiroNome.value,
        inputSegundoNome.value,
        inputDatadeNascimento.value,
        inputMatricula.value
    );
    turma2ano.adicionarAluno(alunoTemporario);
    desenharCards(containerDeCards)
} 


///ATIVIDADE;
// EXCLUIR TUDO RELACIONADO A TURMA:
// NA CLASSE ALUNO;
// NO HTML;
// NO DESIGNER.JS