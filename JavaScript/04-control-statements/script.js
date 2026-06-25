// Simple If question

// let age = 20;
// if  (age >= 18) {
//     console.log("You can vote");
// }  

// if Else

// let age = 16;
// if (age >= 18) {
//     console.log("Adult");
// }
// else {
//     console.log("Minor");
// }

// Even Odd

// let number = 7;
// if (number % 2 === 0) {
//     console.log("Even");
// }
// else {
//     console.log("Odd");
// }

// positive Negative

// let number = -10;
// if (number > 0) {
//     console.log("Positive");
// }
// else {
//     console.log("Negative");
// }

// Else If

let marks = 85;
if (marks >= 90) {
    console.log("A Grade");
}
else if (marks >= 70) {
    console.log("B Grade");
}
else if (marks >= 40) {
    console.log("C Grade");
}
else {
    console.log("Fail");
}

// pratice 6 password check

let password = "admin123";
if (password === "admin123") {
    console.log("Login Success");
}
else {
    console.log("Wrong Password");
}

// pratice 7 salary

let salary = 25000;
if (salary >= 30000) {
    console.log("Eligible");
} 
else{
    console.log("Not Eligible");
}
 


let temp = 40;
if (temp > 30) {
    console.log("Let's go to  Beach");
}
else {
    console.log("Watch Tv at Home");
}


let num = 88;
if (num % 2 === 0){
    console.log("Num is even");
}
else {
    console.log("Num is odd");
}

let Number = 989;
if (Number % 2 === 0) {
    console.log("Number is even");
}
else {
    console.log("Number is odd");
}

let day = 2;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Thuesday");
        break;
    case 3:
    console.log("Wednesday");
        break;
    default:
        console.log("Invalid Day");   
}

// Mounth Finder ====>

let month = 5;
switch(month){
    case 1:
        console.log("January");
        break;
    case 5:
        console.log("May");
        break;
    case 12:
        console.log("December");    
        break;
    default:
        console.log("Invalid  Month"); 
}    

// ###### Traffic Light ########

let signal = "red";
switch(signal){
    case "red":
        console.log("Stop");
        break;
    case "Yellow":
        console.log("Wait");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invaid Signal");
}


// ######### Grade ########--->
let grade = "A";
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Very Good");
        break;
    case "C":
        console.log("Good");
        break        
    default:
        console.log("Invalid Grade");
}


// ######## Problem ########


let fruit = "Apple";
switch(fruit){
    case "Apple":
        console.log("fruits colors red is Apple");
        break;
    case "Banana":
        console.log("fruit colors yellow is Bananna");
        break;
    case "orange":
        console.log("fruit color orangne is orange");
        break;
    default :   
        console.log("Unknown fruit");
}