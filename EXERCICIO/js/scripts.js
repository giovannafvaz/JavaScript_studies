//Função que recebe a URL de uma API e a executa via GET. Ela retorna o resultado
function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request;
}

//Função que cria a URL com o Pokemon requisitado, chama a API e, em caso de sucesso, 
//chama a função que exibe os dados do Pokemon. Em caso de erro, exibe um Alert
function onButtonClick() {
    let pokemonFilter = document.getElementById("pokemonFilter").value;
    let pokeAPIResponse = fazGet("https://pokeapi.co/api/v2/pokemon/" + pokemonFilter);
    if(pokeAPIResponse.status > 299){
        alert('Pokemon inexistente');
        return;
    }
    let pokemon = JSON.parse(pokeAPIResponse.responseText);
    exibePokemon(pokemon);
}

//Função que recebe o JSON retornado da API e exibe o nome e a imagem do pokemon requisitado 
function exibePokemon(pokemon) {
    document.getElementById("pokemonLabel").innerHTML = 'Pokemon: ' +  pokemon.forms[0].name;
    document.getElementById("pokemonImg").src = pokemon.sprites.other['official-artwork'].front_default;
}

