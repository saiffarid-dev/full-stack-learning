//  ================ 1. getAttribute() ==========>>>>>>>

const link = document.getElementById("link");
console.log("===== getAttribute()======");

console.log(link.getAttribute("href"));

console.log(link.getAttribute("target"));


// ================== 2. setAttribute() ===================>>>

const image = document.getElementById("image");
console.log("========= setAttribute() ======");

image.setAttribute("alt","JavaScript Image");

image.setAttribute("Width", "250");


// ==================== 3. RemoveAttribute() ==============>>>>

const button = document.getElementById("btn");

console.log("========= removeAttribute() =====");

button.removeAttribute("disabled");


// ===================== 4. hasAttribute() =====================>>>

const input = document.getElementById("username");

console.log("===== hasAttribute() ======");

console.log(input.hasAttribute("placeholder"));

console.log(input.hasAttribute("required"));