window.onload = async () => {
    const id = document.querySelector('[name="id"]');

    const params = new URLSearchParams(window.location.search);
    const movieId = params.get('id');

    const title = document.querySelector('#title')
    const rating = document.querySelector('#rating')
    const awards = document.querySelector('#awards')
    const release_date = document.querySelector('#release_date')
    const length = document.querySelector('#length')


    if (movieId) {
        try {
          const response = await fetch(`/api/movies/${movieId}`);
          const movie = await response.json();
    
          id.value = movie.id;
          title.value = movie.title;
          rating.value = movie.rating;
          awards.value = movie.awards;
          release_date.value = new Date(movie.release_date).toISOString().split('T')[0];
          length.value = movie.length;
        } catch (error) {
          console.error('Error fetching movie details:', error);
        }
      }

      document.querySelector('.botonCrear').onclick = async () => {
        const movieData = {
          title: title.value,
          rating: rating.value,
          awards: awards.value,
          release_date: release_date.value,
          length: length.value,
        };
    
        try {
          const response = await fetch('/api/movies/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(movieData),
          });
          if (response.ok) {
            window.location.href = '/';
          } else {
            console.error('Error creating movie:', response.statusText);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

      document.querySelector('.botonEditar').onclick = async () => {
        if (!movieId) {
          alert('No hay película seleccionada para editar');
          return;
        }
    
        const movieData = {
          title: title.value,
          rating: rating.value,
          awards: awards.value,
          release_date: release_date.value,
          length: length.value,
        };
    
        try {
          const response = await fetch(`/api/movies/update/${movieId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(movieData),
          });
          if (response.ok) {
            window.location.href = '/';
          } else {
            console.error('Error editing movie:', response.statusText);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
      document.querySelector('.botonBorrar').onclick = async () => {
        try {
          const response = await fetch(`/api/movies/delete/${movieId}`, {
            method: 'DELETE',
          });
          if (response.ok) {
            window.location.href = '/';
          } else {
            console.error('Error deleting movie:', response.statusText);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
}