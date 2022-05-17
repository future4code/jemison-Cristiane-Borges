// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01 - Escreva uma função que recebe um array como parâmetro e retorna a quantidade de elementos que há nele.
function retornaTamanhoArray(array) {

    const imprimeArray = array.length

    return imprimeArray

}


// EXERCÍCIO 02 - Escreva uma função que recebe um array como parâmetro e retorne este array invertido. 
function retornaArrayInvertido(array) {

    const arrayInvertido = array.reverse(array)

    return arrayInvertido

}

retornaArrayInvertido(arrayInvertido)

// EXERCÍCIO 03 - Escreva uma função que recebe um array de números e retorne o array com os números em ordem crescente. 
function retornaArrayOrdenado(array) {

    const arrayOrdenado = array

    arrayOrdenado.sort((a, b) => a - b)

    return arrayOrdenado


}

// EXERCÍCIO 04 - Escreva uma função que receba um array de números e retorne um novo array com apenas os números pares desse array de entrada.
function retornaNumerosPares(array) {

    const numerosPares = array.filter((item) => {

        return item % 2 === 0
    })
    return numerosPares

}

// EXERCÍCIO 05 - Escreva uma função que recebe um array de números e retorna um array com os números pares elevados a 2.
function retornaNumerosParesElevadosADois(array) {


    const achandoPares = array.filter((item) => {

        return item % 2 === 0
    })
    const paresElevados = achandoPares.map((item) => {

        return item ** 2
    })

    return paresElevados
}

// EXERCÍCIO 06 - Escreva uma função que receba um array de números e retorne o maior número dele.
function retornaMaiorNumero(array) {

    const maiorNumero = array.reduce(function (maiorNumero, numero) {

        return Math.max(maiorNumero, numero)
    })
    return maiorNumero

}

// EXERCÍCIO 07 - Escreva uma função que, dados dois números, retorne um objeto com as seguintes propriedades:

/*- `maiorNumero` → contém o maior número
- `maiorDivisivelPorMenor` → booleano indicando se o maior é divisível pelo menor
- `diferenca` → contém a diferença entre eles (deve ser um **número positivo** sempre)

   Obs: para os testes funcionarem, as propriedades do objeto devem possuir os exatos nomes acima*/
function retornaObjetoEntreDoisNumeros(num1, num2) {

  




}


// EXERCÍCIO 08 -Escreva uma função que, recebendo um número N como parâmetro, retorne os N primeiros números pares 
function retornaNPrimeirosPares(n) {

    const retornaPares = []

    for (let i = 0; retornaPares.length < n; i++) {

        if (i % 2 === 0) {

            retornaPares.push(i)
        }
    }

    return retornaPares

}

// EXERCÍCIO 09 - Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: ladoA, ladoB, ladoC e retorne se ele é equilátero, isósceles ou escaleno 
//
function classificaTriangulo(ladoA, ladoB, ladoC) {

    const triangulo1 = ladoA
    const triangulo2 = ladoB
    const triangulo3 = ladoC

    if (triangulo1 < (triangulo2 + triangulo3) && triangulo2 < (triangulo1 + triangulo3) && triangulo3 < (triangulo1 + triangulo2)) {

        if (triangulo1 == triangulo2 && triangulo2 == triangulo3) {

            return "Equilátero"

        } else if (triangulo1 == triangulo2 || triangulo1 == triangulo3 || triangulo3 == triangulo2) {

            return "Isósceles"

        } else {

            return "Escaleno"
        }
    }
}


// EXERCÍCIO 10 - Escreva uma função que receba um array de números e retorne um novo array com apenas 2 valores (NESTA ORDEM): o segundo maior e o segundo menor número do array original
function retornaSegundoMaiorESegundoMenor(array) {

  /*  const guardarArray = array

    guardarArray.sort((a, b) => a - b)

    return guardarArray*/


}

// EXERCÍCIO 11 -Crie uma função que receba um objeto representando um filme com nome, ano, diretor e elenco. Ela deve retornar uma chamada para assistir a esse filme, seguindo a estrutura do exemplo abaixo:
function retornaChamadaDeFilme(filme) {

    const chamadaFilme = filme
    
    return  `Venha assistir ao filme ${chamadaFilme.nome}, de ${chamadaFilme.ano}, dirigido por ${chamadaFilme.diretor} e estrelado por ${chamadaFilme.atores[0]}, ${chamadaFilme.atores[1]}, ${chamadaFilme.atores[2]}, ${chamadaFilme.atores[3]}.` 

}

// EXERCÍCIO 12- Crie uma função que recebe um objeto com as propriedades nome, idade, endereco e email  e retorne um novo objeto com as mesmas propriedades, mas com o valor "ANÔNIMO" para a propriedade nome.
function retornaPessoaAnonimizada(pessoa) {

    const pessoaAnonima = {
        ... pessoa,
        nome: "ANÔNIMO"
    }
    return pessoaAnonima
}

// EXERCÍCIO 13A - uma função que receba um array e devolva outro contendo as pessoas que tem permissão para entrar no brinquedo
function retornaPessoasAutorizadas(pessoas) {

    const  pessoasAutorizadas = []

    for ( const pessoa of pessoas){

        if ((pessoa.altura >= 1.5) && (pessoa.idade > 14) && (pessoa.idade <= 60)){

            pessoasAutorizadas.push(pessoa)
        }
    }return pessoasAutorizadas
}

// EXERCÍCIO 13B - uma função que receba um array e devolva outro contendo as pessoas que não tem permissão para entrar no brinquedo
function retornaPessoasNaoAutorizadas(pessoas) {

    
    
}

// EXERCÍCIO 14 - faça uma função que receba um array com os objetos do tipo acima como parâmetro e atualize o saldo total individual de cada um, sem criar um novo array. Retorne o array original. 
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A - A sua tarefa é criar uma função que receba o array acima como parâmetro e retorne um array de consultas ordenado pelos nomes dos pacientes (em ordem alfabética)
function retornaArrayOrdenadoAlfabeticamente(consultas) { 

    const nomePacientes = consultas

    nomePacientes.sort((a, b) => a.nome - b.nome)
    
    return nomePacientes
}
// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}