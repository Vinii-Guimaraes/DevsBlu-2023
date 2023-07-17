var numero = prompt("Digite um número: ");

// Verificar se o número é válido
while (isNaN(numero)) {
  numero = prompt("Valor inválido. Por favor, digite um número:");
}

// Verificar se o número é par ou ímpar
if (numero % 2 === 0) {
  console.log(numero + " é um número par.");
} else {
  console.log(numero + " é um número ímpar.");
}

// Crie um script que com o preço de um produto calcule o valor com desconto de 10% e exiba o valor com desconto.

var precoProduto = prompt("digite o valor do produto"); 

var valorDesconto = precoProduto * 0.1;
var valorComDesconto = precoProduto - valorDesconto;

console.log("O valor com desconto é: " + valorComDesconto);

// Escreva um script que determine se um número é primo

// Solicita ao usuário para inserir um número
var numero = parseInt(prompt("Digite um número:"));

// Verifica se o número é primo
var primo = true;

// Não é possível ter número primo menor que 2
if (numero < 2) {
    primo = false;
} else {
    // Verifica a divisão do número por todos os valores menores que ele
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            primo = false;
            break;
        }
    }
}

// Exibe o resultado para o usuário
if (primo) {
    console.log(numero + " é um número primo.");
} else {
    console.log(numero + " não é um número primo.");
}

// Crie um script que com a idade de uma pessoa em anos e converta para dias e exiba o resultado.
let idadeEmAnos = prompt("Digite sua idade: ");
let idadeEmDias = idadeEmAnos * 365;
console.log("A sua idade em dias é: " + idadeEmDias);

// Crie um script que solicite um número de telefone ao usuário e formate-o no formato "(XX) XXXX-XXXX" e exiba o número de telefone formatado.
var numeroTelefone = prompt("Digite seu número de telefone:");
numeroTelefone = numeroTelefone.replace(/\D/g, '');

if (numeroTelefone.length !== 10) {
  alert("Número de telefone inválido!");
} else {
  var codigoArea = numeroTelefone.substring(0, 2);
  var parte1 = numeroTelefone.substring(2, 6);
  var parte2 = numeroTelefone.substring(6, 10);

  var telefoneFormatado = "(" + codigoArea + ") " + parte1 + "-" + parte2;

  alert("Número de telefone formatado: " + telefoneFormatado);
}

// Crie um programa que exiba todos os números pares de 1 a 10. Utilize um laço de repetição e condicional para verificar se cada número é par.
// Percorre os números de 1 a 10
for (let i = 1; i <= 10; i++) {
    
    if (i % 2 === 0) {
      // Exibe o número par
      console.log(i);
    }
  }
  
  // Crie um programa que solicite ao usuário três notas e calcule a média. Se alguma nota for inválida (for menor que 0 ou maior que 10), solicite novamente essa nota. Utilize um laço de repetição e condicional para validar as notas.
  function calcularMedia() {
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    while (nota1 < 0 || nota1 > 10) {
      nota1 = parseFloat(prompt("Nota inválida! Digite novamente a primeira nota:"));
    }
  
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    while (nota2 < 0 || nota2 > 10) {
      nota2 = parseFloat(prompt("Nota inválida! Digite novamente a segunda nota:"));
    }
  
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));
    while (nota3 < 0 || nota3 > 10) {
      nota3 = parseFloat(prompt("Nota inválida! Digite novamente a terceira nota:"));
    }
  
    let media = (nota1 + nota2 + nota3) / 3;
    return media.toFixed(2);
  }
  
  let mediaFinal = calcularMedia();
  console.log("A média é: " + mediaFinal);
  
  //Crie um programa que exiba uma contagem regressiva de 10 a 1. Utilize um laço de repetição para iterar de 10 a 1 e exiba cada número.
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
  
  //Crie um programa que solicite uma palavra ao usuário e verifique se contém uma letra específica. Utilize um laço de repetição para percorrer cada letra da palavra e um condicional para verificar se a letra desejada está presente.

const palavra = prompt("Digite uma palavra:");


const letraDesejada = prompt("Digite uma letra:");

let letraEncontrada = false;


for (let i = 0; i < palavra.length; i++) {
  
  if (palavra[i] === letraDesejada) {
    letraEncontrada = true;
    break; 
  }
}

if (letraEncontrada) {
  console.log("A palavra contém a letra", letraDesejada);
} else {
  console.log("A palavra não contém a letra", letraDesejada);
}

let numero = 1;

//(while) Escreva um programa que imprima na tela os números ímpares de 1 a 20.
while (numero <= 20) {
  if (numero % 2 !== 0) { // Verifica se o número é ímpar
    console.log(numero); // Imprime o número ímpar na tela
  }
  numero++; // Incrementa o número em 1 para prosseguir para o próximo número
}

//(for) Faça um programa que calcule a média de um vetor de números reais com 10 elemento.
let vetor = [1.5, 2.3, 4.7, 3.2, 6.8, 5.1, 2.9, 7.4, 3.6, 4.9];
let soma = 0;

for (let i = 0; i < vetor.length; i++) {
  soma += vetor[i];
}

let media = soma / vetor.length;

console.log("A média é: " + media);


// Gerando um número aleatório de 1 a 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Variável para armazenar o palpite do usuário
let palpite;

// Mostrando uma mensagem de boas-vindas ao jogador
console.log("Fala meu consagrado, seja bem vindo ao jogo de adivinhação! eu duvido acertar o número aleatório em menos de 5 tentativas");

// Loop do-while para continuar até que o usuário acerte o número
do {
  // Solicitando ao usuário um palpite
  palpite = parseInt(prompt("Digite seu palpite:"));

  // Verificando se o palpite é maior, menor ou igual ao número aleatório
  if (palpite > numeroAleatorio) {
    console.log("Seu palpite é maior. Tente novamente.");
  } else if (palpite < numeroAleatorio) {
    console.log("Seu palpite é menor. Tente novamente.");
  } else {
    console.log("Parabéns! Você acertou o número.");
  }
} while (palpite !== numeroAleatorio);

// (for-each) Crie um programa que some todos os valores de um vetor de inteiros com 100 elementos.
let vetor = [/* aqui você pode colocar os 100 elementos do vetor */];
let soma = 0;

for (let i = 0; i < vetor.length; i++) {
  soma += vetor[i];
}

console.log("A soma de todos os valores é: " + soma);

// sequência de Fibonacci

const numeroDeTermos = 10;


let termo1 = 0;
let termo2 = 1;

console.log(termo1);
console.log(termo2);

for (let i = 2; i < numeroDeTermos; i++) {
  let proximoTermo = termo1 + termo2;
  console.log(proximoTermo);
  
  // Atualizando os valores dos termos anteriores para a próxima iteração
  termo1 = termo2;
  termo2 = proximoTermo;
}
