USE college_db;

INSERT INTO students (id, name, age)
VALUES
(11, 'Ravi', 23),
(12, 'Pooja', 21),
(13, 'Karan', 26);

SELECT * FROM students;

UPDATE students
SET age = 24
WHERE id = 11
LIMIT 1;

SELECT * FROM students;

DELETE FROM students
WHERE id = 13
LIMIT 1;

SELECT * FROM students;
