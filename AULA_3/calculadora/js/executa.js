var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var resultado = document.getElementById('resultado');

        function somar() {
            resultado.innerHTML = parseFloat(n1.value) + parseFloat(n2.value);
        }

        function subtrair() {
            resultado.innerHTML = parseFloat(n1.value) - parseFloat(n2.value);
        }

        function multiplicar() {
            resultado.innerHTML = parseFloat(n1.value) * parseFloat(n2.value);
        }

        function dividir() {
            if (n2.value === "0") {
              resultado.innerHTML = "Erro: Divisão por zero!";
            } else {
              resultado.innerHTML = parseFloat(n1.value) / parseFloat(n2.value);
            }
        }

        function apagar() {
            n1.value = "";
            n2.value = "";
            resultado.innerHTML = "";
        }