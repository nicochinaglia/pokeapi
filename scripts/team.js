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

function getPoke(id) {
    return new Promise((resolve, reject) => {
        $.ajax({ type: "GET", 
        url: "https://pokeapi.co/api/v2/pokemon/" + id , 
        dataType:"json",
       }).done(resolve)
       .fail(_ => resolve(null))
    })
}

function GerarTime(){
    console.log('click generate')
    document.getElementById('showPokemon').innerHTML = ''
    //document.getElementById('gerarPoke').onclick = null;
     Promise.all([...Array(10)].map(() => {
        return getPoke(randomInteger(1, 989))
      })).then(pokes => {
        const pokesdivs = pokes.filter(poke => poke !== null).map(pokeDiv)
        pokesdivs.length = 6
        pokesdivs.forEach(div => document.getElementById('showPokemon').appendChild(div))
      });
}