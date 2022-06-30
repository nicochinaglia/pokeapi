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
  new google.maps.Marker({
    position: {
      lat: 40.645037,
      lng: -73.880224
    },
    map: map,
    icon: image
  });
}

idGlobal = 0;

function searchSubmit(form, pokeId) {
  form.preventDefault()
  PesquisarPoke(pokeId)
}

function PesquisarPoke(name){

$.ajax({ type: "GET", 
         url: "https://pokeapi.co/api/v2/pokemon/" + name , 
         dataType:"json",
}).done(function(dados) {
    idGlobal = dados.id;
    PopulaDados(dados);
});
}

function Next(){
  PesquisarPoke(idGlobal + 1);
}

function Previous(){
  PesquisarPoke(idGlobal - 1);
}

function PopulaDados(dados){

    id = dados.id;
    previous = parseInt(id - 1);
    after = parseInt(id + 1);

    document.getElementById('pokeName').innerHTML = dados.name;
    document.getElementById('pokeId').innerHTML = "Número na PokeDex: " + dados.id;


      document.getElementById('habilidade1').innerHTML = dados.abilities[0].ability.name;
      dados.abilities[1] && (document.getElementById('habilidade2').innerHTML = dados.abilities[1].ability.name);
      dados.abilities[2] && (document.getElementById('habilidade3').innerHTML = dados.abilities[2].ability.name);

      document.getElementById('tipo1').innerHTML = dados.types[0].type.name;
      document.getElementById('tipo1').style.backgroundColor = tipeColor.get(dados.types[0].type.name);
      if (dados.types[1]) {
        document.getElementById('tipo2').innerHTML = dados.types[1].type.name;
        document.getElementById('tipo2').style.backgroundColor = tipeColor.get(dados.types[1].type.name);
      } 

    document.getElementById('pokeImage').src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + id + '.png'
    document.getElementById('pokeImagePrevious').src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + previous + '.png'
    document.getElementById('pokeImageAfter').src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + after + '.png'
}