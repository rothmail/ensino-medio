document.getElementById('valorDolar').innerText = 'R$ 5,23';

function formatarMoeda(valor) {
    return 'R$ ' + valor.toFixed(2).replace('.', ',');
}

function simularInvestimento() {
    let valor = parseFloat(document.getElementById('valor').value);
    let juros = parseFloat(document.getElementById('juros').value) / 100;
    let tempo = parseInt(document.getElementById('tempo').value);

    let resultado = valor * Math.pow((1 + juros), tempo);
    document.getElementById('resultado').innerText = 'Total estimado: ' + formatarMoeda(resultado);
}