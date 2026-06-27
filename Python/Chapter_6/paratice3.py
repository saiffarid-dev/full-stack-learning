
# write a program to print this pattern using a while loop:

# *
# * *
# * * *
# * * * *

n = 1
while n<=4:
    print("*" * n)
    n = n + 1 

print("We are out of he while loop, and value of n shoule be 5")

# write a program to print the multiplication table of any number using a while loop


n = int(input("Enter a number : "))
i = 1

while i <=10:
    print(f"{n} x {i} = {n*i} ")       # table format method k liye used hota hai
    i = i+1

          








