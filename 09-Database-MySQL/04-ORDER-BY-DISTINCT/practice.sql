USE college_db;

SELECT * FROM students;

SELECT * FROM students
ORDER BY age ASC;

SELECT * FROM students
ORDER BY age DESC;

SELECT * FROM students
LIMIT 5;

SELECT DISTINCT age
FROM students;

SELECT * FROM students
ORDER BY age DESC
LIMIT 3;