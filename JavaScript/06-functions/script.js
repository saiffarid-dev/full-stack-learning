// Function --> Pratice - 1

// Use print Hello JavaScript using a function 

{
    function greet() {
        console.log("Hello JavaScript");
    }
    greet();
}

// Welcome function

{
    function welcome() {
        console.log("Welcome");
    }
    welcome();
}

// function with One parameter

{
    function greet(name){
        console.log("Hello " + name);
    }
    greet("Saif");
}

// function with Two Parameters

{
    function add(a, b) {
        console.log(a + b);
    }
    add(10, 20);

}


// Function with Return

{
    function multiply (a, b) {
        return a * b;
    }

    let result = multiply(5, 4);

    console.log(result);
}

// function Medium Subtraction

{
    function subtract(a, b) {
        return a - b;
    }

    console.log(subtract(20, 5));
}


// function even or odd

{
    function checkEvenOdd(num) {
        if (num % 2 === 0) {
        } else {
            console.log("Odd");
        }
    }
    checkEvenOdd(8);
}

// square of Number

{
    function square(num) {
        return num * num;
    }
    console.log(square(6));
}

// function Maximum Number

{
    function max(a, b) {
        if (a >b) {
            return a;
        }
        return b;
    }
    console.log(max(15, 25));
}


// Multiplication Table

{
    function table(num) {
        for (let i = 1; i <= 10; i++){
            console.log(num + " * " + i + " = " + (num * i));
        }
    }

    table(5);
}


// function factorial

{
    function factorial(n) {
        let fact = 1;
        for (let i = 1; i <= n; i++){
            fact *= i;
        }
        return fact;
    }

    console.log(factorial(5));
}


// function prime Number 

{
    function isPrime(num) {
        let prime = true;
        for (let i = 2;  i < num; i++){
            if (num % i === 0) {
                prime  = false;
            }
        }

        console.log(prime);

    }

    isPrime(7);
}

// Reverse String 

{
    function reverse(text) {
        return text.split("").reverse().join("");
    }
    console.log(reverse("Saif"));
}


// Count Vowels

{
    function countVowels(str) {
        let count = 0;
        for (let ch of str. toLowerCase()) {
            if ("aeiou". includes(ch)){
                count++;
            }
        }
        return count;
    }
    console.log(countVowels("JavaScript"));
}


// calculator Function 

{
    function calculator(a, b, operator) {
        if (operator === "+")
            return a + b;
        if (operator === "-")
            return a - b;
        if (operator === "*")
            return a * b;
        if (operator === "/")
            return a / b;
    }
    console.log(calculator(20, 10, "+"));
}


