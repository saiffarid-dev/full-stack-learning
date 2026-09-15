import sqlite3

conn = sqlite3.connect("28_SQLite_Database/students.db")
cursor = conn.cursor()

cursor.execute(
    "CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)"
)

conn.commit()

print("Students inserted successfully!")


cursor.execute("SELECT * FROM students")
rows = cursor.fetchall()
for row in rows:
    print(row)
    
conn.close()    