let professor1 = new Professor('Alexsander', '111.111.111-11', '17/12/1990', 'hgdfrtry', 'graduação');
let professor2 = new Professor('Clécio', '222.222.222-22', '17/12/1980', 'hyjewqwa', 'graduação');
let aluno1 = new Aluno('Rebeca', '333.333.333-33', '07/09/2006', '2022987474');
let aluno2 = new Aluno('Jaciane', '444.444.444-44', '03/03/2007', '2022948497');
let aluno3 = new Aluno('Thayslane', '555.555.555-55', '10/07/2006', '2022456873');

let rogadx = new EventoAcademico();

rogadx.cadastrarParticipante(professor1);
rogadx.cadastrarParticipante(professor2);
rogadx.cadastrarParticipante(aluno1);
rogadx.cadastrarParticipante(aluno2);
rogadx.cadastrarParticipante(aluno3);
rogadx.cadastrarParticipante(7);


console.log(rogadx);