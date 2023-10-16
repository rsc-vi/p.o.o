let podCast1 = new Podcast("01", "Casa branca", "Investigação", "Rosiane Ferreira e Rebeca Caetano");
let podCast2 = new Podcast("02", "Casa amarela", "Musical", "Roberto Ferreira e Roberta Caetano");

let musica1 = new Musica("01", "CEO", "Netta Barzilia", "FeatCEO");
let musica2 = new Musica("02", "Asa branca", "Luiz Gonzaga", "Joias do Seetão");
let musica3 = new Musica("03", "Promessas", "Dr. Anonimpo", "Fé");
let musica4 = new Musica("04", "Agua", "doce", "rio");
let musica5 = new Musica("05", "coxinha", "com calabresa", "churrasco");
let musica6 = new Musica("06", "pão", "doce", "delícia");
let musica7 = new Musica("07", "pudim", "Dr. gostoso", "a mimi");
let musica8 = new Musica("08", "paga madeirinha", "madeirinha peda", "pega madeirinha porfavor não vai embora");

let playlist = new Playlist("CEO-Netta", "Bassa Sababa")

playlist.adicionarTitulo(podCast1);
playlist.adicionarTitulo(podCast2);

playlist.adicionarTitulo(musica1);
playlist.adicionarTitulo(musica2);
playlist.adicionarTitulo(musica3);
playlist.adicionarTitulo(musica4);
playlist.adicionarTitulo(musica5);
playlist.adicionarTitulo(musica6);
playlist.adicionarTitulo(musica7);
playlist.adicionarTitulo(musica8);

console.log(playlist)
//eu quero que tu va, va tomar uma água e se hidratar.