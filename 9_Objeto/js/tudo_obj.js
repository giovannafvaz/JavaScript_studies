let pessoa = {
    nome: "Giovanna",
    idade: 18,
    falar: function() {
        console.log("Olá mundo");
    },
    soma: function(a, b){
        return a + b;
    }
}

console.log(pessoa.nome);

pessoa.falar();
var soma = pessoa.soma(2,2);
console.log(soma);