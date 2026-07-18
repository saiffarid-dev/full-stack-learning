// ============= 1. Click Event ============= >>>

const clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener("click",function(){
    console.log("Button Clicked");
});

// ============== ====== 2. Double Click =====================>>>

const dblBtn = document.getElementById("dblBtn");
dblBtn.addEventListener("dblclick", function(){
    console.log("Double Click");
});

// ====================== 3. Mouse Over =============>>>>

const box = document.getElementById("box");
box.addEventListener("mouseover", function(){
    console.log("Mouse Over");
});

// ================== 4. Mouse Out ============>>

box.addEventListener("mouseout", function(){
    console.log("Mouse Out");
});

// =================  5. Mouse Down =========>>>

box.addEventListener("mousedown", function(){
    console.log("Mouse Down");
});

// ====================== 6. Mouse Up ==============>>>

box.addEventListener("mouse", function(){
    console.log("Mouse Up");
});

// ==================== 7. ==================>>>>

box.addEventListener("mousemove", function (){
    console.log("Mouse Moving");
});

// ====================== 8. Key Up   =============== 

const keyboard = document.getElementById("keyboard");
keyboard.addEventListener("keydown", function (){
    console.log("Key Down");
});

// ====================== 9. Key Up ====================>>>>

keyboard.addEventListener("keyup", function (){
    console.log("Key Up");
});

// ==================  11. Focus Event =============>>

const focusBox = document.getElementById("focusBox");
focusBox.addEventListener("focus", function (){
    console,log("Input Focus");
});

// ======================== 12. Blur Event  ===================

focusBox.addEventListener("blur", function (){
    console.log("Input Blur");
});

// ========================= 13. Change Event ============== 

const  course = document.getElementById("course");
course.addEventListener("change", function() {
    console.log(course.value);
});

// ============================= Submit =================>>>>

const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function (event){
    event.preventDefault();
    console.log("Form Submitted");
});




