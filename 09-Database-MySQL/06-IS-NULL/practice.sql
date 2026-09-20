USE college_db;

-- Check all students
SELECT * FROM students;

-- Set one name to NULL for practice
UPDATE students
SET name = NULL
WHERE id = 10;

-- Find NULL names
SELECT * FROM students
WHERE name IS NULL;

-- Find names that are NOT NULL
SELECT * FROM students
WHERE name IS NOT NULL;

-- Restore original data
UPDATE students
SET name = 'Sneha'
WHERE id = 10;

-- Final check
SELECT * FROM students;