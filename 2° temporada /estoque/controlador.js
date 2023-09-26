let inputdescricaoProduto = document.getElementById("iptdescricaoProduto");
let inputPrecoUnitario = document.getElementById("iptPrecoUnitario");
let btCadastrar = document.getElementById("btCadastrar");
let divcontainerDeCards = document.getElementById("containerDeCards")

let estoque = new Estoque();

btCadastrar.addEventListener('click', quandoClicarNoBotaoCadastrar);


function quandoClicarNoBotaoCadastrar(){
    let produto = new Produto(
        inputdescricaoProduto.value,
        inputPrecoUnitario.value,
    );

    estoque.adicionarProduto(produto)
    
    desenharCards(estoque, divcontainerDeCards)
};

