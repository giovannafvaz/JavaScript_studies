//length: tamanho do array
var arr = [1,2,3,4,5];
console.log(arr.length);

//push: serve para adicionar algo no fim do array
arr.push(6);
arr.push('Qualquer coisa');
console.log(arr);

//pop: remove o elemento do fim do array
arr.pop();
console.log(arr);

//unshift: adicionar algo no começo do array
arr.unshift(0);
arr.unshift("teste");
console.log(arr);

//shift: remover algo no começo do array
arr.shift();
console.log(arr);

//acessar o último elemento do array
console.log(arr[arr.length - 1]);

//isArray; verifica se é o array que estamos verificando
console.log(Array.isArray(5));
console.log(Array.isArray(arr));

//splice; serve para remover um item em qualquer posição do array, permitindo uma substiruição desse item por outro
var array = [1,2,3,4,5];
array.splice(2, 0, 999);
console.log(arr);

array.splice(4,1);
console.log(array);

//indexOf: acha um item de acordo com sua posição
console.log(array.indexOf(5));

//join: agrupa as strings em uma só
var arr2 = ["O", "rato", "roeu", "a", "roupa"];
console.log(arr2.join(" "));

//reverse; inverte a ordem dos arrays. ex: [1,2,3,4,5] <=> [5,4,3,2,1]
console.log(arr2.reverse());