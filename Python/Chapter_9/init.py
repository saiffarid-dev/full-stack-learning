class  Student:  # class = Blueprint programing me Blueprint ka matlab hota hai ek design/ template. structure jiske basis par object banta hai.
    schoolName = "ABC School"   # this is only desine note car design = CLass real car = object

    def __init__(self, name, course): # print("Whenever a new object is created I am called automaticaly")
        self.name = name
        self.course = course

student1 = Student("Khushi", "Btech")       # init method will be called  
print("Student1 Name-", student1.name)
print("Student1 course-", student1.course)

student2 = Student("Ankit", "Bsc")
print("Student2 Name-", student2.name)
print("Student2 course-", student2.course)


# note __init__() ek special function hota hai jise constructor bolte hai jab v class k new obj banta hai ue auto,atically call ho jata hai
        #  note point init double underscorebegore and after isko dunder init bolte hai
        #  note self : self currently obj ko represent karta hai eg. s1 = Student() to yaha s1 self hai
        # .init k used object banane time values dene ke liye 
        # init ka use :object initialize karne k liye Startine values dene k liye automatic setup k liye
        # obj k bina init nhi chale ga ek class only one init used hota hai
