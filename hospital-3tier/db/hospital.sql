
CREATE DATABASE hospital_db;
USE hospital_db;

CREATE TABLE patients(
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(100),
 age INT,
 disease VARCHAR(100)
);

INSERT INTO patients(name,age,disease) VALUES
('Ramesh',30,'Fever'),
('Sita',25,'Cold'),
('Arjun',40,'Diabetes');
