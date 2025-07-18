//Questão 1
function Questão_1() {
    console.log("Bem Vindo!")
}
Questão_1()

// Questão 2
function Questão_2() {
    // Variáveis tipo String
    let nomeProduto = "Camiseta Branca";
    let cliente = "Emilly";
    let statusDisponibilidade = "Em estoque";

    // Variáveis tipo Number
    let precoProduto = 49.90;
    let desconto = 10.5; // desconto em porcentagem

    // Variáveis tipo Boolean
    let produtoDisponivel = true;
    let clienteCadastrado = false;

    // Cálculo do valor final com desconto
    let precoFinal = precoProduto - (precoProduto * (desconto / 100));

    // Exibindo no console
    console.log("Cliente:", cliente);
    console.log("Produto:", nomeProduto);
    console.log("Status:", statusDisponibilidade);
    console.log("Preço original: R$", precoProduto.toFixed(2));
    console.log("Desconto:", desconto + "%");
    console.log("Preço com desconto: R$", precoFinal.toFixed(2));
    console.log("Produto disponível?", produtoDisponivel);
    console.log("Cliente cadastrado?", clienteCadastrado);
}

// Executa a função
Questão_2();

