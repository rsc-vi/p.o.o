//6
let prof1 = new Professor(2, 'alex', 99, 'wgfatad');
let prof2 = new Professor(4, 'Osvaldo', 78, ' ksfjfh');

let aluno1 = new Aluno(5, 'Rebeca', 5, '2022587496');
let aluno2 = new Aluno(7, 'Jaciane', 7, '2022587455');
let aluno3 = new Aluno(2, 'Thayslane', 2, '2022782469');
let aluno4 = new Aluno(8, 'Davi', 8, '2022452598');
let aluno5 = new Aluno(4, 'Leticia', 4, '2022258475');
let aluno6 = new Aluno(9, 'Ellen', 9, '2022024789');
let aluno7 = new Aluno(3, 'Giiii', 3, '2022147695');
let aluno8 = new Aluno(1, 'Darline', 1, '2022045987');

let flamengo = new Time('flamengo');

flamengo.adicionarParticipante(prof1);
flamengo.adicionarParticipante(prof2);

flamengo.adicionarParticipante(aluno1);
flamengo.adicionarParticipante(aluno2);
flamengo.adicionarParticipante(aluno3);
flamengo.adicionarParticipante(aluno4);
flamengo.adicionarParticipante(aluno5);
flamengo.adicionarParticipante(aluno6);
flamengo.adicionarParticipante(aluno7);
flamengo.adicionarParticipante(aluno8);

console.log(flamengo);