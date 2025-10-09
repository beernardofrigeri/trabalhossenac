function imprimirValores() {
    var nome = document.getElementById("nome").value;
    var nascimento = document.getElementById("nascimento").value;
    var estado_civil = document.getElementById("estado_civil").value;
    var escolaridade = document.getElementById("escolaridade").value;
    
    alert("Nome: " + nome + "\nNascimento: " + nascimento + "\nSexo: " + sexo + "\nEstado Civil: " + estado_civil + "\nEscolaridade: " +escolaridade);
}