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
        if (operator === "+"){
            return a + b;
        }
        else if (operator === "-"){
            return a - b;
        }
        else if (operator === "*"){
            return a * b;
        }
        else if (operator === "/"){
            return a / b;
        }
        else {
            return "Invalid Operater";
        }

    }
    console.log(calculator(20, 10, "+")); // 30
    console.log(calculator(20, 10,"-")); // 10
    console.log(calculator(20, 10,"*")); //200
    console.log(calculator(20, 10, "/")); 2
    console.log(calculator(20, 10, "%")); //Invalid Operator 
}



// =======----->>> Named Function =======----->

{
    function greet(name) {
        return "Hello " + name;
    }
    
    console.log(greet("saif"));
}

// Function Expression


{
    let add = function(a, b) {
        return a + b;
    };
    console.log(add(10, 20));
}


// 03 Anonymous function

{
    let message = function() {
        console.log("Welcome");
    };
    message();
}

// 04 Arrow Function

{
    const square = (num) => {
    return num * num;
    };
    console.log(square(5));
}

// IIFE (Immediately invoked function expression)

{
    (function () {
    console.log("IIFE Executed");
    })();

}

// Callback function

{
    function greet(name, callback) {
        console.log ("Hello " + name);
        callback();
    }

    function bye(){
        console.log("Good Bye");
    }
    greet("Saif", bye);
}


//  Higher Order Function

{
    function calculater(a, b, operation) {
        return operation(a ,b);
    }
    function multiply(x, y) {
        return x * y;
    }

    console.log(calculater(5, 4, multiply));

}

// Recursive Function

{
    function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n-1);
    
    } 
    console.log(factorial(5));

}


// Constructor Function

{
    function Student(name, age) {
    this.name = name;
    this.age = age;
    }
    let s1 = new Student("Saif", 20);
    console.log(s1);

}

// General Function

{
    function evenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    }
    return "Odd";
    }
    console.log(evenOdd(15));
}

// Asynchronous Function

{
    setTimeout(function (){
    console.log("Hello after 2 second");
    },2000);
}


// Method function

let student = {
    name: "Saif",

    intorduce: function () {3
        console.log("My Name is " + this.name);
    }
};
student.intorduce();