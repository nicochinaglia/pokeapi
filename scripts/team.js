function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GerarTime(){

    for(i = 0; i < 6; i++){
        resultado = randomInteger(1, 989);
        $.ajax({ type: "GET", 
         url: "https://pokeapi.co/api/v2/pokemon/" + resultado , 
         dataType:"json",
}).done(function(dados) {
    console.log(dados.name);
    pokeId = dados.id;

    var oImg = document.createElement("img");
    oImg.setAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokeId + '.png');
    oImg.setAttribute('width', '200px'); 
    document.body.appendChild(oImg);
});
}  
}