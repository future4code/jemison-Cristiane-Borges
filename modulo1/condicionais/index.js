/*LEITURA DE CODIGO - EXERCICIO 1

A) RESPOSTA:RECEBE UM NUMERO DO USUARIO QUE CALCULA O RESTO . CASO O RESUTADO FOR IGUAL A ZERO, O CONSOLE MOSTRA "PASSOU NO TESTE", CASO NAO, ELE IMPRIME "NAO PASSOU"

B) NUMERO DIVISOR DE 2

C) PARA NUMEROS IMPARES EM QUE O RESTO SERA 1

EXERCICIO 2

A) PARA RECECER UMA FRUTA PELO PROMPT E ATRAVES DELE, O CONSOLE RETORNARÁ O PREÇO DA FRUTA
B) O preço da fruta MAÇÃ " é R$ 2.25
C)IMPRIMIRIA O PREÇO DA PÊRA NORMALMENTE, POIS ELE IRIA PARAR ALI. 

EXERCICIO 3

A) RECEBENDO O VALOR DO USUARIO
B)SE FOR 10 A MENSAGEM É "Esse número passou no teste", CASO -10 NAO IMPRIMIRA NADA, POIS NAO TEM  O COMANDO ELSE PARA O CASO "SE NAO"
C)SIM, HAVERA ERRO. */

/* ESCRITA DE CODIGO
EXERCICIO 1*/

/*const idadeUsuario = Number(prompt("insira sua idade"))  LETRA A E B RECEBE A IDADE E GARANTE QUE SERA NUMBER 

function podeDirigir (idadeUsuario) {
   
    if (idadeUsuario >= 18)                         C) VERIFICA SE É MAIOR DE IDADE
     
    return "Voce pode dirigir "
  
    else {
        return "Voce nao pode dirigir"

}
}
console.log(podeDirigir(idadeUsuario))

EXERCICIO 2
const turnoDoAluno = prompt("Insira M para Matutino, V para vespertino e N para Noturno")

const respostaAluno = turnoDoAluno.toLocaleLowerCase()

    if (respostaAluno === "m"){

        console.log("Bom dia")

    } else if(respostaAluno === "v") {

        console.log("Boa tarde")

    }else if (respostaAluno === "n") {

        console.log("Boa noite")
    }

EXERCICIO 3
    const turnoDoAluno = prompt("Insira M para Matutino, V para vespertino e N para Noturno").toLocaleLowerCase()
    

    switch (turnoDoAluno){
        case "m":
            console.log("Bom dia")
            break
        case "v":
            console.log("Boa tarde")
            break
        case "n":
            console.log("Boa noite")
            break
        default:
            console.log("tente de novo")
            break
    }

const generoFilme = prompt("Qual genero do filme?").toLocaleLowerCase()
const precoIngresso = Number(prompt("Qual o preço do Ingresso?"))

function apenasFantasia (generoFilme,precoIngresso){

    if (generoFilme ==="fantasia" && precoIngresso <= 15){
    return "Bom filme!"

    } else {
        return "Escolha outro filme ;("

}
}
console.log(apenasFantasia(generoFilme,precoIngresso))*/