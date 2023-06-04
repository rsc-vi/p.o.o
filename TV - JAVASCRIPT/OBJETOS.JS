
let TV1 = new TV(
    'Samsung',
    'UN32T4300AGXZD',
    32,
    'tv1.jpg'  
);
let TV2 = new TV(
    'TCL',
    '43P635',
    43,
    'tv2.jpg'

);
let TV3 = new TV(
    'AOC',
    '32S5135/78G',
    32,
    'tv3.jpg'
    
);    
let TV4 = new TV(
    'LG',
    '50UQ7950',
    '50',
    'tv4.jpg'
);
let TV5 = new TV(
    'Philco',
    'Ptv32g70rch',
    '32',
    'tv5.jpg'
);

let listaDeTv = [TV1,TV2,TV3,TV4,TV5]
for(let i = 0; i<listaDeTv.length; i++){
    document.write(`
        <h1><div> ${listaDeTv[i].marca}</h1> </div>
        <div> ${listaDeTv[i].modelo}</div>
        <div> ${listaDeTv[i].tamanho}</div>
        <img src = 'img/${listaDeTv[i].foto}' >
`)
}