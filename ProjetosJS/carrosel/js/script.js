var imagens = [
    "../imagens/1.jpg",
    "../imagens/2.jpg",
    "../imagens/3.jpg",
];

var indice = 0;

var banner = document.getElementById('banner');

function monstrarImagens () {
    banner.src = imagens[indice];
}

function Next() {}
function Return () {}