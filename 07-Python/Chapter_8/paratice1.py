file = open("certificate.txt", "r")
dateofFile = file.read()

dataofFile = dateofFile.lower()

if "live" in dataofFile:
    print("Yes Live word is present in the file")
else: 
    print("No") 
       