/*Caso a instrução if seja negativa, podemos acionar else, que será outra condicional a ser executada.
O else if cria a possibilidade de fazer outra verificação e acionar mais um bloco de código.*/

var nome = "Giovanna";

//se um desses for true, ele ignora o restante. ex; se o if for verdadeiro, o else if e o else serão ignorados
//é possivel adicionar diversos else if
if(nome == "Larissa"){
    console.log("O seu nome é Larissa.");
} else if(nome == "Giovanna"){ //o else if deve vir sempre entre o if e o else!
    console.log("O seu nome é Giovanna.");
} else {
    console.log("Ela possui outro nome.");
}
