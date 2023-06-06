let celular1 = new Celular(
    "a1",
    "Apple",
    "Iphone 8",
    "8GB",
    "60GB",
    "processador",
    "5",
    "iphone8.webp"
);
let celular2 = new Celular(
    "a2",
    "Apple",
    "Iphone 10",
    "",
    "",
    "",
    ""
);
let celular3 = new Celular(
    "a3",
    "Apple",
    "Iphone 11",
    "",
    "",
    "",
    ""
);
let celular4 = new Celular(
    "a4",
    "Apple",
    "Iphone 12",
    "",
    "",
    "",
    ""
);
let celular5 = new Celular(
    "a5",
    "Apple",
    "Iphone 13",
    "",
    "",
    "",
    ""
);


// document.write(`
//     <div class='card'>
//         <img class='foto' src='img/${celular1.foto}' />
//         <div class='info'>
//             <h3 class='modelo'>${celular1.modelo}</h3>
//             <p class='marca'>${celular1.marca}</p>
            
//             <span class='outros'>${celular1.processador}</span>
//             <span class='separador'>|</span>
//             <span class='outros'>${celular1.armazenamento}</span>
//             <span class='separador'>|</span>
//             <span class='outros'>${celular1.ram}</span>
//             <span class='separador'>|</span>
//             <span class='outros'>${celular1.qtdDeCameras}</span>
//             <span class='outros'>câmeras</span>
//         </div>
//     </div>
// `);



let meusProdutosTop = new Favoritos();

// Adicionando produtos À primeira lista de favoritos
meusProdutosTop.adicionarProduto(celular1);
meusProdutosTop.adicionarProduto(televisao1);

