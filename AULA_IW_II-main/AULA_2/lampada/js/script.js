const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const ambos = document.getElementById('ambos')
const resetar = document.getElementById('resetar')
const estado = document.getElementById('estado')
const lampada = document.getElementById('lamp')

function estaQuebrada(){
    return lampada.src.indexOf('quebrada') > -1
}

function estado1(){
    return lamp.src.indexOf('desligada') > -1
}

function estado2(){
    return lamp.src.indexOf('ligada') > -1
}

function lampLigada(){
    if(!estaQuebrada()){
        lampada.src = "img/ligada.jpg"
    }
    if(estado2()){
        estado.innerHTML = "Lâmpada ligada"
    }
}

function lampDesligada(){
    if(!estaQuebrada()){
        lampada.src = "img/desligada.jpg"
    }
    if(estado1()){
        estado.innerHTML = "Lâmpada desligada"
    }

}

function lampQuebrada(){
    lampada.src = "img/quebrada.jpg"
    estado.innerHTML = "Lâmpada quebrada"

}



function multi(){
    if(estado1()){
        ligar()
    }
    else{
        desligar()
    }
}


ligar.addEventListener('click',lampLigada)
desligar.addEventListener('click',lampDesligada)

lampada.addEventListener('mouseover',lampLigada)
lampada.addEventListener('mouseleave',lampDesligada)
lampada.addEventListener('dblclick',lampQuebrada)

lampada.addEventListener('click',multi)
lampada.addEventListener('click',resetar)
