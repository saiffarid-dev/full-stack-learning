const  btn = document.getElementById("btn");
const result = document.getElementById("result");
btn.addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        result.innerHTML = `<h2>${data.name}</h2> <p>${data.email}</p> <p>${data.phone}`;
        console.log(data);
    })
    .catch(function(error){
        console.log("Error : ", error);
    });
});