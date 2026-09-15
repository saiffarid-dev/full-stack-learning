// # LOOP CODE # //

// Print numbers from 1 to 5
{
    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++;
    }
}


// Print number form 5 to 1

{
    let i = 5;
    while (i >= 1) {
        console.log(i);
        i--;
    }
    
}

// pratice - 3
{
    let i = 2;
    while(i <= 10) {
        console.log(i);
        i += 2;
    }
}

// pratice - 4 print odd number (1 to 9)
{
    let i = 1;
    while(i <= 9){
        console.log(i);
        i+= 2;
    }
}

// pratice - 5 While Loop

{
    let i = 1;
    while (i <= 5) {
        console.log("Hello");
        i++;
    }
}

// pratice - 6 while loop print multiples 5 to 50

{
    let i = 5;
    while(i <= 50){
        console.log(i);
        i += 5;
    }
}

// pratice - 7 while looop Pirnt Number divisible by 3 (3 to 30)

{
    let i = 3;
    while(i <= 30){
        console.log(i);
        i += 3;
    }
}

// pratice - 8 while loop print SQUARES of numbers ( 1 to 5)

{
    let i = 1;
    while(i <= 5){
        console.log(i * i);
        i++;
    }
}

// pratice - 9 while loop print cubes of numbers (1 to 5)

{
    let i = 1;
    while(i <= 5) {
        console.log(i * i *i);
        i++;
    }
}


// pratice - 10 while loop print table of 2.

{
    let i = 1;
    while(i <= 10) {
        console.log("2 * " + i + " = " +(2 * i));
        i++;
    }
}


// Print Even Number (2 to 20) while loop 

{
    let i = 2;
    while (i <=20){
        console.log(i);
        i +=2;
    }
}


// Print Odd Number (1  to 19)
{
    let i = 1;
    while(i <= 19){
        console.log(i);
        i += 2;
    }
}

// print sum of 1 to 10

{
    let i = 1;
    let sum = 0;
    while(i <= 10){
        sum = sum + i;
        i++;
    }
    console.log(sum);
}

// Sum of  Even Number (1 to 20)

{
    let i =  2;
    let sum  = 0;
    while (i <= 20) {
        sum += i;
        i += 2;
    }
    console.log(sum)
}

// print number 1 to 10

{
    let i = 10;
    while (i >= 1){
        console.log(i);
        i--;
    }
}

// Question No 16 - Square of Number ( 1 to 10)

{
    let i = 1;
    while(i <= 10){
        console.log(i + " = " + (i * i));
        i++;
    }
}

//  Question No - 17 Print cube of Numbers (1 to 5)

{
    let i = 1;
    while(i <= 5){
        console.log(i + " + " + (i * i * i));
        i++;
    }
}
    
// Do while Paratice question no 1 print 1 to 5
{
    let i = 1;
    do {
        console.log(i);
        i++;
    } while (i <= 5);
}

// question no - 2 

let i = 5;
do {
    console.log(i);
    i--;
}while(i >= 1);

// question - 3 Even Numbers.

{
    let i = 2;
    do{
        console.log(i);
        i+=2;
    } while (i <= 10);
}

// question No- 4 Table of 3

{
    let i = 1;
    do {
        console.log("3 * " + i + " = " + (3 * i));
        i++;
    }while ( i <= 10);
}

// Question No - 5 Sum of 1 to 5
{
    let i = 1;
    let sum = 0;
    do {
        sum += i; 
        i++;
    } while (i <= 5);
    console.log(sum);
}


//  question 1 FOR loop PRINT 1 to 10

for (let i = 1; i <= 10; i++){
    console.log(i);
}

// question no 2 For loop PRINT 10 TO 1

for (let i = 10; i >= 1; i--){
    console.log(i);
}

// question no 3 for loop print 2 to 20


for (let i = 2; i <= 20; i  += 2){
    console.log(i);
}

// question no - 4 for loof Table of 7

for (let i = 1; i <= 10; i++){
    console.log("7 * " + i + " = " + (7 * i));
}

// Sum of 1 TO 10
let sum = 0;
for(let i = 1; i <= 10; i ++){
    sum += i;
}
console.log("sum =", sum);

// question no - 1 Print Array Elements

let fruits = ["Apple", "Banana", "Mango"];
for(let fruit of fruits) {
    for (let fruit of fruits){
        console.log(fruit);
    }
}

// question no  2 print student Names

let students = ["Ali", "saif", "Rahul", "Aman"];
for (let student of students) {
    console.log(student);
}

// question no - 3 print Numbers

let Numbers = [10, 20, 30, 40, 50];
for (let num of Numbers) {
    console.log(num);
}

// QUESTION - 5 PRINT SQUARES

let numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
    console.log(num * num);
}


// Note array values direct acces krne k liye

let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log(colors);
}



// For....in Loop  "Ye Object ki properties (keys) kO access karne ke liye use hota hai."

// use : --> Object ki keys ko iterate karne ke liye
// Sytax : for (let in object) {
        //   console.log(key);
        // } 

// question no - 1 Print objecy keys

{
    let student = {
    name: "Prince",
    age: 20,
    city: "Patna"
};

for(let key in student) {
    console.log(key);
}
}

// paratice - 2

{
    let student = {
        name: "Ali",
        age: 22,
        city: "Delhi"
    };
    
    for(let key in student) {
        console.log(key);    }
}



// paratice - 3 


{
    let i = 1;
    while(i <= 5){
        console.log(i);
        i++;
    }
}

// While loop 

{
    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++;
    }
}

// do while loop

{
    let i = 1;
    do {
        console.log(i);
        i++;
    } while (i <= 5);
}

// for loop 

{
    for (let i = 1; i <= 5; i++){
        console.log(i);
    }
}




// Nested Loop

{
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j<= 2; j ++){
            console.log(i, j);
        }
    }
}

// for ...of loop 

{
    let fruits = ["Apple", "Mango", "Banana"];
    for (let fruit of fruits) {
        console.log(fruit);
    }
}

// for ...in loop

{
    let student = {
        name: "Adil",
        age: 25,
        city: "Patna"
    };
    for (let key in student) {
        console.log(key + " : " + student [key]);
    }
}


// Break statement


{
    for (let i = 1; i <= 10; i++)
    {
        if (i === 6) {
            break;
        }
        console.log(i);
    }
}

// Continue Statement

{
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            continue;
        }
        console.log(i);
    }
}