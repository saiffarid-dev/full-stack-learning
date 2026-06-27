# create class Student that takes 3 marks and has method average()

class Student:
    def __init__(self, name,listOfMarks):
        self.name = name
        self.listOfMarks = listOfMarks

    def average(self): # static  .
        
        sum = 0
        for eachValue in self.listOfMarks:
            sum = sum+eachValue

        average = sum/3
        print("Average is: ", average)


student1 = Student("Adil",  [99, 98, 99]) 
student1.average()