const  btn = document.getElementById("btn");
btn.addEventListener("click", function (){
    function placeOrder(){
        return new
        Promise(function(resolve) {
            setTimeout(function (){
                console.log("Order Placed");
                resolve();
            }, 1000);
        });
    }
    function prepareFood(){
        return new 
        Promise(function (resolve){
            setTimeout(function (){
                console.log("Food Prepared");
                resolve();
            }, 1000);
        });
    }
    function deliverFood() {
        return new
        Promise(function(resolve){
            setTimeout(function(){
                console.log("Out For Delivery");
                resolve();
            }, 1000);
        });
    }
    function orderCompleted(){
        return new
        Promise(function(resolve){
            setTimeout(function(){
                console.log("Food Delivered");
                resolve();
            }, 1000);
        });
    }

    placeOrder()
    .then(function(){
        return prepareFood();
    })
    .then(function (){
        return deliverFood();
    })
    .then(function (){
        return orderCompleted();
    })
    .catch(function(){
        console.log("Something Went Wrong");
    });
});