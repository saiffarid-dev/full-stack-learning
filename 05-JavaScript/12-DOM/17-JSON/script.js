// Select Elements 

const  convertJSON = document.getElementById("convertJSON");
const convertObject = document.getElementById("convertObject");
// JavaScript Object

const user = {
    name: "Saif",
    age: 30,
    city: "Delhi"
};

// Convert Object -> JSON

convertJSON.addEventListener("click", function(){
    const jsonData = JSON.stringify(user);
    console.log(jsonData);
});

// Convert JSON -> Object

convertObject.addEventListener("click", function(){
    const jsonData = `{"name":"Saif", "age":25, "city": "Delhi"}`;
    const objectData = JSON.parse(jsonData);
    console.log(objectData);
    console.log(objectData.name);
});