var array = ["licuadora", "microondas", "horno electrico", "lavadora", "secadora", "heladera"]

//acceder a cada elemento del string//

console.log("el array contiene " + array.length + " elementos")
console.log(array)
console.log(array[0] + " .posicion 0")
console.log(array[1] + " .posicion1")
console.log(array[2] + " .posicion2")
console.log(array[3] + " .posicion3")
console.log(array[4] + " .posicion4")
console.log(array[5] + " .posicion5")

//extraer el primer elemento delarray y agregarlo al final del mismo
let eliminarPrimer = array.shift()
console.log(eliminarPrimer)
console.log(array)

//añadirlo al final 
array.push("licuadora")
console.log(array)

// añadir dos nuevos elementos al array

array.push("lavavajillas", "cafetera")
console.log(array)

//mostrar cuantos elementos tiene el array 

console.log("ahora el array tiene " + array.length + " elementos")

//buscar un elemento y crear una condicion responsable de establecer si existe o no el producto dentro del array , De existir se le debe mostrar el mensaje producto encontrado

let buscado = array.includes("secadora")
if (buscado) {
    console.log("producto encontrado")
} else {
    console.log("El producto buscado no existe")
}

//unificar todos los elementos del array en una cadena de texto separando loselementos por espacios en blanco

let cadenaDeTexto = array.join(" ")
console.log(cadenaDeTexto)

// Determinar la cantidad de elementos que posee la cadena de texto obtenida.

let nuevaCantidad = array.length
console.log("la cadena de texto contiene " + nuevaCantidad + " elementos")


/*Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la
función adecuada para ello.*/

let palabraNueva = cadenaDeTexto.replace("horno electrico", "cocina")
console.log(palabraNueva)


/*Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras
de la cadena de texto. Tener en cuenta que los elementos deben estar separados por
una coma.*/

let arrayNuevo = palabraNueva.split(" ")
console.log(arrayNuevo)