USE record_company;

-- 1.
-- CREATE TABLE songs (
--   id INT NOT NULL AUTO_INCREMENT,
--   name VARCHAR(255) NOT NULL,
--   length FLOAT NOT NULL,
--   album_id INT NOT NULL,
--   PRIMARY KEY (id),
--   FOREIGN KEY (album_id) REFERENCES albums(id)
-- );

-- 2.
-- SELECT name AS 'Band Name' FROM bands;

-- 3.
-- SELECT * FROM albums 
-- WHERE release_year IS NOT NULL 
-- ORDER BY release_year LIMIT 1;

-- 4.
-- SELECT DISTINCT bands.name AS 'Band Name' FROM bands INNER JOIN albums ON bands.id = albums.band_id;

-- 5.
--  SELECT bands.name AS 'Band Name' FROM bands LEFT JOIN albums ON bands.id = albums.band_id WHERE albums.band_id IS NULL;

-- 6.
-- SELECT a.name AS "Name", a.release_year AS "Release Year", SUM(s.LENGTH) AS "Duration"
-- FROM albums AS a JOIN songs AS s ON a.id = s.album_id
-- GROUP BY a.id ORDER BY Duration DESC LIMIT 1;

-- 7.
-- UPDATE albums SET release_year = 1986 WHERE id = 4;

-- 8.
-- INSERT INTO bands (name) VALUES ("Imagine Dragons");
-- INSERT INTO albums (name, release_year, band_id) 
-- VALUES ("Smoke + Mirrors", 2015, (SELECT id FROM bands WHERE name = "Imagine Dragons" LIMIT 1));

-- 9.
-- DELETE FROM albums WHERE id = 19;
-- DELETE FROM bands WHERE id = 8;

-- 10.
-- SELECT AVG(length) AS "Average Song Duration" FROM songs;

-- 11.
-- SELECT a.name AS "Album" , a.release_year AS "Release Year", MAX(s.LENGTH) AS DURATION FROM albums AS a
-- JOIN songs AS s ON a.id = s.album_id 
-- GROUP BY a.id;

-- 12.
-- SELECT b.name AS "Band", COUNT(s.id) AS "Number of songs" FROM bands AS b
-- JOIN albums AS a ON b.id = a.band_id
-- JOIN songs AS s ON a.id = s.album_id
-- GROUP BY b.id;