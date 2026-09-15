// ========================== 1. Style ==================

const heading = document.getElementById("heading");
console.log("========== style ===========");
heading.style.color = "red";
heading.style.backgroundColor = "yellow";
heading.style.padding = "10px";

// =========================== 2. className =========== ============

const title = document.getElementById("title");
console.log("======= className ========");
console.log(title.className);
title.className = "red";

// ========================== 3. classList =======================

const box = document.getElementById("box");
console.log("============= classList ===========");
console.log(box.classList);

// ======================= 4. add() ==================

console.log("============= add() ============");
box.classList.add("round");
box.classList.add("shadow");
console.log(box.classList);

// ============================ 5. Remove =============

console.log("============ remove ==========");
box.classList.remove("shadow");
console.log(box.classList);

// ========================= 6 toggle() ==================

console.log("===========toggle() ========");
box.classList.toggle("round");
console.log(box.classList);

// ============================== 7 contains () ==================

console.log("======= contains() =======");
console.log(box.classList.contains("box"));
console.log(box.classList.contains("round"));

// ====================== 8 replace() ==================

console.log("========== replace() ========");
box.classList.replace("box","shadow");
console.log(box.classList);


