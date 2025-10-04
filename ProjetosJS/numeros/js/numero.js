function recebeNumeros(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);

    var soma = " ";

    var soma = (n1+n2);
    alert("A soma é: " + soma);
}

function dividiNumeros(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var divisao = n1 / n2;
    alert("A divisão é: " + divisao);
}

function multiplicaNumeros(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var multiplicacao = n1 * n2;
    alert("A multiplicação é: " + multiplicacao);
}
function subtraiNumeros(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var subtracao = n1 - n2;
    alert("A subtração é: " + subtracao);
}