/*
ELEMENTOS NECESSÁRIOS
 Inicialização de váriável
 Condição de continuação
 Um conjunto de ações
 Uma alteração que mude a condição de continuação*
 */

/*
console.log('Prática Guiada')

let numero = Number (prompt('Digite um Número'))

let soma = 0

while (numero !==0){

    soma = soma + numero
    console.log(soma)

    numero = Number (prompt('Digite outro Número'))
}

console.log('Saiu do Loop')
*/

/*
console.log('Prática Guiada  2')

let numero = Number (prompt('Digite um Número'))

for(let i=0; i>= numero; i++){

    console.log(i);

}

console.log ('Fim do laço for')
*/

/*
console.log('Prática Guiada  3')

const numero = [0, 1, 4, 5, 8]
for (let indice = 0; indice < numero.lenght; indice ++){
console.log(`O número do índice${indice} é ${numero[indice]}`)
}

console.log("Fim do Array")
*/

/*
let num = Number(prompt('Digite seu numero'))

for (let num3 = 0 ; num3<=10;num3++)

console.log(`${num}x${num3}`)
*/


const bichos = ["gato", "cachorro", "pássaro", "roedores"]

for(i=0; i< bichos.length;i++){
    console.log(bichos[i].toUpperCase())
}