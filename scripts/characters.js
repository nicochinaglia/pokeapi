const tipeColor = new Map();

tipeColor.set("normal", "#A9AA79");
tipeColor.set("fire", "#F0812C");
tipeColor.set("water", "#6891F0");
tipeColor.set("grass", "#79C94F");
tipeColor.set("electric", "#F5CF2B");
tipeColor.set("ice", "#99D9D9");
tipeColor.set("fighting", "#C12C23");
tipeColor.set("poison", "#A13EA1");
tipeColor.set("ground", "#E1C168");
tipeColor.set("flying", "#A991F0");
tipeColor.set("psychic", "#F85789");
tipeColor.set("bug", "#A9B91A");
tipeColor.set("rock", "#B9A135");
tipeColor.set("ghost", "#715799");
tipeColor.set("dragon", "#7135F8");
tipeColor.set("dark", "#715746");
tipeColor.set("steel", "#B9B9D1");
tipeColor.set("fairy", "#FF9CE2");

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {
      lat: 40.645037,
      lng: -73.880224
    },
  });

  var image = 'images/maps-and-flags.png';
  var beachMarker = new google.maps.Marker({
    position: {
      lat: 40.645037,
      lng: -73.880224
    },
    map: map,
    icon: image
  });
}


function PesquisarPoke(name){

$.ajax({ type: "GET", 
         url: "https://pokeapi.co/api/v2/pokemon/" + name , 
         dataType:"json",
}).done(function(dados) {
    PopulaDados(dados);
});
}

function PopulaDados(dados){
    document.getElementById('name').value = dados.name;
    document.getElementById('exp').value = dados.base_experience;

    
    id = dados.id;
    previous = parseInt(id - 1);
    after = parseInt(id + 1);

    document.getElementById('pokeName').innerHTML = dados.name;

    if( dados.types[1] ){
        var tipo1 = document.getElementById('tipo1').innerHTML = dados.types[0].type.name;
        var tipo2 = document.getElementById('tipo2').innerHTML = dados.types[1].type.name;
    }else{
        var tipo1 = document.getElementById('tipo1').innerHTML = dados.types[0].type.name;
        var tipo2 = document.getElementById('tipo2').innerHTML = "";
    }
  
    console.log(tipo2);

    document.getElementById('pokeImage').src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + id + '.png'
    document.getElementById('pokeImagePrevious').src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + previous + '.png'
    document.getElementById('pokeImageAfter').src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + after + '.png'

    document.getElementById('tipo1').style.backgroundColor = tipeColor.get(tipo1);
    document.getElementById('tipo2').style.backgroundColor = tipeColor.get(tipo2);
}