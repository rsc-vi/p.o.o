class Produto{
    constructor(descricao, precoUnitario, quantidade){
        this.descricao = descricao;
        this.precoUnitario = precoUnitario;
        this.quantidade = quantidade;
    }
}

class Estoque{
    constructor(){
        this.listaDeProdutos
    }
    adicionarProduto(produto){
        this.listaDeProdutos.push(produto);
    }
    calcularValorTotal() {
    let ValorTotal = 0
    ValorTotal += this.listaDeProdutos[i]*this.listaDeProdutos[i].quantidade
    }
}
console.log(ValorTotal);
