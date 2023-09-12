//
let inputTurma = document.getElementById("iptTurma");
let inputPrimeiroNome = document.getElementById("iptPrimeiroNome");
let inputSegundoNome = document.getElementById("iptSegundoNome");
let inputDatadeNascimento = document.getElementById("iptDatadeNascimento");
let inputMatricula = document.getElementById("iptMatricula");
let buttonCadastrar = document.getElementById("btnCadastrar");

//esta é a div que vai receber os cards:
let containerDeCards = document.getElementById('containerDeCards')

//LISTENER-----------------------------------------------------------------
buttonCadastrar.addEventListener('click', quandoClicarEmCadastrar);
//FIM DO LISTENER----------------------------------------------------------

function quandoClicarEmCadastrar(){
    let alunoTemporario = new Aluno(
        inputTurma.value,
        inputPrimeiroNome.value,
        inputSegundoNome.value,
        inputDatadeNascimento.value,
        inputMatricula.value
    );
    listaDeAlunos.push(alunoTemporario);
    desenharCards()
    console.log(listaDeAlunos);
} 