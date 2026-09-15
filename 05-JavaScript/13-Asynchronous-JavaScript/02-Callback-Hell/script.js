const btn = document.getElementById("btn");
btn.addEventListener("click",function (){
    console.log("Order Placed");
    setTimeout(function (){
        console.log("Restaurant Accepted");
        setTimeout(function (){
            console.log("Food Preparing");
            setTimeout(function (){
                console.log("Out For Delivery");
                setTimeout(function () {
                    console.log("Food Delivered");
                }, 2000);
            }, 2000);
        }, 2000)
    }, 2000);
});

