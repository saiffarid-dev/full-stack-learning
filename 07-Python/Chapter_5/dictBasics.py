# Dictionary Basics

student = {            # this is a dictionary creat method.
    "name": "SAIF",    # name is called key dic m key bolte hai
    "Adress": "Patna",
    "Age": 27,
    "RollNum": 25,
    "name": "Farid",  # note always remeber same key multipul time used nhi krte hai agar aise dict hue to latest key k value show ho ga only output m.
    "city": "Bihar"
}

print(type(student))
print(student["name"])
print(student)
print(student["city"])       # this is key value print method 
student["city"]= "Banglore"   # this is key update method and phir print dic ko print kre to new update ho jiye ga 
print(student)
student["favSubject"] = "Coding"   # this method is add dic m new key and value.
print(student)
student.pop("city")  # pip is used in dic delete dic key and values. than print new update
print(student)
print(student.keys())  # keys is used all keys or keys returns.
print(student.values()) # values is used all keys values print.
print(student.items()) # items method used krne key or uski value seperate ho kr output m aaye ga



