-- Select 10 best movies.
SELECT *
FROM movies
ORDER BY rating desc LIMIT 10
-- Select 10 best movies that have at least 5000 votes.
SELECT *
FROM movies
WHERE votes_nr > 5000
ORDER BY rating desc LIMIT 10;
-- Select 10 best movies that have at least 5000 votes and are actually feature films.
SELECT *
FROM movies
WHERE votes_nr > 5000
  and movie_type_id = 1
ORDER BY rating desc LIMIT 10;
-- What is the ID of the movie "Shawshank redemption"?
SELECT id, name
FROM movies
WHERE name LIKE '%Shawshank redemption%';
-- Add a new movie.
INSERT INTO movies (movie_type_id, name, rating, end_year)
VALUES (1, "Furiosa: A Mad Max Saga", 7.9, 2024);
--What is the ID of the movie you inserted? 5863127
SELECT id, name
FROM movies
WHERE name LIKE "%Furiosa: A Mad Max Saga%"
-- Update the movie's type, status and certification.
UPDATE movies
SET certification_id = 25,
    movie_status_id  = 14
WHERE id = 5863127;
--
SELECT *
FROM movies
WHERE id = 5863127;
--Give me information about the movie you inserted, including its type, status and certification.
SELECT movies.name             AS name,
       movies.movie_type_id    AS type_id,
       movie_types.name        AS movie_type,
       movies.certification_id AS cert_id,
       certifications.slug     AS cert_type,
       movies.movie_status_id  AS status_id,
       movie_statuses.slug     AS staus_type
FROM movies
         JOIN movie_types ON movies.movie_type_id = movie_types.id
         JOIN certifications ON movies.certification_id = certifications.id
         JOIN movie_statuses ON movies.movie_status_id = movie_statuses.id
WHERE movies.id = 5863127;
