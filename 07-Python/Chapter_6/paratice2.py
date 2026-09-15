# write a program to print all even numbers between 1 and 50 using a while loop

num  = 1
while (num<=50):
    if (num % 2 == 0):
        print(num)
    num = num + 1    


# write a program that pritns the sum of first a natural numbers,
# For example, if  n = 5m=, then output should be 1 + 2 + 3 + 4 + 5  = 15,


n = int(input("Enter a Number:"))
sum = 0

while n>=1:                   # while m cerly barackets optional hai yaha pe
    sum = sum + n
    n = n-1
print("sum = ", sum) 
print("n = ",n)   
