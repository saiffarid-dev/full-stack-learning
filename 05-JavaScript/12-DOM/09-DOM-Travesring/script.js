// ======================== Select Elements ============
const container = document.getElementById("container");
const list = document.getElementById("list");
const item1 = document.getElementsByClassName("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");


// ================== 1. parentElement ==========

console.log(item1.parentElement);


// ================== 2. Children ===========

console.log(list.firstElementChild);

// ================= 3. firstElement Child ==============
console.log(list.firstElementChild);

// ================ 4. lastElements Child ============
console.log(list.lastElementChild);

// ====================== 5. nextElementSibling =========

console.log(item1.nextElementSibling);



// ================= 6.Previous Element siblings ===========

console.log(item2.previousElementSibling);

// ===================== 7. closest() ============
console.log(item2.closest(".container")); 

