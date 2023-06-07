//Como acessar o DOM
//tag
var titulo = document.getElementsByTagName('h1')[0];
console.log(titulo);

var lis = document.getElementsByTagName('li');
console.log(lis[3]);

//id
var paragrafo = document.getElementById('paragrafo');
console.log(paragrafo);

//class
var itensDaLista = document.getElementsByClassName('item');
console.log(itensDaLista);

var itensClasse = document.getElementsByClassName('item');
console.log(itensClasse);

//querySelectorAll: seleciona todos os itens da lista requisitada
//puxa os dados da lista 2
var itensQuery = document.querySelectorAll('#lista2 li')
console.log(itensQuery);
//puxa os dados da lista 1
var itensQuery2 = document.querySelectorAll('#lista .item')
console.log(itensQuery2);

//querySelector: seleciona apenas um item da lista
var lista = document.querySelector('#lista');
console.log(lista);

var primeiraLista = document.querySelector('ul');
console.log(primeiraLista);