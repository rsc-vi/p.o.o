function desenharCards(estoque, divcontainerDeCards) {
    for (let i = 0; i < estoque.listaDeProdutos.length; i++) {
        divcontainerDeCards.innerHTML += `
        <div class='card'>
        
            <h3 class='descricao'>${estoque.listaDeProdutos[i].descricaoProduto}
            <h3 class='Produto'>${estoque.listaDeProdutos[i].precoUnitario}
            </h3>

        </div>
        `
    }
}
//////esta com erro
