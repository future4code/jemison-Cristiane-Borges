// Exercícios de interpretação de código

//1-RESPOSTA: ELE VAI IMPRIMIR DE ATE O NUMERO 10 

//2-A) RESPOSTA: ELE IRÁ EXIBIR OS NUMEROS DO ARRAY MAIOR QUE 18. NO CASO, 18,18,21...
//2-B) SIM. 
//3-

//Exercícios de escrita de código





//1-Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

/*let bixinhosDeEstimacao = Number(prompt("Quantos bixinhos de estimação voce tem?"))

let guardaBixinhos = bixinhosDeEstimacao

  //a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
if (guardaBixinhos < 1){

    console.log("Que pena! Você pode adotar um pet!")

}else {
//Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
    while (guardaBixinhos !== 0) {
    
    let arrayDePet = []
    let nomeBixinho= prompt("Qual o nome dele(s)? ")
    
    arrayDePet = nomeBixinho


    console.log([arrayDePet])
}
    }*/
 //2-Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números
    let arrayOriginal = [1, 2, 3, 4, 5]

// a) Escreva um programa que imprime cada um dos valores do array original.

function arrayDeNumeros (arrayOriginal){

    for (let i = 0; i < 5; i++ ){

        console.log(arrayOriginal[i])
    }
    
}
arrayDeNumeros([arrayOriginal])
