//parseFloat 10.0: transforma string em float
console.log(parseFloat('12.999'));
console.log(Number.parseFloat('12.999'));

//paseInt: transforma string em int
console.log(parseInt('20'));
console.log(parseInt('16.96'));

//toFixed: deixa com o número de casas decimais desejado, com o uso de (x)
console.log(23.5151515115151.toFixed(1));

//isNaN: is not a number 
console.log(isNaN("teste")); //true => is a string
console.log(isNaN(12)); //false => is a number
console.log(isNaN("14")); //true => is a string

//MAX_VALUE e MIN_VALUE
console.log(Number.MAX_VALUE); //retorna o valor máximo
console.log(Number.MIN_VALUE); //retorna o valor mínimo

console.log(2.2345649856249856298e+308);