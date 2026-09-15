const btn = document.getElementById("btn");
async function orderFood(){
    return "Pizza Delivered Successfully";
}
btn.addEventListener("click", function (){
    orderFood()
    .then(function (message){
        console.log(message);
    })
    .catch(function(error){
        console.log(error);
    });
});
