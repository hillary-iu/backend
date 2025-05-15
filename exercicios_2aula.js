//exercicio.01
// . Crie um programa que declare duas variáveis e exiba o resultado da soma, subtração, multiplicação e divisão desses números
let x = 8;
let y = 8;

console.log(`${x} + ${y} = ${x+y}`)
console.log(`${x} - ${y} = ${x-y}`)
console.log(`${x} * ${y} = ${x*y}`)
console.log(`${x} / ${y} = ${x/y}`)


//exercicio.02
//Declare duas idades e utilize operadores de comparação para verificar se uma pessoa é mais velha que a outra
let hillary = 15
let paulo = 17

let mensagem  = hillary < paulo? "hillary é mais velha que paulo" : "paulo é mais velho que hillary"
console.log(mensagem)

//exercicio.03
//Crie uma variável idade com um número e use o operador ternário para verificar se o valor armazenado na variável é maior ou igual a 18. Imprima “Maior de idade” ou “Menor de idade”
let idade = 29
let resultado = idade > 18? 'maior de idade' : 'menor de idade'

console.log(resultado)
//console log é tipo um print

//exercicio.04
//Crie uma variável com um número e use o operador ternário para verificar se é par ou ímpar
let e = 9
let soma = e % 2
let men = e == 0 ? 'impar' : 'par'

console.log(men)