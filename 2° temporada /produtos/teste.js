let celular1 = new Celular('Nunca usado.', 'R$4.500', 'SAMSUNG', '500GB', 'RXT CELERETION', '15');
let celular2 = new Celular('Novo.', 'R$5.000', 'LG', '120GB', 'INTCORE', '19');
let celular3 = new Celular("Aprova d'água.", '10.000', 'IPHONE', '1T', 'STARWORS', '19' );
let caixinha1 = new CaixinhaDeSom('Tem de varias cores. muito boa. compre.', 'R$300', 'SAMSUNG', '100', 'GRANDE', '12X13');
let caixinha2 = new CaixinhaDeSom('Tem de varias cores. muito boa. compre.', 'R$10.000', 'JBL', '100', 'GRANDE', '12X13');

let estoque = new Estoque();

estoque.adicionarProduto(celular1);
estoque.adicionarProduto(celular2);
estoque.adicionarProduto(celular3);

estoque.adicionarProduto(caixinha1);
estoque.adicionarProduto(caixinha2);

console.log(estoque);
