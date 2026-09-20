USE college_db;


-- 1. Check students
SELECT *
FROM students;


-- 2. Count students in each age group
SELECT age, COUNT(*) AS total_students
FROM students
GROUP BY age;


-- 3. Show unique age groups
SELECT age
FROM students
GROUP BY age;


-- 4. Sum age for each age group
SELECT age, SUM(age) AS total_age
FROM students
GROUP BY age;


-- 5. Average age for each age group
SELECT age, AVG(age) AS average_age
FROM students
GROUP BY age;


-- 6. Count age groups and sort by highest count
SELECT age, COUNT(*) AS total_students
FROM students
GROUP BY age
ORDER BY total_students DESC;