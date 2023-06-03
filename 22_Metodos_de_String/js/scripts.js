//length: quantidade de caracteres da string
var nome = "Giovanna";
console.log(nome.length);

var obj = "Bola";
console.log(obj.length);

//indexOf
console.log(nome[2]);

var frase = "O rato roeu a roupa do rei de roma.";
console.log(frase.indexOf("roeu"));

//slice: extrair algo de uma string maior
var roeu = frase.slice(7, 11);
console.log(roeu);

//replace: suibstituir uma palavra
var novaFrase = frase.replace("roeu", "teste");
console.log(novaFrase);

//toLowerCase e toUpperCase: deixar tudo em maiúsculo ou minúsculo
var frase = "Esta é a frase de teste";
var fraseMaiuscula = frase.toLowerCase();

console.log(fraseMaiuscula);
console.log(fraseMaiuscula.toLowerCase);

//trim
var nome = "    Matheus     ";
var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

//split
console.log(frase.split(" "));

var tags = "PHP, JavaScript, Html, CSS";
console.log(tags.split(", "));

//lastIndexOf
var fraseDois =  "Eu quero a última palavra teste dessa frase de teste";
console.log(fraseDois.indexOf("teste"));
console.log(fraseDois.lastIndexOf("teste"));