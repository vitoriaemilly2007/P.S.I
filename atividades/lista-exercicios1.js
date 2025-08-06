//01 - Para iniciar de maneira simples, vamos começar apenas com uma impressão na tela.
//Utilizando o console.log exiba alguma mensagem no console.
function Questão1(){
    console.log("Eu já sei professor!")
}
Questão1()

//02 - Crie uma variável chamada nome e armazene o seu nome. Em seguida exiba a
//mensagem "Olá, [nome]" no console. Realize a criação com variável let e const.
function Questão2(){
    let nome = 'Emilly'
    console.log("olá", nome)
}
Questão2()

//03 - Elabore um algoritmo para realizar as seguintes operações matemáticas:
//● Soma
//● Subtração
//● Multiplicação
//● Divisão
//● Resto da divisão
function Questão3(){
    let numero1 = 10
    let numero2 = 5

    let soma = numero1 + numero2
    let subtracao = numero1 - numero2
    let multiplicacao = numero1 * numero2
    let divisao = numero1 / numero2
    let restoSoma = numero1 % numero2

    // gerando número aleatório de 1 a 10
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

    //Raíz quadrada de 25
    let raizQuadrada = Math.sqrt(25)

    //Pontenciação 
    let potencia = Math.pow(2, 3)

    console.log(soma, subtracao, multiplicacao, divisao, restoSoma, numeroAleatorio, raizQuadrada, potencia)   
}
Questão3()

//04 - Utilize if e else para declarar se um número é ímpar ou é par.
function Questão4(){
    let numero = 3
    if (numero % 2 === 0){
        return "número é par";
    }
    else {
        return "número ímpar";
    }
}
console.log(Questão4());

//05 - Utilize if/ else if e else para receber um horário do dia e informar “bom dia”, “boa tarde”,
//“boa noite” ou “boa madrugada”.
function Questão5(){
    let hora = 13
    if (hora >= 6 && hora < 12) {
        return "Bom dia!";
    } else if (hora >= 12 && hora < 18) {
        return "Boa tarde!";
    } else if (hora >= 18 && hora <= 23) {
        return "Boa noite!";
    } else if ((hora >= 0 && hora < 6)) {
        return "Boa madrugada!";
    } else {
        return "Horário inválido!";
    }
}
console.log(Questão5());

//06 - Crie uma lista com 10 números, e em seguida, crie um laço de repetição para varrer
//todos os elementos da lista e armazenar os valores pares e os impares em uma nova lista
//separada.
function Questão6(){
    // Lista inicial com 10 números
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Listas para armazenar pares e ímpares
    let pares = [];
    let impares = [];

    // Laço para percorrer todos os números
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        } else {
            impares.push(numeros[i]);
        }
    }

    // Retorna um objeto com as duas listas
    return { pares, impares };
}

// Agora chama e imprime o resultado da função correta:
const resultado = Questão6();
console.log("Números pares:", resultado.pares);
console.log("Números ímpares:", resultado.impares);

//07 - Crie uma função que receba um número como parâmetro e retorne o seu quadrado.
function Questão7() {
    function quadrado(numero) {
        return Math.pow(numero, 2);
    }
    
    // Exemplo: calcular quadrado de 5 e retornar
    return quadrado(5);
}
console.log(Questão7()); // Saída: 25

//08 - Crie uma função que recebe um array de números e retorne um novo array contendo
//apenas os números maiores que 10.
function Questão8(numeros) {
    // Cria um novo array apenas com os números maiores que 10
    let maioresQueDez = [];

    // Percorre cada número do array original
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 10) {
            maioresQueDez.push(numeros[i]); // Adiciona ao novo array se for maior que 10
        }
    }

    // Retorna o novo array com os números filtrados
    return maioresQueDez;
}

// Testando a função
let lista = [4, 11, 7, 25, 10, 30, 3];
let resul = Questão8(lista);

console.log("Números maiores que 10:", resul);

//09 - Faça um algoritmo que receba a idade do usuário e informe se ele é criança (0-12),
//adolescente (13-17), adulto (18-59) ou idoso (60+).
function Questão9() {
    const idade = Number(prompt("Digite sua idade: "));

    if (isNaN(idade) || idade < 0) {
        console.log("Idade inválida!");
    } else if (idade <= 12) {
        console.log("Você é uma criança!");
    } else if (idade <= 17) {
        console.log("Você é adolescente!");
    } else if (idade <= 59) {
        console.log("Você é adulto!");
    } else {
        console.log("Você é idoso!");
    }
}
Questão9();

//10 - Implemente uma função que recebe um callback e executa esse callback após 3
//segundos, imprimindo uma mensagem antes e depois da execução.
function Questao10(callback) {
    console.log("Iniciando execução...");

    setTimeout(() => {
        callback(); // Executa o callback após 3 segundos
        console.log("Callback executado com sucesso!");
    }, 3000);
}

// Exemplo de uso com uma função callback
function exemploCallback() {
    console.log(">> Esta é a função callback sendo executada.");
}

// Chamada da função Questao10 com o callback como argumento
Questao10(exemploCallback);






