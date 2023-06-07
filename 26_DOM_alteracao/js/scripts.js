//selecionar elemento
var title = document.querySelector('#title');

//alterando:
//innerHTML
title.innerHTML = "Testando texto alterado";

//textContent; mais utilizado, recomendado
var subtitle = document.querySelector("#subtitle");
console.log(subtitle);

subtitle.textContent = "Testando o text content";