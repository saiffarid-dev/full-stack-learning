USE college_db;

-- View students table
SELECT * FROM students;

-- View departments table
SELECT * FROM departments;


-- Basic LEFT JOIN
SELECT students.name,
       departments.department_name
FROM students
LEFT JOIN departments
ON students.department_id = departments.id;


-- LEFT JOIN with aliases
SELECT s.name AS student_name,
       d.department_name AS department
FROM students AS s
LEFT JOIN departments AS d
ON s.department_id = d.id;