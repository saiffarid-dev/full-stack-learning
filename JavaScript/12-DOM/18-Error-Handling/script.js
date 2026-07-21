const age = document.getElementById("age");
const checkAge = document.getElementById("checkAge");

// Button Click Event

checkAge.addEventListener("click", function () {
  try {
    if (age.value === "") {
      throw "Age is Required";
    }
    if (age.value < 18) {
      throw "Age must be 18 or above";
    }
    console.log("Eligibile");
  } catch (error) {
    console.log("Error :", error);
  } finally {
    console.log("Validation Completed");
  }
});
