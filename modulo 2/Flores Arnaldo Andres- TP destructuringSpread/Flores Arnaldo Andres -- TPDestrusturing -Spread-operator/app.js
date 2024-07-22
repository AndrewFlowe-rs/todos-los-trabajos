
const importar = require('./collectibles.js')


const hotToys = importar('Hot Toys');
const bandai = importar('Bandai');
const starWars = importar('Star Wars');
// console.log(hotToys);
// console.log(bandai);
//console.log(starWars);

const unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

//console.log(unifiedCollectibles);

const collectibles = {
    figuras: unifiedCollectibles,
   
    listFigures: function () {
        this.figuras.forEach((figura, i) => {
            console.log(`${i + 1} - Marca: ${figura.marca}---> Nombre: ${figura.nombre}, ---> Precio: $${figura.precio}----> Stock: ${figura.stock}`);
        });
    },
    
    figuresByBrand: function (brand) {
        return this.figuras.filter((figura) => figura.marca.toLowerCase() === brand.toLowerCase());
    },
};

//collectibles.listFigures();


//console.log(collectibles.figuresByBrand);

