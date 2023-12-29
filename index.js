var pokes = document.getElementById("pokes");
var pokemones = [];


 fetch('https://pokeapi.co/api/v2/pokemon?limit=152')
  .then(response => response.json()) 
  .then (data => { 
    var listapokes = [];
    var contador = 0;

       data.results.forEach(pokemon => {
        contador += 1  
        var url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+contador+".png"

        listapokes.push(
          `<div class="card" id="card"><p>`+contador+`</p>
          <img src="`+url+`" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">`+pokemon.name.toUpperCase()+`</h5>            
          </div>
          </div>`
          )
       }); 
       pokes.innerHTML = listapokes.join("")
  });
  
  

