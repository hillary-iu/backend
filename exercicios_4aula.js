import readline from 'readline-sync';
//let dia = Number(readline.question("imforme o dia da semana: "));
let dia = readline.questionInt("imforme o dia da semana: ")

//Solicite ao usuário para inserir um número representando um dia da
//semana (1 a 7) e mostre o nome do dia correspondente.
//01

switch (dia) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda-feira');
        break
    case 3:
        console.log('Terça-feira');
        break;
    case 4:
        console.log( 'Quarta-feira');
        break
        case 5:
        console.log('Quinta-feira');
        break;
    case 6:
        console.log('Sexta-feira');
        break;
    case 7:
        console.log('Sabado');
        break;
    default:
        console.log('valor invalido! \ninforme um valor de 1 a 7')
        break;
}

//Peça ao usuário para inserir um número de mês (1 a 12) e exiba o nome
//do mês.

//2
let mês = readline.questionInt('imforme o numero do mês: ')
switch (dia) {

    case 1:
        console.log('janeiro');
        break;
    case 2:
        console.log('Fevereiro');
        break
    case 3:
        console.log('Março');
        break;
    case 4:
        console.log( 'abril');
        break
        case 5:
        console.log('maio');
        break;
    case 6:
        console.log('Junho');
        break;
    case 7:
        console.log('Julho');
        break;
        case 8:
        console.log('Agosto');
        break;
    case 9:
        console.log('Setenbro');
        break;
    case 10:
        console.log('Outubro');
        break;
    case 11:
        console.log('Novenbro');
        break;
    case 12:
        console.log('Dezenbro');
        break;
    default:
        console.log('valor invalido! \ninforme um valor de 1 a 12')
        break;
}

//. Implementar um programa que simule uma calculadora. O usuário deverá
//informar dois valores e a operação desejada.
//Com auxílio de um switch deve ser computado e mostrado o resultado da
//operação.

//3

let x = readline.questionFloat("Informe o primeiro valor: ");
let r = readline.questionFloat("Imforme o segundo valor: ");
let op = readline.questionInt("Escolha a opção: \n[1]soma \n[2] Subtração \n[3] MUltiplicação \n[4]divisão ")

switch (op) {
    case 1:
        console.log(`$ {x} + $ {r} = ${x  + r}`);
        break;
    case 2:
        console.log(`$ {x} - $ {r} = ${x - r}`);
        break
    case 3:
        console.log(`$ {x} * $ {r} = ${x * r}`);
        break;
    case 4:
        console.log(`$ {x} / $ ry} = ${x / r} `);
        break
    case 5:
        console.log("opção invalida");
        break;
}

//Um funcionário irá receber um aumento de acordo com o seu
//categoria de bonificação (A,B,C e D).
//A tabela abaixo mostra o percentual de aumento de cada
//categoria:
//Faça um programa que leia a categoria de bonificação e o
//salário atual de um funcionário, em seguida calcule e
//imprima o seu novo salário. Use a instrução switch.

//4
import entradaDados from 'readline-sync';

let salario = entradaDados.questionFloat('Informe o valor do seu salário atual: ');
let cat = entradaDados.question('Informe a sua categoria de bonificação: ').toUpperCase();
let bonus = 0;

    switch (cat) {
    case 'A':
        bonus = salario * 0.05
        console.log(`Novo salário: ${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break
    case 'B':
        bonus = salario * 0.10
        console.log(`Novo salário: ${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break
    case 'C':
        bonus = salario * 0.15
        console.log(`Novo salário: ${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break
    case 'D':
        bonus = salario * 0.20
        console.log(`Novo salário: ${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break

    default:
    console.log('Categoria inválida!')
    }
