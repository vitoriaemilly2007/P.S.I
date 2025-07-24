// Questão 1
function Questão_1() {
    console.log("Bem-vindo!");
}
Questão_1();

console.log('--------------------------------------------------------------------------------')
// Questão 2
function Questão_2() {
    // Variáveis tipo String
    let nomeProduto = "Camiseta Branca";
    let cliente = "Emilly";
    let statusDisponibilidade = "Em estoque";

    // Variáveis tipo Number
    let precoUnitario = 49.90;

    // Variáveis tipo Boolean
    let produtoDisponivel = true;
    let clienteCadastrado = false;

    // Exibindo no console
    console.log("Cliente:", cliente);
    console.log("Produto:", nomeProduto);
    console.log("Preço: R$" + precoUnitario.toFixed(2));
    console.log("Status:", statusDisponibilidade);
    console.log("Produto disponível?", produtoDisponivel);
    console.log("Cliente cadastrado?", clienteCadastrado);
}
Questão_2();

console.log('--------------------------------------------------------------------------------')
// Questão 3
function Questão_3() {
    let precoOriginal = 120.00;
    let descontoPercentual = 10; // 10%

    let precoComDesconto = precoOriginal - (precoOriginal * descontoPercentual / 100);
    console.log("Preço com desconto: R$ " + precoComDesconto.toFixed(2));


    let precoUnitario = 49.90;
    let quantidade = 3;
    let valorTotal = precoUnitario * quantidade;
    console.log("Valor total da compra: R$ " + valorTotal.toFixed(2));

    let valorCompra = 250.00;
    let frete = valorCompra >= 200 ? 0 : 20.00;
    console.log("Frete: R$ " + frete.toFixed(2));
}
Questão_3();

console.log('--------------------------------------------------------------------------------')
// Questão 4
function Questão_4() {
    let nomeCliente = "Emilly"; // Variável com o nome do cliente

    // Mensagem personalizada usando template string
    let mensagem = `Olá, ${nomeCliente}, Bem vinda!.`;

    console.log(mensagem);
}
Questão_4();

console.log('--------------------------------------------------------------------------------')
// Questão 5
function Questão_5() {
    // Lista (array) com itens do carrinho de compras
    let carrinho = ["Camiseta Branca", "Tênis Esportivo", "Calça Jeans", "Boné", "Meias"];

    console.log("Itens no carrinho:", carrinho);

    // Escolher a posição do item a ser removido (ex: posição 2 = "Calça Jeans")
    let posicaoRemover = 2;

    // Remover o item usando splice
    let itemRemovido = carrinho.splice(posicaoRemover, 1); // remove 1 item na posição 2

    console.log(`🗑️ Você removeu "${itemRemovido}" do seu carrinho.`);
    console.log("Carrinho atualizado:", carrinho);
}
// Executar a função
Questão_5();

console.log('--------------------------------------------------------------------------------')
function Questão_6() {
    let precoProduto = 100
    let saldoCarteira = 150

    if (saldoCarteira >= precoProduto) {
        console.log("Compra efetuada com sucesso! 🛒");
    } else {
        console.log("Saldo insuficiente para realizar a compra. 💸");
    }
}
Questão_6()

console.log('--------------------------------------------------------------------------------')
function Questão_7() {
    let limiteEstoque= 10
    let quantidadeEstoque = 0
    for (let i = 1; i <= limiteEstoque; i++) {
        quantidadeEstoque++;
        console.log(`📦 Peça número ${quantidadeEstoque} adicionada ao estoque.`);
    }

    console.log(`✅ Estoque completo. Total de peças: ${quantidadeEstoque}`);
}
Questão_7()
console.log('--------------------------------------------------------------------------------')
function Questão_8() {
    // Subfunção 1: Calcular o preço com desconto
    function calcularDesconto(precoOriginal, percentualDesconto) {
        let precoFinal = precoOriginal - (precoOriginal * percentualDesconto / 100);
        return precoFinal.toFixed(2);
    }

    // Subfunção 2: Verificar se o cliente pode comprar
    function podeComprar(precoFinal, saldoCarteira) {
        if (saldoCarteira >= precoFinal) {
            return "Compra efetuada com sucesso! 🛒";
        } else {
            return "Saldo insuficiente para realizar a compra. 💸";
        }
    }

    // Exemplo de uso
    let precoOriginal = 150.00;
    let desconto = 20; // 20%
    let saldoCliente = 130.00;

    let precoComDesconto = calcularDesconto(precoOriginal, desconto);
    console.log(` Preço original: R$ ${precoOriginal.toFixed(2)}`);
    console.log(` Desconto: ${desconto}%`);
    console.log(` Preço com desconto: R$ ${precoComDesconto}`);

    let mensagem = podeComprar(precoComDesconto, saldoCliente);
    console.log(` Saldo disponível: R$ ${saldoCliente.toFixed(2)}`);
    console.log(mensagem);
}
Questão_8();
console.log('--------------------------------------------------------------------------------')
// Questão 9
function Questão_9() {
    let cliente = {
        nome: 'Angela',
        idade: 19,
    };

    let funcionario = {
        nome: 'Paulo',
        id: 230456740,
    };

    console.log("Nome do cliente:", cliente.nome);
    console.log("ID do funcionário:", funcionario.id);
}

Questão_9();
console.log('--------------------------------------------------------------------------------')

function Questão_10() {
    // Função 1: Pagamento parcelado
    function pagamentoParcelado(valorTotal, numParcelas) {
        let valorParcela = valorTotal / numParcelas;
        return {
            parcelas: numParcelas,
            valorParcela: valorParcela.toFixed(2),
            valorTotal: valorTotal.toFixed(2)
        };
    }

    // Função 2: Pagamento com desconto à vista
    function pagamentoComDesconto(valorTotal, percentualDesconto) {
        let valorFinal = valorTotal - (valorTotal * percentualDesconto / 100);
        return {
            desconto: percentualDesconto,
            valorFinal: valorFinal.toFixed(2)
        };
    }

    // Simulação de compra
    let valorDaCompra = 300.00;

    // Pagamento parcelado em 3 vezes
    let parcelado = pagamentoParcelado(valorDaCompra, 3);
    console.log(`💳 Pagamento parcelado em ${parcelado.parcelas}x de R$ ${parcelado.valorParcela} (Total: R$ ${parcelado.valorTotal})`);

    // Pagamento à vista com 10% de desconto
    let desconto = pagamentoComDesconto(valorDaCompra, 10);
    console.log(`💵 Pagamento à vista com ${desconto.desconto}% de desconto: R$ ${desconto.valorFinal}`);
}

// Executar a função
Questão_10();






