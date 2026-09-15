// == 01 User Ne AGE iNPUT ki "20"

// lekin ye string hai Hume isko Number banane hai taki calculation  kar sakte 

// Number()

let age = "20";
let newAge = Number(age);

console.log(newAge);
console.log(typeof newAge);

// 02 String me decimal number hai.
// 10.99
// Hume sirf whole number chahiye
// kya use karenge? parseInt()

let price = "10.99";
console.log(parseInt(price));

// Qestion No- 3
// Value me number aur text dono hain.
// "100PX"

// Sirf No nikalne hai
// kiya used kre gy parseInt()

// output
let width = "100px"
console.log(parseInt(width));

// Note parsenIt() number read karta hai aur text par ruk jata hai

// question -4
// Decimal value preserve karni hai.
// "5.7kg" is k liye use karegy parseFloat()

let weight = "5.75kg";
console.log(parseFloat(weight));

// Note parseFloat() decimal value ko preserve karta hai .

// question 5 Invalid string ko number me convert karna hai

// kya use karege  Number  "hello"

"Hello"
 console.log(Number("Hello"));

//  Note Hello koi valid number nahi hai NaN = Not a Number

let x = "10";
console.log(x + 5);

// Note : -> "10" string hai. String  + Number = String

let z = "10"
z = Number(x);
console.log(z + 5);

// Note yaha z number ban gaya hai Number + Number = Addition

// Note ->
// Number() --> String to Number 
// String() --> Number to String
// parseInt() --> Number to String
// parseFloat() --> Decimal Number
// NaN --> Invalid Number



 