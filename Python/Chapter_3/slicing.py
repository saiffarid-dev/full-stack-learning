# Understanding slicing concept.
# Note Slicing ka use kisi sequence string list tuple ka specific part nikalne ke liye hota hai
# syntax variable[start : end : step]
# start kahan s start krned hai 
# end kahan tak lene hai (end include nhi hote )
# step kitne gap se values leni hai
# ex ; name "Python"  note name python is a variable and python words is values. in word k under knah ki value lene hai kitne lend str step end dend hota hai 
# exple.



Name = "Python"
print("1 =",Name[0:4])      # ye syntax hai print ka output Pyth ya aaya ga
print("2 =",Name[:])        # ye methed full string ko print krega output Python aage ga no start no end data 
print("3 =", Name[:3])      # zero s three tak output de ga pyh this is output
print("4 =",Name[2:])       # ye method 2 s last tak output de ga
print("5 =",Name[0:6:2])    # this is a step use krn har second charater le ga or output de ga
print("6 =",Name[::-1])     # This is reverse string output nohtyp de  string reverse ho jate hai

numbers = [10, 20, 30, 40, 50]
print(numbers[1:4])    # list slincing ex hai output de ga [20,30,40]


str = "GulabJamun"

firstHalf = str[0:5]        #Gulab
trialFirstHalf = str [: 5]  #Gulab

print(firstHalf)
print(trialFirstHalf)

secondHalf = str[5:10]
trialsecondHalf = str[9:]        

print(secondHalf)
print(trialsecondHalf)





