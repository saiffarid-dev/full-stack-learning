USE college_db;


-- 1. Groups having more than 1 student
SELECT age, COUNT(*) AS total_students
FROM students
GROUP BY age
HAVING COUNT(*) > 1;


-- 2. Groups having exactly 2 students
SELECT age, COUNT(*) AS total_students
FROM students
GROUP BY age
HAVING COUNT(*) = 2;


-- 3. HAVING with ORDER BY
SELECT age, COUNT(*) AS total_students
FROM students
GROUP BY age
HAVING COUNT(*) > 1
ORDER BY total_students DESC;


-- 4. WHERE + GROUP BY + HAVING
SELECT age, COUNT(*) AS total_students
FROM students
WHERE age >= 20
GROUP BY age
HAVING COUNT(*) > 1;