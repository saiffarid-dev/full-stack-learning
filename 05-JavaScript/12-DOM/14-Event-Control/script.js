// =================== Select Elements ==============

const parent = document.getElementById("parent");
const btn = document.getElementById("btn");
const link = document.getElementById("link");
const form = document.getElementById("form");

// ========================= Stop Propagation ==================

parent.addEventListener("click", function(){
    console.log("Parent Clicked");
});

btn.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("Button Cliked");
});

// ===================== preventDefault() - Link ================

link.addEventListener("Click", function(event){
    event.preventDefault();
    console.log("Google Link Blocked");
});

// ======================= preventDefault() - From ==============

form.addEventListener("submit", function(event){
    event.preventDefault();
    const username = document.getElementById("name").value;
    console.log("Name :", username);
    console.log("Form Submission Prevented");
});