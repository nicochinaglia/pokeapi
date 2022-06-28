function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pokeDiv(pokemonData) {
    console.log(pokemonData);
    const div = document.createElement('div');
    div.style.width = '200px'
    var oImg = document.createElement("img");
    const gotShiny = randomInteger(1, 10) === 1 //8192
    console.log('gotshiny', gotShiny)
    const image = gotShiny ? pokemonData.sprites.front_shiny : pokemonData.sprites.front_default
    oImg.setAttribute('src', image);
    oImg.setAttribute('width', '200px');
    div.appendChild(oImg);

    pokeName = (gotShiny ? 'Shiny ' : '' ) + pokemonData.name;

    var h2 = document.createElement("h2");
    var textNode = document.createTextNode(pokeName);
    h2.appendChild(textNode);
    div.appendChild(h2);
    return div;
}

function GerarTime(){
    console.log('click generate')
    document.getElementById('showPokemon').innerHTML = ''
    //document.getElementById('gerarPoke').onclick = null;

    for(i = 0; i < 6; i++){
        resultado = randomInteger(1, 989);
        $.ajax({ type: "GET", 
         url: "https://pokeapi.co/api/v2/pokemon/" + resultado , 
         dataType:"json",
        }).done(function(dados) {
            document.getElementById('showPokemon').appendChild(pokeDiv(dados));
        });
    }

}