const btn = document.getElementById("btn");
function getPizza(){
    return new
    Promise(function(resolve){
        setTimeout(function(){
            resolve("Pizza Delivered Successfully");
        }, 2000);
    });
}

async function orderPizza(){
    console.log("Ordering Pizza...");
    let result = await getPizza();
    console.log(result);
    console.log("Enjoy Your Meal!");
}
btn.addEventListener("click", function(){
    orderPizza();
});