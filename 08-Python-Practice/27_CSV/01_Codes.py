# Write a Python program to read students.csv and print every row.

import csv
with open("27_CSV/02_student.csv", "r") as file:
    reader =  csv.reader(file)
    
    for row in reader:
        print(row)
        
        
# Write Data to a CSV File
# create a students.csv file and write the following data into it:

# Name | Age | Course
# Adil | 22 | Java 
# Saif |  23 | Python


import csv
#  1 Write Data to a csv file

students = [
    ["Name", "Age", "Course"],
    ["Adil", 22, "Java"],
    ["Saif", 23, "Python"]
]
with open("27_CSV/03_Student.csv", "w", newline = "" ) as file:
    writer = csv.writer(file)
    writer.writerows(students)
    
print("Data written successfully!")    


# Read CSV Using Dictionary
# Read student.csv using csv.DictReader() and print student's name and course;

# 2 Read CSV Using Dictionary 


import csv

with open("27_CSV/03_Student.csv", "r", newline ="") as file:
    reader = csv.DictReader(file)
    
    for student in reader:
        print("Name:", student["Name"])
        print("Course:", student["Course"])