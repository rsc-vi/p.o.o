class Titulo {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
}

class Musica extends Titulo {
    constructor(id, nome, cantores, album) {
        super(id, nome)
        this.cantores = cantores;
        this.album = album;
    }
}

class Podcast extends Titulo {
    constructor(id, nome, genero, apresentadores) {
        super(id, nome)
        this.genero = genero;
        this.apresentadores = apresentadores;
    }
}

class Playlist {
    constructor(nome) {
        this.nome = nome;
        this.titulo = [];
    }
    adicionarTitulo(titulo) {
        if (titulo instanceof Musica) {
            this.titulo.push(titulo)
        } else {
            console.log("A playlist só pode ser formada por músicas")
        }
    }
}