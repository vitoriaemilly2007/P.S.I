// 01 - Função saudar
function questao1() {
    const saudar = (nome) => `Olá, ${nome}!`;
    console.log(saudar("Ana")); // Exemplo
}
questao1()
  
// 02 - Função executarOperacao com callbacks de soma e multiplicação
  function questao2() {
    const executarOperacao = (a, b, callback) => callback(a, b);
  
    const somar = (a, b) => a + b;
    const multiplicar = (a, b) => a * b;
  
    console.log(executarOperacao(4, 5, somar));        // 9
    console.log(executarOperacao(4, 5, multiplicar));  // 20
}
questao2()
// 03 - exibirMensagem com mensagens personalizadas
  function questao3() {
    const exibirMensagem = (nome, callback) => callback(nome);
  
    const mensagemDeBoasVindas = (nome) => `Seja bem-vindo, ${nome}!`;
    const mensagemDeDespedida = (nome) => `Até logo, ${nome}!`;
  
    console.log(exibirMensagem("Carlos", mensagemDeBoasVindas));   // Seja bem-vindo, Carlos!
    console.log(exibirMensagem("Carlos", mensagemDeDespedida));    // Até logo, Carlos!
}
questao3()
// 04 - verificarNumero com Promise
  function questao4() {
    function verificarNumero(numero) {
      return new Promise((resolve, reject) => {
        if (numero >= 0) {
          resolve(`Número válido: ${numero}`);
        } else {
          reject("Erro: número negativo não é permitido");
        }
      });
    }
  
    verificarNumero(10)
      .then(console.log)
      .catch(console.error);
  
    verificarNumero(-3)
      .then(console.log)
      .catch(console.error);
}
questao4()
  
// 05 - consultarPaciente com Promise
  function questao5() {
    function consultarPaciente(nome) {
      return new Promise((resolve, reject) => {
        if (nome.trim() === "") {
          reject("Erro: nome do paciente não pode ser vazio.");
        } else {
          resolve(`Consulta para ${nome} agendada com sucesso.`);
        }
      });
    }
  
    consultarPaciente("Maria")
      .then(console.log)
      .catch(console.error);
  
    consultarPaciente("")
      .then(console.log)
      .catch(console.error);
}
questao5()
  
// 06 - agendarConsulta com async/await e try...catch
  function questao6() {
    function consultarPaciente(nome) {
      return new Promise((resolve, reject) => {
        if (nome.trim() === "") {
          reject("Erro: nome do paciente não pode ser vazio.");
        } else {
          resolve(`Consulta para ${nome} agendada com sucesso.`);
        }
      });
    }
  
    async function agendarConsulta(nome) {
      try {
        const resultado = await consultarPaciente(nome);
        console.log(resultado);
      } catch (erro) {
        console.error(erro);
      }
    }
  
    agendarConsulta("João");
    agendarConsulta(""); // Testando erro
}
questao6()
// Função para verificar o horário de atendimento
// O funcionamento é das 8h às 17h
function questao7() {
    // Função para verificar o horário de atendimento
    // O funcionamento é das 8h às 17h
    function verificarHorario(atualHora) {
      return new Promise((resolve, reject) => {
        if (typeof atualHora !== "number" || atualHora < 0 || atualHora > 23) {
          reject("Erro: hora inválida.");
        } else if (atualHora >= 8 && atualHora < 17) {
          resolve("Estamos abertos para atendimento.");
        } else {
          reject("Estamos fechados no momento.");
        }
      });
    }
  
    // Função async que chama verificarHorario com await
    async function checarAtendimento(atualHora) {
      try {
        const mensagem = await verificarHorario(atualHora);
        console.log(mensagem);
      } catch (erro) {
        console.error(erro);
      }
    }
  
    // Testes
    checarAtendimento(10);     // Deve exibir: Estamos abertos para atendimento.
    checarAtendimento(18);     // Deve exibir: Estamos fechados no momento.
    checarAtendimento(-1);     // Deve exibir: Erro: hora inválida.
    checarAtendimento("dez");  // Deve exibir: Erro: hora inválida.
}
questao7()
  
  