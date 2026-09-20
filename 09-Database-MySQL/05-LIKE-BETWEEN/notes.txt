========================================
SQL - LIKE & BETWEEN
========================================

LIKE:
LIKE is used for pattern matching/searching text.

% :
Represents zero or more characters.

_ :
Represents exactly one character.


Examples:

Names starting with A:

SELECT * FROM students
WHERE name LIKE 'A%';


Names ending with a:

SELECT * FROM students
WHERE name LIKE '%a';


Names containing a:

SELECT * FROM students
WHERE name LIKE '%a%';


Second character is a:

SELECT * FROM students
WHERE name LIKE '_a%';


BETWEEN:
BETWEEN is used to filter values within a range.

Important:
BETWEEN includes both starting and ending values.

Example:

SELECT * FROM students
WHERE age BETWEEN 20 AND 23;


NOT BETWEEN:

SELECT * FROM students
WHERE age NOT BETWEEN 20 AND 23;


Interview:
Q: What is LIKE?
A: LIKE is used for pattern matching.

Q: What does % mean in LIKE?
A: Zero or more characters.

Q: What does _ mean?
A: Exactly one character.

Q: What is BETWEEN?
A: BETWEEN filters values within a specified range.

Q: Is BETWEEN inclusive?
A: Yes, both boundary values are included.