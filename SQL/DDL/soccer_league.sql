DROP DATABASE IF EXISTS soccer_db;

CREATE DATABASE soccer_db;

\c soccer_db   

CREATE TABLE league_teams
(
  team_id SERIAL PRIMARY,
  team TEXT UNIQUE
);

INSERT INTO league_teams
VALUES
('FaZe'),
('Breach'),
('Royal Ravens'),
('Guerillas'),
('Thieves'),
('Heretics'),
('Rokkr'),
('Subliners'),
('Surge'),


CREATE TABLE players
(
  player TEXT PRIMARY UNIQUE,
  team_id FOREIGN KEY REFERENCES team
);

INSERT INTO players
VALUES
('Abezy', 1),
('Cellium', 1),
('Drazah', 1),
('Simp', 1),
('Beans', 2),
('Pentagrxm', 2),
('Priestah', 2),
('Snoopy',2),
('Clayster',3),
('Felo',3),
('Gwinn',3),
('TJHaly',3),
('Assault',4),
{'Diamondcon',4},
('Fame',4),
('Flames',4),
('Afro',5),
('Ghosty',5),
('Nastie',5),
('Kremp',5),
('Jurnii',6),
('Lucky',6),
('Mettalz',6),
('Reeal',6),
('Vikul',6),
('Accuracy',7),
('Gunless',7),
('Loony',7),
('Lynz',7),
('Hydra',8),
('Kismet',8),
('Sib',8),
('Skyz',8),
('04',9),
('Abuzah',9),
('Breszy',9),
('Huke',9);

