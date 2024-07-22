
window.addEventListener('load' , () => {
    let titulo = document.querySelector('.moviesAddTitulo')
    let titleMovie = document.querySelector('#title');
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    let existerr =true

   
//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    
  titleMovie.focus();
 
  titleMovie.addEventListener('blur', () => {
    if (titleMovie.value.trim() == "") {
       titleMovie.classList.add('is-invalid');
        titleMovie.focus();
         
     } else {
         titleMovie.classList.remove('is-invalid');
         titleMovie.classList.add('is-valid');
         existerr = false
    }
  });



    // formulario.addEventListener("submit", function (event) {
    //     event.preventDefault(); // Evita el envío del formulario si hay errores
    //   switch (key) {
    //     case value:
            
    //         break;
      
    //     default:
    //         break;
    //   }
       
        
    //   });

})