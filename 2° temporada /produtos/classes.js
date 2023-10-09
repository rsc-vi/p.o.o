class Produto {
    constructor(descricao, precoUnitario, fabricante) {
        this.descricao = descricao;
        this.precoUnitario = precoUnitario;
        this.fabricante = fabricante;
    }
}

class Celular extends Produto {
    constructor(descricao, precoUnitario, fabricante, armazenamento, processador, tamanhoDaTela) {
        super(descricao, precoUnitario, fabricante);
        this.armazenamento = armazenamento;
        this.processador = processador;
        this.tamanhoDaTela = tamanhoDaTela;
    }
}

class CaixinhaDeSom extends Produto {
    constructor(descricao, precoUnitario, fabricante, potencia, temLed, dimensoes) {
        super(descricao, precoUnitario, fabricante);
        this.potencia = potencia;
        this.temLed = temLed;
        this.dimensoes = dimensoes;
    }
}

class Estoque {
    constructor() {
        this.listaDeProdutos = [];
    }
    adicionarProduto(produto) {
        if(produto instanceof Produto){
            this.listaDeProdutos.push(produto);
        } else{
            console.error('ANDARNA > TAIRN');
        }
    }
    
}