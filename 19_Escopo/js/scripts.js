//Escopos globais
var x = 1;
var y = 3;

console.log(x, y);

//Escopos locais
function teste() {
    var z = 0;
    
    console.log(z);

    console.log(x);
}

teste();

//mesmo tendo variáveis com nomes iguais, elas não se relacionam por serem de locais distintos
function testando() {
    var z = 5;
    console.log(z);
}

testando();