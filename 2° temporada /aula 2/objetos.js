let aluno1 = new Aluno('912-A', 'Rebeca', 16, 20232006, 'https://lh3.googleusercontent.com/d/1vw8sfjAXTlZpfwTJNJSXJQd1sOgKiVb0')
let aluno2 = new Aluno('912-A', 'Jaciane', 16, 20232007, 'https://lh3.googleusercontent.com/d/1d5oA9rmApqBH6Mt3n75Dto7bETmuus6x');
let aluno3 = new Aluno('912-A', 'Thayslane', 17, 20232008, 'https://lh3.googleusercontent.com/d/1kQcfoPxzC3k0Jje8t6Qwo8we7JQhsdvR');
//console.log(aluno1);
//crie uma array, depois adicione os tês alunosa esse array
let listaDeAlunos = [];
listaDeAlunos.push(aluno1, aluno2, aluno3)

//percorra o array e imprima os dados de cada
//aluno no console
for (let i = 0; i < listaDeAlunos.length; i++) {

    document.write(`  
   <div class='card'>
        
        <div class='cabecalho'>
            <div>
                <p class='turma'>${listaDeAlunos[i].turma}</p>
                <h3 class='nome'>${listaDeAlunos[i].nome}</h3>
            </div>
            <img class='logo' src='img/IFAL.png'/>
        </div>



        </div>
    
     <div class='conteudo'>
        <img class='foto' src='${listaDeAlunos[i].foto.replace('https://drive.google.com/file', 'https://lh3.googleusercontent.com')}'>
    <div class='info'>
    <div>
        <p class='label'>Idade</p>
        <p class='valor'>${listaDeAlunos[i].idade}</p>
       
    </div>
       
    <div>
            <p class='label'>Matricula</p>
            <p class='valor'>${listaDeAlunos[i].matricula}</p>
        </div>
    </div>
    
   <div>Turma:${listaDeAlunos[i].turma}</div>
   <div>Nome:${listaDeAlunos[i].nome}</div>
   <div>Idade:${listaDeAlunos[i].idade}</div>
   <div>Matricula:${listaDeAlunos[i].matricula}</div>

    </div>`)
}

for (let i = 0; i < listaDeAlunos.length; i++) {
    console.table(listaDeAlunos[i])
}
