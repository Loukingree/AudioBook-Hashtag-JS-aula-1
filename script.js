//Var
const audioCapitulo = document.getElementById("audio-capitulo");
const nomeCapitulo = document.getElementById("capitulo");
const botaoPlayPause = document.getElementById("play-pause");
const botaoAvancar = document.getElementById("avancar");
const botaoVoltar = document.getElementById("voltar");

const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

//funcoes
function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove("bi-play-btn-fill")
    botaoPlayPause.classList.add("bi-pause-btn-fill")
}

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.add("bi-play-btn-fill")
    botaoPlayPause.classList.remove("bi-pause-btn-fill")
}

function tocarOuPausar() {
    if (taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
     } 
        else {
            pausarFaixa();
            taTocando = 0;
        }
}

function avancarFaixa () {
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1;
    } //{} indica o "entao"!
        else {
            capituloAtual = capituloAtual + 1;
        }

    nomeCapitulo.innerText = "Capítulo " + capituloAtual
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
}

function voltarFaixa () {
    if (capituloAtual === 1) { //por que  3 "="?
        capituloAtual = numeroCapitulos;
    } //{} indica o "entao"!
        else {
            capituloAtual = capituloAtual - 1;
        }

    nomeCapitulo.innerText = "Capítulo " + capituloAtual
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
}


//codigo
botaoPlayPause.addEventListener("click", tocarOuPausar); //botaoPlayPause.onclick(tocarFaixa)??
botaoAvancar.addEventListener("click", avancarFaixa);
botaoVoltar.addEventListener("click", voltarFaixa);