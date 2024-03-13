var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var resultado = document.getElementById('resultado');

function soma() {
    resultado.innerHTML = parseFloat(n1.value) + parseFloat(n2.value);
}

function subtracao() {
    resultado.innerHTML = parseFloat(n1.value) - parseFloat(n2.value);
}

function multiplicacao() {
    resultado.innerHTML = parseFloat(n1.value) * parseFloat(n2.value);
}

function divisao() {
    if (n2.value === "0") {
      resultado.innerHTML = "Erro";
    } else {
      resultado.innerHTML = parseFloat(n1.value) / parseFloat(n2.value);
    }
}

function limpar() {
    n1.value = "";
    n2.value = "";
    resultado.innerHTML = "";
}