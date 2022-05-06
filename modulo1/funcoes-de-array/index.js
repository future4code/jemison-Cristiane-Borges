//Exercícios de interpretação de código

//1- RESPOSTA:VAI APARECER TODO O OBJETO DENTRO DO ARRAY

//2- SERÁ IMPRESSO APENAS OS NOMES QUE CONSTAM DENTRO DO OBJETO

//3- VAI APARECER OS APELIDOS DOS OBJETOS QUE NAO CONTENHAM A PALAVRA "CHIJO"

/*-------------------------------------------------------------------------*/

//Exercícios de escrita de código

/*1-Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:*/

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 //a) Crie um novo array que contenha apenas o nome dos doguinhos
 function


 const novoArrayDeNomes = pets.filter((item) =>{

    return item.nome 

 })
console.log(novoArrayDeNomes)