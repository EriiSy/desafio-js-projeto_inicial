alert('Boas vindas ao nosso site!'); 

// Criação Solicitada pela Alura 
let nome = 'Lua'; 
let idade = 25; 
let numeroDeVendas = 50; 
let saldoDisponivel = 1000; 

// Solicitação de Alerta
alert('Erro! Preencha todos os campos');

// Pedido para a criação de uma mensagem de erro que irá ficar
// salva em mensagemDeErro
let mensagemDeErro = 'Erro! Preencha todos os campos'; 
alert(mensagemDeErro);

// inputs que receberão do usuário o Nome e a Idade
nome = prompt('Qual o seu nome?'); 
idade = prompt('Qual a sua idade?');


// Verificação de Idade para tirar a habilitação. 
if (idade >= 18){
    alert('Pode tirar a habilitação');
}
else{
    alert('Habilitação não autorizada, o usuário possui idade menor que 18');
}
