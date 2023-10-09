class Forma {
    constructor(cor) {
        this.cor = cor;
    }
    descrever() {
        console.log(`Essa forma ${this.cor}`)
    }
}
////3°

class Quadrado extends Forma {
    constructor(cor, tamanhoDoLado) {
        super(cor)
        this.tamanhoDoLado = tamanhoDoLado;
    }
    calcularArea() {
        return this.tamanhoDoLado ** 2;
    }
    descrever() {
        console.log(`Este quadrado é ${this.cor} e sua área é ${this.calcularArea()}`)
    }
} 
class Circulo extends Forma{
    constructor(raio, cor){
        super(raio)
        this. cor = cor;
        this.raio = raio;
    }
    calcularArea(){
        return 3.14*(this.raio**2)
    }
    descrever(){
        console.log(`Este circulo é ${this.cor} e sua área é ${this.calcularArea()}`)
    }
}
