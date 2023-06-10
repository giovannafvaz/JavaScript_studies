const objs = [
    {
        nome: 'Matheus',
        idade: 30,
        esta_trabalhando: true,
        detalhes_profissao: {
            profissao: 'Programador',
            empresa: 'Empresa X',
        },
        hobbies: ['Programar','Correr','Ler'],
    },
    {
        nome: 'Giovanna',
        idade: 18,
        esta_trabalhando: false,
        detalhes_profissao: {
            profissao: null,
            empresa: null,
        },
        hobbies: ['Programar','Cantar','Ler'],
    }
]

console.log(objs);


//Converter objeto para JSON
const jsonData = JSON.stringify(objs);

console.log(jsonData);
console.log(typeof jsonData);

//converter JSON para objetos
const objData = JSON.parse(jsonData);

console.log(objData);
console.log(typeof objData);

objData.map((pessoa) => {
    console.log(pessoa.nome);
})