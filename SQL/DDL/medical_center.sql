DROP DATABASE IF EXISTS medical_center;

CREATE DATABASE medical_center;

\c medical_center

CREATE TABLE hospital
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

INSERT INTO hospital
  (name)
VALUES
  ('Montefiore');

CREATE TABLE hospital_employees
(
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL
);
INSERT INTO hospital_employees
  (first_name, last_name)
VALUES
  ('Suzan', 'Beth'),
  ('Aileem', 'Cruz'),
  ('Mari', 'Cabreja'),
  ('Gabriel', 'Cabreja'),
  ('Yismeyri', 'Sanchez'),
  ('Loreily', 'Carpio');

CREATE TABLE patients
(
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL
);
INSERT INTO patients
  (first_name, last_name)
VALUES
  ('Kirsa', 'De La Cruz'),
  ('Ty', 'Breakenridge'),
  ('Christian', 'Rags'),
  ('Eli', 'Cuba'),
  ('Los', 'Cabreja');

CREATE TABLE p_d
(
    id SERIAL PRIMARY KEY,
    patients_id INTEGER REFERENCES patients(id),
    first_doc INTEGER REFERENCES hospital_employees(id),
    second_doc INTEGER REFERENCES hospital_employees(id)
);
INSERT INTO p_d
  (patients_id, first_doc, second_doc)
VALUES
  (1, 6, 1),
  (2, 5, 2),
  (3, 4, 3),
  (4, 3, 5),
  (5, 2, 4);

CREATE TABLE patient_visit
(
    id SERIAL PRIMARY KEY,
    patients_id INTEGER REFERENCES patients(id),
    doctors_id INTEGER REFERENCES hospital_employees(id),
    visit_date DATE NOT NULL,
    first_diagnosis TEXT NOT NULL,
    sec_diagnosis TEXT,
    tri_diagnosis TEXT
);

INSERT INTO patient_visit
  (patients_id, doctors_id, visit_date, first_diagnosis, sec_diagnosis, tri_diagnosis)
VALUES
  (1, 6,'2024-11-05', 'COVID', 'NONE', 'NONE');
