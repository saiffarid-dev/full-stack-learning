USE college_db;

-- View tables
SELECT * FROM students;
SELECT * FROM departments;


-- Basic RIGHT JOIN
SELECT students.name,
       departments.department_name
FROM students
RIGHT JOIN departments
ON students.department_id = departments.id;


-- RIGHT JOIN with aliases
SELECT s.name AS student_name,
       d.department_name AS department
FROM students AS s
RIGHT JOIN departments AS d
ON s.department_id = d.id;