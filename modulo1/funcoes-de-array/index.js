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
 /*a) Crie um novo array que contenha apenas o nome dos doguinhos
 
 const apenasNomes = pets.map((item) =>{

    return item.nome 
 })

console.log(apenasNomes)*/

// b) Crie um novo array apenas com os cachorros salsicha

/*const racaSalsicha = pets.filter((item) => {

    return item.raca ==="Salsicha"


})

console.log(racaSalsicha)
*/

//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. --------------> Tentar fazer
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
/*const arrayDePoodles = pets.filter((item) =>{

        if(item.raca === "Poodle")

        return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.raca}!`
    


})

console.log(arrayDePoodles)*/






//Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

/*const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 //a) Crie um novo array que contenha apenas o nome de cada item

 /*const nomeDoItem = produtos.map((item) =>{

    return item.nome

 })
 console.log(nomeDoItem)*/

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles -----------> tentar fazer

/*const precoDosItens = produtos.map((item ) =>{


    return item.nome && item.preco*(0.95)

})*/

//console.log(precoDosItens)
//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

/*const arrayBebidas = produtos.filter((item) =>{

    return item.categoria === "Bebidas"


})

console.log(arrayBebidas)*/

//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê" 


/*const imprimirYpe = produtos.filter((item) =>{

     
    return item.nome.includes("Ypê")  

    
 })
 console.log(imprimirYpe)

 //d) e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

 const  arrayDeYpe = imprimirYpe.map((item) =>{


    return `Compre ${item.nome} por ${item.preco}.`



 })
 console.log(arrayDeYpe)*/