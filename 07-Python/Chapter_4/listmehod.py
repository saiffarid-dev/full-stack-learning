# Methods in List
#Idexing

marks = [99, 100, 88 ,95]
print(marks[1])   # Note always used in list square Brackets, this is indexing method 1 ki value return kre ga

marks[1] = 98   # indexing chnge method hai
print(marks)    # this is change able list are mutable same print aaye ga

print(max(marks)) # this method is used maximum values
print(min(marks)) # this method is used manimum values
marks.append(92)  # this method is used add in list New item add karta hai
print(marks)      # add then print
marks.sort()      # sort method used to arrange list items assending or decending order.
print(marks)
marks.pop(1)     # last item list k remove krta hai
print(marks)
marks.remove(98)  # select itme remove krta hai
print(marks)

# slicing method
print(marks[1:3])

# String are immutable
# name = "Saif"
# name[1] = "s"
# print(name)    # ye code run nhi krega islye k ye string hai 



