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
