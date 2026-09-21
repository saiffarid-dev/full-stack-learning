USE college_db;


-- Check students table
SELECT *
FROM students;


-- Check departments table
SELECT *
FROM departments;


-- INNER JOIN
SELECT students.name,
       departments.department_name
FROM students
INNER JOIN departments
ON students.department_id = departments.id;