/* Exercicio 1 

a)
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

RESPOSTA: ELENCO[0] IMPRIME MATHEUS NACHTERGAELE, ELENCO.LENGHT -1 IMPRIME VIRGINIA CAVENDISH, TRANSMISSOES HOJE VAI IMPRIMIR O OBJETO (TRANSMISSOES HOJE, COM A INFORMAÇÃO DO TERCEIRO ELEMENTO)

Exercicio 2 
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

RESPOSTA: VAI IMPRIMIR AS INFORMAÇÕES DE CADA OBJETO COM SUAS PRPRIEDADES. COMO O ULTIMO OBJETO TEM O REPLACE, O "NOME" DA TARTARUGA VAI IMPRESSO TROCANDO O A PELA LETRA O

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

RESPOSTA: NAO VAI IMPRIMIR A ALTURA, POIS ELA NAO ESTA DENTRO DO OBJETO COMO PROPRIEDADE
*/

/*Exercícios de escrita de código
1- A)

const apelidos = {

nome: "Cristiane",
tresApelidos: ["Cris", "Crix", "Crislaine"]

}
 function mostraApelidos(apelidos){

    const meuNome = apelidos.nome
    const meusApelidos1 = apelidos.tresApelidos[0]
    const meusApelidos2 = apelidos.tresApelidos[1]
    const meusApelidos3 = apelidos.tresApelidos[2]
    
    console.log(`Eu sou ${meuNome}, mas pode me chamar de: ${meusApelidos1} , ${meusApelidos2} ou ${meusApelidos3}`)
  
 }
mostraApelidos(apelidos)

//1- b)
const apelidos = {

    nome: "Cristiane",
    tresApelidos: ["Cris", "Crix", "Crislaine"]
    
    }
const novoApelido ={
    ...apelidos,
    tresApelidos: ["Crissss", "Crixxx", "Crisinha"]

}
function mostraApelidos(novoApelido){
    const meuNome = apelidos.nome
    const meusApelidos1 = novoApelido.tresApelidos[0]
    const meusApelidos2 = novoApelido.tresApelidos[1]
    const meusApelidos3 = novoApelido.tresApelidos[2]
    

   
    console.log(`Eu sou ${meuNome}, mas pode me chamar de: ${meusApelidos1} , ${meusApelidos2} ou ${meusApelidos3}`)
  
}
mostraApelidos(novoApelido)*/

/*2-a)

const informacaoUm ={
    nome: "Gabriela",
    idade: 20 ,
    profissao: "Esteticista"

}
const informacaoDois ={
    nome: "Elena",
    idade: 35,
    profissao: "Empreendedora"

}
function imprimeDados(informacaoUm, informacaoDois){

    const nomeUm = informacaoUm.nome
    const valorDoNome = nomeUm.length
    const idadeUm = informacaoUm.idade
    const profissaoUm = informacaoUm.profissao
    const valorDaProfissao = profissaoUm.length

    const nomeDois = informacaoDois.nome
    const valorDoNomeDois = nomeDois.length
    const idadeDois = informacaoDois.idade
    const profissaoDois = informacaoDois.profissao
    const valorDaProfissaoDois = profissaoDois.length

    console.log(nomeUm,",", valorDoNome,",", idadeUm,",", profissaoUm,",", valorDaProfissao)
    console.log(nomeDois,",", valorDoNomeDois,",", idadeDois,",", profissaoDois,",", valorDaProfissaoDois)
}

imprimeDados(informacaoUm, informacaoDois)*/

//a) criar variavel
/*const carrinho =[]

//b) criar tres objetos 
const frutaUm ={
    nome: "Murango",
    disponibilidade: true

}
const frutaDois = {
    nome: "Banana",
    disponibilidade: true

}
const frutaTres ={
    nome: "Laranja",
    disponibilidade: true

}
//c) funcao com parametro fruta
function recebeFrutas(fruta){ 

    carrinho.push(carrinho[frutaUm, frutaDois, frutaTres])
      
}

//d)
recebeFrutas(carrinho)
console.log([frutaUm, frutaDois, frutaTres])*/
