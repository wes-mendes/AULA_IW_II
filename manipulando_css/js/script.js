/* Arquivo JS + alterar CSS */

let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 Manipular CSS'
titulo.innerHTML = 'Aula Manipular CSS'
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', 'img/pride-fc.jpg')
imagem.setAttribute('width', '280px')

/* MANIPULAR CSS */
document.querySelector('h1').style.color = "red";
titulo.style.color = "red";
titulo.style.backgroundColor = "#000";
titulo.style.borderBottom = "2px solid red";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius = "15px";

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'escura')
box[0].removeAttribute('class')

/////// MODOS DE COR ///////
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnBlue = document.querySelector('#btblue')

let btnYellow = document.querySelector('#btyellow')

let btnPink = document.querySelector('#btpink')

let btnLight = document.querySelector('#btlight')

btnDark.addEventListener('click', modoDark)
btnBlue.addEventListener('click', modoBlue)
btnYellow.addEventListener('click', modoYellow)
btnLight.addEventListener('click', modoLight)
btnPink.addEventListener('click', modoPink)

function modoDark() {
    event.preventDefault();
    console.log('modo dark')
    tela.classList.add("dark");
    tela.classList.remove("light");
    tela.classList.remove("pink");
    tela.classList.remove("blue");
    tela.classList.remove("yellow");
}

function modoBlue() {
    event.preventDefault();
    console.log('modo blue')
    tela.classList.add("blue");
    tela.classList.remove("light");
    tela.classList.remove("pink");
    tela.classList.remove("yellow");
    tela.classList.remove("dark");
}

function modoYellow() {
    event.preventDefault();
    console.log('modo yellow')
    tela.classList.add("yellow");
    tela.classList.remove("light");
    tela.classList.remove("pink");
    tela.classList.remove("blue");
    tela.classList.remove("dark");
}

function modoLight() {
    event.preventDefault();
    console.log('modo light')
    tela.classList.remove("dark");
    tela.classList.add("light");
    tela.classList.remove("pink");
    tela.classList.remove("blue");
    tela.classList.remove("yellow");
}

function modoPink() {
    event.preventDefault();
    console.log('modo pink')
    tela.classList.add("pink");
    tela.classList.remove("light");
    tela.classList.remove("blue");
    tela.classList.remove("yellow");
    tela.classList.remove("dark");
}

/*
titulo.addEventListener('click', mudarId)
function mudarId() {
    titulo.id = 'titulo'
    console.log(titulo.id)
}
*/