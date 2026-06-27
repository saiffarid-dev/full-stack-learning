# range (start, stop, step)

for item in range(1,8,1):
    print(item)


# print  a coundown before something "exciting" happnes (like launching
# "Happy New Year!")    

import time
count = int(input("Enter the counter num: "))
print("\n Countdown Starts Now: ")

for i in range(count, 0, -1):
    print(i)
    time.sleep(1)

print("\n WOHOOO! Happy New Year") 
   
