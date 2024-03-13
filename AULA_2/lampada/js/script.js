const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lamp')
const alternar = document.getElementById('alternar')
const estado = document.getElementById('estado')

function estaQuebrada(){
    return lampada.src.indexOf('quebrada') > -1
}

function lampLigada(){
    if(!estaQuebrada()){
        lampada.src = "img/ligada.jpg"
        estado.innerHTML = "Ligada"
    }
    
}

function lampDesligada(){               
    if(!estaQuebrada()){
        lampada.src = "img/desligada.jpg"
        estado.innerHTML = "Desligada"
    }
    
}

function lampQuebrada(){
    lampada.src = "img/quebrada.jpg"
    estado.innerHTML = "Quebrada"
}

function lampAlternar() {
    if (alternar.textContent=='Ligar') {                    
      lampLigada();
      estado.innerHTML = "Ligada"
      alternar.textContent='Apagar';
    } else {
      lampDesligada();
      estado.innerHTML = "Desligada"
      alternar.textContent='Ligar';
    }
  } 

ligar.addEventListener('click',lampLigada)
desligar.addEventListener('click',lampDesligada)

lampada.addEventListener('mouseover',lampLigada)
lampada.addEventListener('mouseleave',lampDesligada)

lampada.addEventListener('dblclick',lampQuebrada)

alternar.addEventListener('click',lampAlternar)
