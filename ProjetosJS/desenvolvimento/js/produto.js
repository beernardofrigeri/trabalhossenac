function cadastrarProduto() {
    var nome = document.getElementById("nome").value;
    var categoria = document.getElementById("categoria").value;
    var n1 = parseFloat(document.getElementById("preco").value);
    var n2 = parseInt(document.getElementById("quantidade").value);
    var observacao = document.getElementById("observacao").value;
    var ativo = document.querySelector('input[name="ativo"]:checked').value;

    var resultado = n1 * n2;
    
    alert("Produto cadastrado:\nNome: " + nome + "\nCategoria: " + categoria + "\nPreço: " + n1 + "\nQuantidade: " + n2 + "\nTotal: " + resultado + "\nObservação: " + observacao + "\nAtivo: " + ativo);
}