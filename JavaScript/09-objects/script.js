// Topic 01 - Object Introduction --->>

{
    let student = {
        name: "Raju",
        age: 21,
        city: "Patna"
    };
    console.log(student);
}

// method -01  topic 02 ===== >>>>>

{
    let student = {
        name: "Prince",
        age: 22,
        course: "BCA",
        city: "Patna"
    };
    console.log(student);
}

// method 02 --->>>> Empty object --->


{
    let student = {};
    console.log(student);
}


// Method -03 ---->> New Object -->>

{
    let student = new Object();
    student.name = "Sazid";
    student.age = 21;
    student.course = "BCA";

    console.log(student);
}


// ======= --- Topic 02  Access, Update, Add, Delete Properties ------>>>>>

// Access Property (Dot Notation)

{
    let student = {
        name: "Saif",
        age: 20,
        city: "Patna"
    };
    console.log(student.name);
    console.log(student.age);
}

// Access Property (Bracket Notation)


{
    let student = {
        name: "Saif",
        age: 20,
        city: "Delhi"
    };
    console.log(student["name"]);
    console.log(student["city"]);
}


// ------====>>> Update Property ====--->>


{
    let student = {
        name: "Raj",
        age: 19,
    }
    student.age = 21;
    console.log(student);
}


// ====== Add New Property ======>>>>

{
    let student = {
        name: "Raju"
    };
    student.city = "Patna";
    student.course = "BCA";
    console.log(student);
}

//  ======== Delete Property ======>>

{
    let student = {
        name: "saif",
        age: 20,
        city: "Patna"
    };
    delete student.city;
    console.log(student);
}

// Check Property 

{
    let student = {
        name: "Ali",
        age: 20
    };
    console.log("name" in student);
    console.log("city" in student);

}



// ========------>>>>>>> Method ------=======>>>>>

{
    let student = {
        name: "Raja",
        age: 20,
        greet: function () {
            console.log("Welcome");
        }
    };
    student.greet();
}


// 2nd pratice code =====>>

{
    let student = {
        name: "Saif",
        introduce: function () {
            console.log("My name is " + this.name);
        }
    };
    student.introduce();
}

// pratice no - 3 =====

{
    let calculator = {
        add: function (a, b) {
            return a + b;
        },
        multiply: function (a, b) {
            return a * b;
        }
    
    };
    console.log(calculator.add(10, 20));
    console.log(calculator.multiply(5, 4));
}

// method keywords :


{
    let student = {
        name: "Saif",
        greet: function () {
            console.log(this.name);
        }
    };
    student.greet();
}

// Code pratice 02 =====>>>>

{
    let studnet = {
        name: "Saif",
        age: 22,
        city: "Patna",
        details: function () {
            console.log(this.name);
            console.log(this.age);
            console.log(this.city);
        }
    };
    studnet.details();
}

// pratice code ===== 03 ===>>>


{
    let calculator = {
        num1:  20,
        num2: 10,
        
        add: function () {
            return this.num1 + this.num2;
        },
        subtract: function () {
            return this.num1 - this.num2;
        }
    };
    console.log(calculator.add());
    console.log(calculator.subtract());
}


// pratice set 04 ---->>>>>


{
    let car = {
        brand: "BMW",
        model: "X5",
        show: function () {
            console.log(this.brand + " " + this.model);
        }
    };
    car.show();
}

// ===--==-===-=-=-=->>> Object.keys() =====---->>

{
    let student = {
        name: "Saif",
        age : 21,
        city: "Patna"
    };
    console.log(Object.keys(student));
}


// =======--- Object Values -----====>>

{
    let student = {
        name: "Adil",
        age: 25,
        city: "Ara"
    };
    console.log(Object.values(student));
}


// ====== Object.entries ======>>>>
{
    let student = {
        name: "Raham",
        age: 21,
        city: "Patna"
    };
    console.log(Object.entries(student));
}