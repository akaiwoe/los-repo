--Tutorial 6 Answers 

--1
SELECT matchid, player FROM goal
  WHERE teamid = 'GER'

--2
SELECT id,stadium,team1,team2
  FROM game
  WHERE id = 1012

--3
 SELECT player, teamid, stadium, mdate
  FROM game JOIN goal ON (id=matchid)
  WHERE teamid = 'GER'

--4
SELECT team1, team2, player FROM game
  JOIN goal ON (id=matchid)
  WHERE player LIKE 'Mario%'

--5
SELECT player, teamid, coach, gtime
  FROM goal
  JOIN eteam on (teamid=id)
 WHERE gtime<=10

--6
SELECT mdate,teamname FROM game
  JOIN eteam ON (team1 = eteam.id)
  WHERE coach = 'Fernando Santos'

--7
SELECT player FROM goal
  JOIN game ON (matchid = id)
  WHERE stadium = 'National Stadium, Warsaw'

--8
SELECT continent FROM world
  GROUP BY continent
  HAVING SUM(population) > 100000000

--Tutorial 7 Answers

--1
SELECT id, title
 FROM movie
 WHERE yr=1962

--2
SELECT yr
  FROM movie
  WHERE title = 'Citizen Kane'

--3
SELECT id, title, yr FROM movie
  WHERE title LIKE '%Star Trek%'
  ORDER BY yr

--4
SELECT title FROM movie
  WHERE id IN (11768, 11955, 21191)

--5
SELECT id FROM actor
  WHERE name = 'Glenn Close'

--6
SELECT id FROM movie
  WHERE title = 'Casablanca'

--7
SELECT name FROM casting JOIN actor ON (id=actorid)
  WHERE movieid=11768

--8
SELECT name FROM casting
  JOIN actor ON (actor.id=actorid)
  JOIN movie ON (movie.id=movieid)
  WHERE title = 'Alien'

--9
SELECT title FROM casting
  JOIN movie ON (movie.id = movieid)
  JOIN actor ON (actor.id = actorid)
  WHERE name = 'Harrison Ford'

--10
SELECT title FROM casting
  JOIN movie ON (movie.id = movieid)
  JOIN actor ON (actor.id = actorid)
  WHERE name = 'Harrison Ford'  AND ord > 1

--11
SELECT title, name FROM casting
  JOIN movie ON (movie.id = movieid)
  JOIN actor ON (actor.id = actorid)
  WHERE yr = 1962 and ord = 1