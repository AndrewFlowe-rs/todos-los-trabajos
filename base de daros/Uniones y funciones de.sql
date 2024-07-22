USE movies_db;
-- Microdesafio 1

SELECT title , name   FROM series
INNER JOIN genres 
ON genre_id = genres.id ;

-- Microdesafio paso 1-a

SELECT title , first_name , last_name FROM episodes
INNER JOIN actor_episode ON episodes.id = episode_id
INNER JOIN actors ON actors.id = actor_id;

-- Microdesafio 2 

SELECT DISTINCT CONCAT(first_name, ' ' , last_name) AS 'nombre completo'
FROM actors 
INNER JOIN actor_movie 
ON actor_id = actors.id 
INNER JOIN  movies 
ON movie_id = movies.id
WHERE movies.title LIKE '%Guerra de las galaxias%';


-- Microdesafio 3 

SELECT title , COALESCE ( name , 'NO TIENE GENERO' ) FROM movies 
LEFT JOIN genres ON genres.id = genre_id;


-- Microdesafio 4

SELECT title, DATEDIFF(end_date, release_date) AS Duracion
FROM series;


-- Microdesafio 5 
SELECT DISTINCT CONCAT(first_name, ' ', last_name) AS nombre_de_actor_completo
FROM actors
WHERE LENGTH(first_name) > 6
ORDER BY nombre_de_actor_completo ASC;

-- Microdesafio 3 b

SELECT COUNT(*) AS total_de_episodios_en_la_base
FROM episodes;

-- Microdesafio 3 c

SELECT series.title , COUNT(DISTINCT number) AS total_de_temporadas
FROM series
INNER JOIN seasons ON series.id = serie_id
GROUP BY series.id;

-- Microdesafio 3 d

SELECT genres.name, COUNT(*) AS total_de_películas
FROM movies
INNER JOIN genres ON movies.genre_id = genres.id
GROUP BY genres.id
HAVING COUNT(*) >= 3;



-- TERMINO RL DESAFIO , ME VOY A VER LA NUEVA CLASE .SALUDOS BY ANDRU