CREATE DATABASE college_db;

USE college_db;

CREATE TABLE students (
    id INT,
    name VARCHAR(50),
    age INT
);

INSERT INTO students (id, name, age)
VALUES
(1, 'Rahul', 20),
(2, 'Aman', 21),
(3, 'Priya', 22),
(4, 'Raju', 19),
(5, 'Neha', 19),
(6, 'Rohit', 22),
(7, 'Anjali', 24),
(8, 'Vikash', 25),
(9, 'Arjun', 22),
(10, 'Sneha', 20);

SELECT * FROM students;

UPDATE students
SET age = 24
WHERE id = 7
LIMIT 1;

SELECT * FROM students;