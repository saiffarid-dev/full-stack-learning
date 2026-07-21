// =================  Select Elements =============

const input = document.getElementById("name");
const saveLocal = document.getElementById("saveLocal");
const getLocal = document.getElementById("getLocal");
const removeLocal = document.getElementById("removeLocal");
const clearLocal = document.getElementById("clearLocal");
const saveSession = document.getElementById("saveSession");
const getSession = document.getElementById("getSession");
const removeSession = document.getElementById("removeSession");
const clearSession = document.getElementById("clearSession");

// ===================== Local Storage ===============
// Save Data

saveLocal.addEventListener("click", function(){
    localStorage.setItem("username", input.value);
    console.log("Local Data Saved");
});

// Get Data 

getLocal.addEventListener("click", function(){
    console.log(localStorage.getItem("username"));
});


// Remove Data 

removeLocal.addEventListener("click",function(){
    localStorage.removeItem("username")
    console.log("Local Data Removed");
});

// Clear Stroage 

clearLocal.addEventListener("click", function(){
    localStorage.clear();
    console.log("Local Storage Cleared");
});

// ========================== Session Storage ==============

// save Data

saveSession.addEventListener("click", function(){
    sessionStorage.setItem("username", input.value);
    console.log("Session Data Saved");
});

// Get Data 

getSession.addEventListener("click", function(){
    console.log(sessionStorage.getItem("username"));
});

// Remove Data

removeSession.addEventListener("click", function(){
    sessionStorage.removeItem("username");
    console.log("Session Data Removed");
});

// Clear Storage
clearSession.addEventListener("click", function(){
    sessionStorage.clear();
    console.log("Session Storage Cleared");
});



