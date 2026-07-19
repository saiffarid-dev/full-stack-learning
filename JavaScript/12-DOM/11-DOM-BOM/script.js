// ================= WINDOW ============

console.log(window);

// ================== alert() ============

const alertBtn = document.getElementById("alertBtn");
alertBtn.addEventListener("click",function(){
    alert("Welcome to JavaScript!");
});

// ============ Prompt () ==========
const promptBtn = document.getElementById("promptBtn");
promptBtn.addEventListener("click", function (){
    const name = prompt("Enter Your Name");
});

// ============= confirm() ==============

const confirmBtn = document.getElementById("confirmBtn");
confirmBtn.addEventListener("click", function(){
    const result = confirm("Ara you sure?");
});

// ===================== location ==================

const locationBtn = document.getElementById("locationBtn");
locationBtn.addEventListener("click", function (){

    console.log(location.href);
    console.log(location.hostname);
    console.log(location.pathname);
});

// ================= history ==========

const historyBtn = document.getElementById("historyBtn");
historyBtn.addEventListener("click", function(){
    console.log(history.length);
});

// ============== Navigator =============

const navigatorBtn = document.getElementById("navigatorBtn");
navigatorBtn.addEventListener("click", function(){
    console.log(navigator.userAgent);
    console.lg(navigator.language);
    console.log(navigator.onLine);
});

// =================== screen ===============

const  screenBtn = document.getElementById("screenBtn");
screenBtn.addEventListener("click", function (){
    console.log(screen.width);
    console.log(screen.height);
});

// =================== setTimeout() ==================

const timeoutBtn = document.getElementById("timeoutBtn");
timeoutBtn.addEventListener("click", function (){
    setTimeout(function (){
        alert("2 Seconds Completed");
    }, 2000);
});


// ==================== setInterval ================

const intervalBtn = document.getElementById("intervalBtn");
intervalBtn.addEventListener("click", function (){
    setInterval(function (){
        console.log("Running Every 1 Second");
    }, 1000);
});

