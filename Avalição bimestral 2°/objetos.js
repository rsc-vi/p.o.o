let meuTime = new Time('Superstar Soccer')

let jogador1 = new Jogador(1, 'Allejo', 7);
let jogador2 = new Jogador(2, 'Gomez', 11);
let jogador3 = new Jogador(3, 'Beranco', 10);
let jogador4 = new Jogador(4, 'Jaciane', 9);

meuTime.adicionarJogador(jogador4);
meuTime.adicionarJogador(jogador3);
meuTime.adicionarJogador(jogador2);
meuTime.adicionarJogador(jogador4);

meuTime.removerJogador(3);

console.log(meuTime);