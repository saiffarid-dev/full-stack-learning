#tupples Basics

myTuple = (78,90,75)
studentTuple = ("Khushi", "Divya", "Ishan")
print(len(myTuple))

#myTuple =[1] = "prince"  # this is no change tuple are immutable.error aaya

print(studentTuple[2])

#empty Tuples
emptyTuple = ()  # this is a empty tuple yahi method hai empty tuple create kren k
print(type(emptyTuple))
print(type(studentTuple))

# single tuple creat 
singleTuple = (1)   # this is int not a single tuple .
print(type(singleTuple))
singleTuple = (1,)
print(type(singleTuple)) # this is a single tuple only chane , 
print(studentTuple.index("Ishan")) # this is index method ye bataye ga kon index kise position pe hai 

print(studentTuple.count("Divya"))  # this is count mehtod code m divya kitne bar aaya usko bataye ga

