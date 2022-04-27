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
console.log(tartaruga)*/

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
mostraApelidos(apelidos)*/

//1- b)
const apelidos = {

    nome: "Cristiane",
    tresApelidos: ["Cris", "Crix", "Crislaine"]
    
    }
const novoApelido ={
    ...apelidos,
    tresApelidos: ["Crissss", "Crixxx", "Crisinha"]

}
function mostraApelidos(apelidos,novoApelido){
    const meuNome = apelidos.nome
    const meusApelidos1 = apelidos.novoApelido.tresApelidos[0]
    const meusApelidos2 = apelidos.novoApelido.tresApelidos[1]
    const meusApelidos3 = apelidos.novoApelido.tresApelidos[2]
    

   
    console.log(`Eu sou ${meuNome}, mas pode me chamar de: ${meusApelidos1} , ${meusApelidos2} ou ${meusApelidos3}`)
  
}
mostraApelidos(novoApelido)