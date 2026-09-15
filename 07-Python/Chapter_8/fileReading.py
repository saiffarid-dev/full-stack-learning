# file = open("report.txt", "r")
# data = file.read()
# file.close()

# with open ("report.txt", "r") as f:       # with keyword file ko automatic colse kr deta hai 
#     data = f.read()
#     print("File Data", data)


with open("NewTextfile.txt", "r") as f:
    line1 = f.readline()
    line2 = f.readline()
    line3 = f.readline()

    print("Line 1 ", line1)
    print("Line 2 ", line2)
    print("Line 3 ", line3)
