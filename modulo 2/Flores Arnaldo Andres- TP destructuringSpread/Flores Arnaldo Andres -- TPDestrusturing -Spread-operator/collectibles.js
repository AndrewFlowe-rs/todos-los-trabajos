const importar = (nombre) => {
    const fs = require ('fs')
    let nombreArchivo = "";
  switch (nombre) {
    case "Hot Toys":
        nombreArchivo = "figuras1"
        break;
    case "Bandai" :
        nombreArchivo = "figuras2"    
        break ;
    case "Star Wars" :
       nombreArchivo = "figuras3"
       break    
  
  }  
  const path = `./datos/${nombreArchivo}.json`
  const nombreJSON = fs.readFileSync(path,'utf-8')
  const nombreParse = JSON.parse(nombreJSON)
  return nombreParse
}

module.exports = importar
console.log(importar ("Bandai"));