let minhaAgenda = new AgendaTelefonicaato();

let contato1 = new Contato('fulano', '(82)99999-9999');
let contato2 = new Contato('sicrano', '(82)88888-8888');
let contato3 = new Contato('beltrano', '(82)77777-7777');
let contato4 = new Contato('rebeca', '(82)66666-6666');

minhaAgenda.adicionarcontato(contato4);
minhaAgenda.adicionarcontato(contato3);
minhaAgenda.adicionarcontato(contato2);
minhaAgenda.adicionarcontato(contato1);

minhaAgenda.excluircontato('beltrano');

console.log(minhaAgenda);