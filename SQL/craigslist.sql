DROP DATABASE IF EXISTS craigslist_db;

CREATE DATABASE craigslist_db;

\c craigslist_db   

CREATE TABLE regions
(
  id SERIAL PRIMARY KEY,
  region TEXT NOT NULL
);

INSERT INTO regions
  (region)
VALUES
  ('San Fransico'),
  ('Atlanta;'),
  ('Seattle'),
  ('New York City'),
  ('Miami'),
  ('Houston'),
  ('Detroit');

CREATE TABLE users
(
  user_id SERIAL PRIMARY KEY,
  username TEXT NOT NUll UNIQUE,
  user_region INTEGER NOT NULL REFERENCES regions(id)
);

INSERT INTO users
  (username, user_region)

VALUES
  ('Brioh', 4),
  ('Akaiwoe', 4),
  ('Los', 4),
  ('Gabvee', 4),
  ('GRVTY', 1);

  CREATE TABLE categories
(
  category_id SERIAL PRIMARY KEY,
  category TEXT NOT NULL UNIQUE
);

INSERT INTO categories
(category)

VALUES
('housing'),
('work'),
('creative'),
('homes'),
('services');

CREATE TABLE posts
(
  post_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id),
  title TEXT NOT NULL,
  post TEXT NOT NULL,
  post_local INTEGER NOT NULL REFERENCES regions,
  category INTEGER REFERENCES categories(category_id)
);

INSERT INTO posts
(user_id, title, post, post_local, category)

VALUES
(1, 'Springboard', 'I am currently working on a software engineering bootcamp', 4, 2);