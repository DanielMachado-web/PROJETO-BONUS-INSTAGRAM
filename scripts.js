let imagem = document.getElementById("troca-imagem")


function TrocaImagem() {

    if (imagem.style.opacity == 0) {
        imagem.style.opacity = 1
    }

    else {
        imagem.style.opacity = 0
    }
}

setInterval(function () {
    TrocaImagem()
}, 4000);
