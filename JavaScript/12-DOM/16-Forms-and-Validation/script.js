const form = document.getElementById("myForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

// Form Submit Event

form.addEventListener("submit",function(event){
    // Stop Page Reload
    event.preventDefault();
    // Name Validation
    if(name.value === ""){
        alert("Please Enter Name");
        return;
    }
    // Email Validation
    if(email.value === ""){
        alert("Please Enter Email");
        return;
    }
    // Password Validation
    if(password.value.length < 6){
        alert("Password Must Be At Least 6 Characters");
        return;
    }
    alert("Form Submitted Successfully");
});