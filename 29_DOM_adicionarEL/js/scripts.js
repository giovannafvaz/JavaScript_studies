//criar elemento
var el = document.createElement("div");

el.classList = "dic-criada";
console.log(el);

var container = document.querySelector("#container");

//inserindo elemento filho
container.appendChild(el);

//inserBefore (inserir antes)
var el2 = document.createElement("div");
el2.classList = "div-before";

var el3 = document.querySelector("#container .div_criada");
console.log(el3);

container.insertBefore(el2, el3);