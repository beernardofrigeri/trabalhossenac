function imprimirVariaveis(){
// var ano = 2025;
// var ensino = "Primeiro Ano Senac";
var usuario = document.getElementById("Usuário").value;
var senha = document.getElementById("Senha").value;
var confirmacao = document.getElementById("Confirmação da Senha").value;

alert("Usuário: " + usuario + "\nSenha: " + senha + "\nConfirmação da Senha: " + confirmacao);
}

function imprimirVariaveis(){
    var nomeAluno = document.getElementById("nomeAluno").value;
    var serie = document.getElementById("serie").value;
    var turnoEscolarManha = document.getElementById("turnoEscolarManha").checked;
    var turnoEscolarTarde = document.getElementById("turnoEscolarTarde").checked;
    var turnoEscolarNoite = document.getElementById("turnoEscolarNoite").checked;

    if (turnoEscolarManha) {
        turnoEscolarManha = "Manhã";
    } else {
        turnoEscolarManha = "";
    }
    if (turnoEscolarTarde) {
        turnoEscolarTarde = "Tarde";
    } else {
        turnoEscolarTarde = "";
    }
    if (turnoEscolarNoite) {
        turnoEscolarNoite = "Noite";
    } else {
        turnoEscolarNoite = "";
    }
    alert("Aluno: " + nomeAluno + "\nSérie: " + serie + "\nTurno: " + turnoEscolarManha + " " + turnoEscolarTarde + " " + turnoEscolarNoite);
}