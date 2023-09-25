let inputProduto = document.getElementById("iptProduto");
let inputPrecoUnitario = document.getElementById("iptPrecoUnitario");
let btCadastrar = document.getElementById("btCadastrar");

let estoque = new Estoque();

quandoClicarNoBotaoCadastrar.addEventListener('click', quandoClicarNoBotaoCadastrar);


function quandoClicarNoBotaoCadastrar(){
    let produto = new Produto(
        inputProduto.value,
        inputPrecoUnitario,
        btCadastrar
    );
    estoque.adicionarProduto(produto);
};