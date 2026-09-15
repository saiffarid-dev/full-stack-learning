// ================ Select Elements ===========
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const btn = document.getElementById("btn");

// ================== Event Bubbling =======

parent.addEventListener("click", function () {
    console.log("Parent Clicked");
});

child.addEventListener("click", function (){
    console.log("Child Clicked");
});

btn.addEventListener("click", function (){
    console.log("Button Clicked");
});


// ===================== Event Capturing =========

parent.addEventListener("click", function (){
    console.log("Parent Capture");
}, true);
child.addEventListener("click", function (){
    console.log("Button Capture");
}, true);