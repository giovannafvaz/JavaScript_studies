function primeiraFuncao() {
    console.log("Hello World das funções");
}

primeiraFuncao();

function dizerNome(nome) {
    console.log("O nome é: " + nome);
}

dizerNome("Matheus");
dizerNome("Pedro");
dizerNome("Xavier");

var nomeDoBancoDeDados = "João";

dizerNome(nomeDoBancoDeDados);

function soma(a, b){
    var soma = a + b;
    return soma;
}

var soma1 = soma(2, 5);
console.log(soma1);

var soma2 = soma(5, 5);
console.log(soma2);

console.log(soma(4, 5));
