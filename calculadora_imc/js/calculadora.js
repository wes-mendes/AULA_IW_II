const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

function classificarIMC(sexo, imc) {
    if (sexo === "masculino") {
        return classificacaoMasculino();
    } else {
        return classificacaoFeminino();
    }
}
    
if (nome !== '' && altura !== '' && peso !== '') {

const valorIMC = (peso / (altura * altura)).toFixed(1);

let classificacaoMasculino = '';

if (valorIMC < 18.5){
    classificacao = 'abaixo do peso.';
    }else if (valorIMC < 25) {
        classificacao = 'com peso ideal. Parabéns!!!';
    }else if (valorIMC < 30){
        classificacao = 'levemente acima do peso.';
    }else if (valorIMC < 35){
        classificacao = 'com obesidade grau I.';
    }else if (valorIMC < 40){
        classificacao = 'com obesidade grau II';
    }else {
        classificacao = 'com obesidade grau III. Cuidado!!';
}

        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

if (nome !== '' && altura !== '' && peso !== '') {

    const valorIMC = (peso / (altura * altura)).toFixed(1);

let classificacaoFeminino = '';

if (valorIMC < 17.5){
    classificacao = 'abaixo do peso.';
    }else if (valorIMC < 24) {
        classificacao = 'com peso ideal. Parabéns!!!';
    }else if (valorIMC < 29){
        classificacao = 'levemente acima do peso.';
    }else if (valorIMC < 34){
        classificacao = 'com obesidade grau I.';
    }else if (valorIMC < 39){
        classificacao = 'com obesidade grau II';
    }else {
        classificacao = 'com obesidade grau III. Cuidado!!';
}

        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }


calcular.addEventListener('click', imc);