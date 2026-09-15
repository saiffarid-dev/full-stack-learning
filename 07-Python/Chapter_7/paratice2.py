# write a fnction square(num) that returns the square of a  number.

def square(num=10):
    return num**2

print(square(2))

# write a function that takes a string and retrun sthe count of vowels and consonsts separetely.

def countVowConso(userInput):
    # DEFINE VOWELS
    vowels = "aeiouAEIOU"

    countVowel = 0
    countConsonats = 0
    # saif123
    for eachChar in userInput:
        if(eachChar.isalpha()):
            if(eachChar in vowels):
                countVowel  += 1
            else:
                countConsonats += 1

    return countVowel, countConsonats

# Function Call
vowels, consonats = countVowConso("Saif Farid")

print(vowels, consonats)


                


