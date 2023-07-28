// Classe do Simulador
class CalSimulator {
    constructor() {
    }


    calcularPressao(v, t, n) {
        return (n * 0.082 * t) / v;
    }

    calcularVolume(p, t, n) {
        return (n * 0.082 * t) / p;
    }

    calcularMols(p, v, t) {
        return (p * v) / (0.082 * t);
    }

    calcularTemperatura(p, v, n) {
        return (p * v) / (0.082 * n);
    }
}

function img(t) {
    var imgTemperatura = document.getElementById('outImg');
    if (t <= 273) {
        imgTemperatura.innerHTML = `<img src=img/img-gelo.jpg>`
    } else if (t <= 373) {
        imgTemperatura.innerHTML = `<img src=img/img-agua.jpg>`
    } else {
        imgTemperatura.innerHTML = `<img src=img/img-vapor.jpg>`
    }


}
// img()
const calSimulator = new CalSimulator();

function atualizarResultados(p, v, n, t) {
    document.getElementById('outPressao').textContent = p.toFixed(2);
    document.getElementById('outVolume').textContent = v.toFixed(2);
    document.getElementById('outMols').textContent = n.toFixed(2);
    document.getElementById('outTemperatura').textContent = t.toFixed(2);
}

document.getElementById('btnCalcularPressao').addEventListener('click', function () {
    var v = parseFloat(document.getElementById('inVolume').value);
    var t = parseFloat(document.getElementById('inTemperatura').value);
    var n = parseFloat(document.getElementById('inMols').value);
    var p = calSimulator.calcularPressao(v, t, n);
    atualizarResultados(p, v, n, t);
    img(t)
});

document.getElementById('btnCalcularVolume').addEventListener('click', function () {
    var p = parseFloat(document.getElementById('inPressao').value);
    var t = parseFloat(document.getElementById('inTemperatura').value);
    var n = parseFloat(document.getElementById('inMols').value);
    var v = calSimulator.calcularVolume(p, t, n);
    atualizarResultados(p, v, n, t);
    img(t)
});

document.getElementById('btnCalcularMols').addEventListener('click', function () {
    var p = parseFloat(document.getElementById('inPressao').value);
    var v = parseFloat(document.getElementById('inVolume').value);
    var t = parseFloat(document.getElementById('inTemperatura').value);
    var n = calSimulator.calcularMols(p, v, t);
    atualizarResultados(p, v, n, t);
    img(t)
});

document.getElementById('btnCalcularTemperatura').addEventListener('click', function () {
    var p = parseFloat(document.getElementById('inPressao').value);
    var v = parseFloat(document.getElementById('inVolume').value);
    var n = parseFloat(document.getElementById('inMols').value);
    var t = calSimulator.calcularTemperatura(p, v, n);
    atualizarResultados(p, v, n, t);
    img(t)
})
  //   const imgTemperatura = document.getElementById('imgTemperatura');
  //   if (t <= 273) {
  //       imgTemperatura.src = 'img/img-gelo.jpg';
  //       imgTemperatura.alt = 'Gelo';
  //     } else if (t <= 373) {
  //       imgTemperatura.src = 'img/img-agua.jpg';
  //       imgTemperatura.alt = 'Água';
  //     } else {
  //       imgTemperatura.src = 'img/img-vapor.jpg';
  //       imgTemperatura.alt = 'Vapor';
  //     }
  // });


