const btn = document.getElementById("btn");
function showMessage(callback) {
    callback();
}

function completed(){
    console.log("Callback Function Executed");
}

btn.addEventListener("click", function (){
    showMessage(completed);
});