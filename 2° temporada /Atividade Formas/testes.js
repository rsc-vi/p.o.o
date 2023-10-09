let quadrado = new Quadrado("coral", 2);
let circulo = new Circulo(3, 'coral');

quadrado.descrever();
quadrado.calcularArea();

circulo.descrever();
circulo.calcularArea();

if (quadrado instanceof Forma) {
    console.log("É uma forma")
} else {
    console.log("Não é uma Forma, fera!")
}
