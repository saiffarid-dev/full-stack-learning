const btn = document.getElementById("btn");
btn.addEventListener("click", function (){
    let orderPizza = new Promise(function (resolve, reject){
        let pizzaReady = true;
        setTimeout(function (){
            if (pizzaReady){
                resolve("Pizza Deliverd Successfully");
            } else {
                reject("Pizza Delivery Faied");
            }
        },2000);
    });
    orderPizza.then(function (message){
        console.log(message);
    })
    .catch(function(error){
        console.log(error);
    })
    .finally(function(){
        console.log("Process Completed");
    });
});