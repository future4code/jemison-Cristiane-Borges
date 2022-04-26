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

  return imc

}

// EXERCÍCIO 04 verificar porque seu erro se a mensagem é a mesma
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let seuNome = prompt("Qual o seu nome?");
  let suaIdade = prompt("Qual a sua Idade?");
  let seuEmail = prompt("Qual o seu e-mail?");

  console.log(`Meu nome é ${seuNome}, tenho ${suaIdade} anos, e o meu email é ${seuEmail}.`);

}

// EXERCÍCIO 05 
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  const cor1 = prompt("Digite uma cor")
  const cor2 = prompt("Digite mais uma cor")
  const cor3 = prompt("Digite mais uma cor") 

  array = [cor1, cor2, cor3]
  
  console.log(array)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const recebeString = string.toUpperCase()


  console.log(recebeString)

  return recebeString
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

 const valorEspetaculo = custo
 const valorDoIngresso = valorIngresso

 const resultado = custo/ valorDoIngresso

 console.log(resultado)

 return resultado

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const retornaString = string1 > string2
  
  console.log(retornaString)

  return retornaString
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento =array[0]

  console.log(primeiroElemento)

  return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const retornaUltimoElemento = array
  const imprimeElemento = retornaUltimoElemento[retornaUltimoElemento.length-1]

  console.log(imprimeElemento)

  return imprimeElemento

}

// EXERCÍCIO 11 - nao consegui fazer
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const recebeArray = array
  const recebeElemento = array[0]  
  const acessaPrimeiroNumero = recebeElemento //isolei o primeiro elemento
  const acessaUltimoNumero = recebeArray[recebeArray.length-1]
  const recebeUltimoArray = acessaUltimoNumero //isolei o ultimo elemento

  const removeElemento1 = recebeArray.splice(acessaPrimeiroNumero, acessaPrimeiroNumero) //removi o primeiro elemento
  const removeElemento2 = recebeArray.splice(recebeUltimoArray,recebeUltimoArray) //removi o ultimo

  
  



}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  const verificaIgualdade1 = string1.toUpperCase()
  const verificaIgualdade2 = string2.toUpperCase()

  const verificaIgualdade = verificaIgualdade1 == verificaIgualdade2

  console.log(verificaIgualdade)

  return verificaIgualdade



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

