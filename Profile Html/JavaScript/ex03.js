// crie um script que receba o nome e sobrenome de uma pessoa e concatene-os em uma única string

let nome = prompt("Digite o seu nome:");
let sobrenome = prompt("Digite o seu sobrenome:");

let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);


// crie um script que conte quantos caracteres de uma determinada string possui e exiba essa informação
// Defina a string que você deseja contar os caracteres
let nome = prompt("Digite algo para saber a quantidade de caracteres");

// Use o método length para obter o número de caracteres da string
let numeroCaracteres = nome.length;

// Exiba a informação
console.log("A string possui " + numeroCaracteres + " caracteres contando os espaços.");


// crie um script que converta uma string fornecida pelas letras maiúsculas e exiba a frase em CAIXA ALTA

let suaFrase = prompt("Escreva sua mensagem para converter para letras maiúsculas");
let fraseEmCaixaAlta = suaFrase.toUpperCase();

console.log(fraseEmCaixaAlta);


// crie um script que extraua uma parte especifica de uma string. por exemplo. extraia os primeiros 3 caracteres de um uma palavra e exiba o resultado

// crie um script que substitua as letras, conforme: A > 4, I(letra i) > 1, E > 3, O > 0, A > 5
