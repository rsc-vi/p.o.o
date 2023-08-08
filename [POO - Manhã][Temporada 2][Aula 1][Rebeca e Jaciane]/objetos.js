let aluno1 = new Aluno('rebeca', 17, 20232006);
let aluno2 = new Aluno('jaciane', 16, 20232007);
let aluno3 = new Aluno('thayslane', 15, 20232008);
//console.log(aluno1);
//crie uma array, depois adicione os tês alunosa esse array
let listaDeAlunos = [];
listaDeAlunos.push(aluno1, aluno2, aluno3)

//percorra o array e imprima os dados de cada
//aluno no console
for (let i = 0; i < listaDeAlunos.length; i++) {
   document.write(`  
   <div>
   ----------------
   nome:${listaDeAlunos[i].nome}
   idade:${listaDeAlunos[i].idade}
   matricula:${listaDeAlunos[i].matricula}
-------------------
    </div>
    `)
}

