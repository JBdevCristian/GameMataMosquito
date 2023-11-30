
var altura = 0;
var largura = 0;

function palcoJogo() {
    
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura);
}

palcoJogo();

//Criando mosca 
function posicaoRandomica() {

    //remover mosquito anterior
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
    }

var posicaoX = Math.floor(Math.random() * largura) - 90;
var posicaoY = Math.floor(Math.random() * altura) - 90;

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY);


var mosca = document.createElement('img')
mosca.src = 'imagens/mosca.png'
mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
mosca.style.left = posicaoX + 'px'
mosca.style.top = posicaoY + 'px'
mosca.style.position = 'absolute'
mosca.id = 'mosquito'

document.body.appendChild(mosca)

}

function tamanhoAleatorio() { //tamanho aleatorio mosca
    var classe = Math.floor(Math.random() * 3)

    console.log(classe)

    switch(classe) {
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }
}

function ladoAleatorio() {
    var tamanho = Math.floor(Math.random() * 2)

    console.log(tamanho)

    switch(tamanho) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'

    }
}


