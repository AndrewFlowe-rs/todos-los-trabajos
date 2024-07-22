
  
  // Crea un array de películas
var peliculas = ["Turno de día","30 noches con mi ex","bestia"," el monte","top gun maveric","Elvis", "Thor love and thunder "]



function convertirPeliculaEnMayusculasYAgregarAlInicio(peliculas) {

  
  
  let peliculaThorEnMayusculas = peliculas[6].toUpperCase();

  peliculas.unshift(peliculaThorEnMayusculas);
  
  peliculas.pop()
  
  return peliculas;
}

let peliculasEnMayusculas = convertirPeliculaEnMayusculasYAgregarAlInicio(peliculas);

console.log(peliculasEnMayusculas);



// SEGUNDA ACTIVIDAD


let peliculasEstreno =[ "Counter-Strike", "NOP", "Vértigo","Nick","Avatar" ]
console.log(peliculasEstreno)
//convertir en cadena de texto
let borrarJuego = peliculasEstreno.shift()
console.log(peliculasEstreno)


let separar = peliculasEstreno.join(', ')
console.log(separar)


console.log(peliculasEstreno)


function combinarEstructuras (peliculas, peliculasEstreno){
    return peliculas.concat(peliculasEstreno)

}
console.log(combinarEstructuras(peliculas,peliculasEstreno))
