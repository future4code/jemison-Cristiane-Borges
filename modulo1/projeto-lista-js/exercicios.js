// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui

  
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
    let areaAltura = Number(prompt('Insira a altura'));
    let areaLargura = Number(prompt('Insira a Largura'));

    let area = areaAltura*areaLargura;

   console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Insira o ano atual'));
  const anoNascimento = Number (prompt('Insira o ano de Nascimento'));

  const idade = anoAtual-anoNascimento;

  console.log(idade);

}

// EXERCÍCIO 03 (ver sobre arredondar o valor)
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

    let imc = peso/(altura*altura);

  console.log(imc);

}

// EXERCÍCIO 04 verificar porque seu erro se a mensagem é a mesma
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let seuNome = prompt("Qual o seu nome?");
  let suaIdade = prompt("Qual a sua Idade?");
  let seuEmail = prompt("Qual o seu e-mail?");

  console.log("Meu nome é",seuNome,",tenho", suaIdade,"anos, e o meu e-mail é",seuEmail);

}

// EXERCÍCIO 05 
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}

