// ==============>>>>>>>>>> 1. getElementById() ============>>>>>

const  heading = document.getElementById("heading");

const button = document.getElementById("btn");

console.log("====getElementById()======");

console.log(heading);

console.log(button);


// =============>>>>>>>>>>>> 2. getElementsByClassName() =======>>>>>

const courses = document.getElementsByClassName("course");

console.log("====getElementByIdClassName() ======");

console.log(courses);
console.log(courses[0]);
console.log(courses[1]);
console.log(courses[2]);


// /=================== ====== 3. getElementsByTagName() ===============>>>>

const paragraphs = document.getElementsByTagName("p");

console.log("===== getElementsByTagName() =====");

console.log(paragraphs);
console.log(paragraphs[0]);
console.log(paragraphs[1]);
console.log(paragraphs[2]);


// ===================>>>>>> 4. querySelector ==================>>>>>>

const title = document.querySelector(".title");

const submitButton = document.querySelector(".btn");

console.log("==== querySelector()=========");

console.log(title);
console.log(submitButton);



// ===========--==========>>>> 5. querySelectorAll() ================>>>>>>

const languages = document.querySelectorAll(".language");

console.log(languages);
console.log(languages[0]);
console.log(languages[1]);
console.log(languages[2]);