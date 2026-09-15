// ================== Select Elements ==================

const list = document.getElementById("list");
const addBtn = document.getElementById("addBtn");

let count = 5;

// ================= Event Delegation =============

list.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        console.log("Clicked : ", event.target.innerText);
        console.log("Target :",event.target);
        console.log("Current Target :", event.currentTarget);
    }
});

// ================ Add New list Item ============

addBtn.addEventListener("click", function(){
    const newItem = document.createElement("li");
    newItem.innerText = "New Item " + count;

    list.appendChild(newItem);
});
