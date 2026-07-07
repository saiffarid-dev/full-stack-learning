// ================== 1. InnerHTML =====================>>>>

const heading = document.getElementById("heading");

console.log("====== innerHTML =======");

console.log(heading.innerHTML);

heading.innerHTML = "<i>Learning JavaScript</i>";

// ======================= 2. inner Text ====================>>>

const title = document.getElementById("title");

console.log("===== inner Text");
console.log(title.innerText);
title.innerText = "DOM Practice";

// ================== 3. textContent ===============>>>>>

const message = document.getElementById("message");

console.log("====== textContent ========");

console.log(message.textContent);

message.textContent = "Content Updated";

// ======================= 4. Difference =============>>>>>>>>>

const demo = document.getElementById("demo");

console.log("===== Difference =========");

console.log("innerHTML");
console.log(demo.innerHTML);
console.log("innerText");
console.log(demo.innerText);
console.log("textContent");
console.log(demo.textContent);


