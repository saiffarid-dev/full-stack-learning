// Topic 01 - Array Introduction =====>>>>

// String Array

{

    let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);



// Number Array =====?>>..

let Numbers = [10, 20, 30, 40];
console.log(Numbers);

// Mixed Array ======---->>>


let data = ["Saif", 21, true, null, undefined];
console.log(data)

// Empty Array ====== ......>>>

let emptyArray = [];
console.log(emptyArray);


// Nested Array ======------>..

let matrix = [
    [1, 2],
    [3, 4]
];
console.log(matrix);

}




//   ================   Topic ---- 02    Create Array========== =====>>>

{
    let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);


// Method 2 Empty Array

let students = [];
console.log(students);

// Method---3 Array Constructor

let colors = new Array("Red", "Green", "Blue");
console.log(colors);


// Method - 4 Number Array --->

let marks = [70, 80, 90];
console.log(marks);


// Method -- 5 Mixed ARRAY 
 

let info = ["Saif", 21, true];
console.log(info);


// Method - 6 Nested ARRAY---->>>

let table = [
    [10,20],
    [30,40]
];
console.log(table);
}


// =========----====-  Topic -03 Access Array   ======-========--======>>>>

{
    let fruits = ["Apple", "Banana", "Mango", "Orange"];

    console.log(fruits[0]);
    console.log(fruits[3]);
    console.log(fruits[2]);
}


// ==========-----===== 04 Access Number Array =====----->>

{
    let marks = [80, 75, 90, 95];
    console.log(marks[0]);
    console.log(marks[2]);
}

// ----======== Common  Arrray ======>>>>>

{
    let fruits = ["Apple","Banana", "Mango", "Orange"];
    console.log(fruits);

}

// =======------ Update Element ======----->>>

{
    let fruits = ["Apple","Banana", "Orange", "Onion" ];
    fruits[1] = "Grapes";
    console.log(fruits);      // note 0 pe jo data the usko grapes s update kr diye
}

// =======------== Topic for Loop ========-------

{
    let fruits = ["Apple", "Banana", "Mango", "Orange"];
    for (let i = 0; i <fruits.length; i++) {               // length method for use loop 
        console.log(fruits[i]);
    }
}


// ======------>>>> for....of -----=======>>>

{
    let fruits = ["Apple", "Banana", "Mango", "Orange"];
    for (let fruit of fruits) {
        console.log(fruit);
    }
}


// -----=====>>>>> Push -------====>>>
// ADDED NEW ITEMS OR DATA IN ARRAY 

{
    let = fruits = ["Apple", "Banana", "Mango", "Orange"];
    fruits.push("kiwi");
    console.log(fruits);
}


// ========----->>>> pop() =======----->>>

{
    let fruits = ["Apple", "Banana", "Mango", "Orage"];
    fruits.pop();                            
    console.log(fruits);                  // pop() used to removes the last elements from an array.

}



// ======---->>>>shift======---->
// shift if used  to removes to frist element from an array.

{
    let fruits = ["Apple", "Banana", "Mango", "Orange"];
    fruits.shift();
    fruits.unshift("kiwi");  // adds a new elemets at the beginnig of an array.
    console.log(fruits);

}

// =======-------->>>>>> Included ========>>>

{
    let fruits = ["Apple", "Mango", "Orage"];
    console.log(fruits.includes("Mango"));

    console.log(fruits.includes("kiwi"));
}


// ===== >>>>>> indexof() =====>>>


{
    let fruits = ["Apple", "Banana", "Mango", "Orange"];
    console.log(fruits.indexOf("Mango"));
    console.log(fruits.indexOf("kiwi"));
}


// ======------>>>> lastindesof()========----->>.

{
    let fruits = ["Apple", "Banana", "Mango", "Banana"];
    console.log(fruits.lastIndexOf("Banana"));

}


// ==============------>>>>> Slice()-----==========>>>>

{
    let fruits = ["Apple", "Banana", "Mango", "Orange", "kiwi"];
    console.log(fruits.slice(1,4));
}


// =========>>>> Splice() ======---->>>>

{
    let fruits = ["Apple", "Banana", "Mango", "orange"];
    fruits.splice(1,2);
    console.log(fruits);
}


// ==========----->>>> Concat() ======--->>>

{
    let fruits = ["Apple", "Banana",];
    let vegetables = ["Potato", "Tomato"];
    let result = fruits.concat(vegetables);
    console.log(result);
}


// ====== >>>> Join ====>>>>

{
    let fruits = ["Apple", "Banana", "Mango"];
    console.log(fruits.join(" - "));
}


// ======>>>>>>>Topic Map()=======>>>>

{
    let numbers = [10, 20, 30, 40, 50];
    let doubleNumbers = numbers.map(function (num) {
        return num * 2;
    });
    console.log(numbers);
    console.log(doubleNumbers);
}


// ==== Arrow function =====>.

{
    let numbers =[10, 20, 30, 40, 50];

    let result = numbers.map(num => num * 2);

    console.log(result);
}


// ==========----->>>> Filter -----=====>>

{
    let numbers = [10, 15, 20, 25, 30, 35];
    let evenNumbers = numbers.filter(function (num) {
        return num % 2 === 0; 
    });
    console.log(numbers);
    console.log(evenNumbers);
}

// =======--->>>> Array Destructing =====>>>>

{
    let fruits = ["Apple", "Banana", "Mango"];
    let [first, second, third] = fruits;
    console.log(first);
    console.log(second);
    console.log(third);
}

// ======= Sepread Operator(...) ======

{
    let arr1 = [10, 20, 30];
    let arr2 = [...arr1];
    console.log(arr2);
}


// =======>>>> Merge Arrays ====>>

{
    let frontend = ["HTML", "CSS", "JavaScript"];
    let backend = ["Python", "Django"];
    let fullStack = [...frontend, ...backend];
    console.log(fullStack);
}


// ======>>> Rest Operator(...) ----====>>

{
    let [first, ...others] = [10, 20, 30, 40, 50];
    console.log(first);
    console.log(others);
}


// ======>>>> Array Destructuring with Skip =====>>>>

{
    let fruits = ["Apple", "Banana", "Mango"];
    let [first, third] = fruits;
    console.log(first);
    console.log(third);
}


// ======Swap Variables =====>>.

{
    let a = 10;
    let b = 20;

    [a, b] = [b, a];

    console.log(a);
    console.log(b);

    

}


