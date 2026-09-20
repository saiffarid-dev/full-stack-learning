USE college_db;


-- 1. Count total students
SELECT COUNT(*) AS total_students
FROM students;


-- 2. Calculate total age
SELECT SUM(age) AS total_age
FROM students;


-- 3. Calculate average age
SELECT AVG(age) AS average_age
FROM students;


-- 4. Find minimum age
SELECT MIN(age) AS minimum_age
FROM students;


-- 5. Find maximum age
SELECT MAX(age) AS maximum_age
FROM students;