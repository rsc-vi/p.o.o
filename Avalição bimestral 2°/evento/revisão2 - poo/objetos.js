let minhaAgenda = new Agenda();

let evento1 = new Evento(1, 'dia da mulher', '08/03');
let evento2 = new Evento(2, 'dia do estudante', '11/08');
let evento3 = new Evento(3, 'natal', '25/12');
let evento4 = new Evento(4, 'idependencia do brasil', '07/09');

minhaAgenda.adicionarEvento(evento4);
minhaAgenda.adicionarEvento(evento3);
minhaAgenda.adicionarEvento(evento2);
minhaAgenda.adicionarEvento(evento1);

minhaAgenda.excluirEvento(3);

console.log(minhaAgenda);