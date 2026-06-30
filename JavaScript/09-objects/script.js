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



// ====== === >>> For .... in Loop =====>>>
{
    let student = {
        name: "Saif",                     // for ...in loop object ki saari properties (keys) ko ek ek
        age: 21,                          // access karne ke liye use hota hai
        city: "Patna"
    };
    for (let key in student) {
        console.log(key);
    }
}


// ============>PRATICE CODE 2 ==========>>>

{
    let student = {
        name: "Saif",
        age: 21,
        city: "Patna"               // yaha student ki key ki value print m aaya.
    };
    for (let key in student) {
        console.log(student[key]);
    }
} 


// ======== Pratice code 03 key + Value in output =====>>

{
    let student = {
        name: "Saif",
        age: 21,
        city: "Patna"
    };
    for (let key in student) {
        console.log(key + " : " + student[key]);
    }
}


// ========>>>>>>>> Topic 09 Object Destruturing =====>>>
// Object Destruturing ka matlab hai object ki properties ko alag alag variables me store karne.


{
    let student = {
        name: "Saif",
        age: 21,
        city: "Patna"
    };
    let { name, age, city } = student;
    console.log(name);
    console.log(age);
    console.log(city);
}


// Only one property =======>>>>>

{
    let studnet = {
        name:  "Saif",
        age: 21,
        city: "Patna"
    };
    let { name } = studnet;
    console.log(name);
}

// CODE for Default Value ======>>>>

{
    let student = {
        name: "Saif"
    };
    let { name, city = "Patna" } = student;
    console.log(name);
    console.log(city);
}


// ======>>>>> CODE PRATICE Rename Variable

{
    let student = {
        name: "saif",
        age: 21
    };
    let { name: studentName } = student;
    console.log(studentName);
}



// =====>>>> Spread  Operator(....) object ko copy ye merge karne ke liye use hota hai..

{
    let student = {
        name: "Saif",
        age: 21
    };
    let copyStudent = {               // This is Copy object method hai
        ...student
    };
    console.log(copyStudent);
}

// ===== Add New Property =======>>>>

{
    let student = {
        name: "Saif",
        age: 21
    };
    let newStudent = {
        ...student, city: "Patna"
    };

    console.log(newStudent);
}



// ========== Merge Object ========>>>>

{
    let personal = {
        name: "Saif",
        age: 21
    };
    let education = {
        course: "BCA",
        college: "ABC College"
    };                                   // this is merge object syntax with example
    let studnet = {
        ...personal,
        ...education
    };
    console.log(studnet);
}


// ====== Overwrite Property ========>>>

{
    let student = {
        name: "Saif",
        age: 21 
    };
    let updateStudent = {
        ...student,
        age: 22
    };
    console.log(updateStudent);
}

// ========>>>> Optional Chaining (?) ===== >>>>>>

// Optional Chaining (?) object ki property ko safely access karta hai Agar property nahi hogi 
// to error nhi aayega sirf undefined milega...


// {
//     let studnet = {
//         name: "Saif"
//     };                                  this code is output is type error student is not defined
//     console.log(student.city.name);
// }+


// With optional Chaining ====>>

// {
//     let satudent = {
//         name: "Saif"                       // this is undefined code output
//     };
//     console.log(student.city?.name);
// }


{
    let student = {
        name: "saif",
        address: {
            city: "Patna"
        }
    };
    console.log(student.address?.city);
}


// =====>>>>> Topic 12 Object.assign() -=-=======>>

{
    let studnet = {
        name: "Saif",
        age: 21
    };
    let copy = Object.assign({},studnet);
    console.log(copy);
}


// Merge Two Objects ======>>>>>

{
    let personal = {
        name: "Saif",
        age: 21
    };
    let education = {
        course: "BCA",
        city: "Patna"
    };
    let studnet = Object.assign({},personal, education);
    console.log(studnet);
}

// ===========>>>> Update Property =============>>>>>

{
    let student = {
        name: "Saif",
        age: 21
    };
    let update = Object.assign({},student, {
        age: 22
    });
    console.log(update);
}


// ==========>> Merge Three Objects =======>>>

{
    let obj1 = { a: 1};
    let obj2 = { b: 2};
    let obj3 = { c: 3};

    let result = Object.assign({}, obj1, obj2, obj3);
    console.log(result);
}


// ======>>>> Topic 13 Object.freeze  =========>>>>
// Object.freeze () obj ko lock kar deta hai iske baad object me Add, update or delete kuh b nhi kr skte

 


{
    let student = {
        name: "Saif",
        age: 21 
    };
    Object.freeze(student);
    student.age = 25;
    console.log(student);
}


//  ================= Topic 14 (Object.seal()) =========

{
    let student = {
        name: "Saif",
        age: 21
    };
    Object.seal(student);
    student.age = 22;
    console.log(student);
}



