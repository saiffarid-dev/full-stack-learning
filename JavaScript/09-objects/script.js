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


// ======== Advance Object =========>>>>>
// >>>>>>>>>Nested Objects>>>>>>>>>>>>>>

// jab ek object k andar dusra object hota hai, use Nested Object bolte hai


// Nested Object ==

{
    let student = {
        name: "saif",
        age: 21,
        address: {
            city: "Patna",
            state: "Bihar"
        }
    };
    console.log(student);
}


// Access Nested Object 

{
    let student =  {
        name: "Saif",
        address: {
            city: "Patna",
            state: "Bihar"
        }
    };

    console.log(student.address.city);
    console.log(student.address.state);
}

// Update Nested  Property ====

{
    let student = {
        name: "Saif",
        address:{
            city: "Patna"
        }
    };
    student.address.city = "Delhi";
    console.log(student); 
    
}


// Array Inside Object =====>>>
// Jab object ki kisi object me Array store hota hai use array inside Object bolte hai

{
    let student = {
        name: "Saif",
        age: 22,
        skill: ["HTML", "CSS", "JavaScript"]
    };
    console.log(student);
}

// Access Array >>>>

{
    let student = {
        name: "Ahmad",
        age: 25,
        skills: ["HTML", "CSS", "JavaScript"]
    };
    console.log(student.skills);
    console.log(student.skills[0]);
    console.log(student.skills[2]);
}


// Update array element

{
    let student = {
        name: "Ali",
        age: 19,
        skills: ["HTML", "Python", "CSS"]
    };

    student.skills[1] = "JAVA";
    console.log(student);
}


// Add NEW Skill =======

{
    let studnet = {
        name: "Gani",
        age: 25,
        skills: ["Java", "Python", "C"]
    };
    studnet.skills.push("React");
    console.log(studnet);
}


// =========== Loop Through Skills ==========
{
    let student = {
        skills: ["HTML", "CSS", "JavaScript"]
    };
    for (let skill of student. skills) {
        console.log(skill);
    }
}

// ===========Object Inside Array ============
{
    let student = [
        {
            name: "Saif",
            age: 21 
        },

        {
            name: "Ali",
            age: 22
        },

        {
            name: "Raju",
            age: 23
        }
    ];
    console.log(student);
}

// ========== Access Object ========

{
    let student = [
        { name: "saif", age: 21 },

        {name: "Ali", age: 22 }
    ];

    console.log(student[0].name);
    console.log(student[1].age);
}


// ============ Update Object ========

{
    let students = [

        { name: "Raj", age: 22 },

        { name: "Ali", age: 23 }
    ];

    students[0].age = 25;

    console.log(students);
}


// ============ Add new Object ===========

{
    let students = [
        { name: "saif", age: 30 }
    ];
    
    students.push ({
        name: "Prince",
        
        age: 23
    });

    console.log(students);
}



// ====== >>>>> Deep Copy vs Shallow Copy ==========>>>>>

{
    let student1 = {
        name: "saif",
        age: 21
    };

    let student2 = student1;

    student2.age = 25;
                                       
    console.log(student1);           // Note done k output same aaye age 25 q ki same obj ko point le rahe hai
    console.log(student2);
}



// ============== >>>> Shallow Copy using Spread ============>>>

{
    let student1 = {
        name: "saif",
        age: 21
    };

    let student2 = {
        ...student1
    };

    student2.age = 30;

    console.log(student1);

    console.log(student2);
    
}


//  CODE PRATICE 03 ======>>>> Problem with Shallow Copy =====>>>

{
    let student1 = {
        name: "saif",
        address: {
            city: "Patna"
        }
    };

    let student2 = {
        ...student1
    };
    student2.address.city = "Delhi";

    console.log(student1);
    console.log(student2);         // Nested Objec copy nhi hue Referece same raha..

}



//  ===== Deep Copy =======>>>>>>

{
    let student1 = {
        name: "Saif",
        address: {
            city: "Agra"
        }
    };

    let student2 = JSON.parse(JSON.stringify(student1));
    student2.address.city = "Delhi";

    console.log(student1);
    console.log(student2);      /// output m dono complete alag alag pura copy ho ga 
}

// ======>>>>> Object Reference ---->>>>

// object are stored by referece, not by value.



// object reference

{
    let student1 = {
        name: "Raju",
        age: 21
    };
    let student2 = student1;
    console.log(student1);
    console.log(student2);        // student1 or student2 dono ki value same hogi
}


// Modify Reference ======>>>>>

{
    let student1 = {
        name: "saif",
        age: 21
    };

    let student2 = student1;

    student2.age = 30;
                              
    console.log(student1);  // dono obj chnage ho gye q ki dono same reference ko point kar rhe hai
    console.log(student2);    
}

// code Reference Comparison ============>>

{
    let student1 = {
        name: "Saif"
    };

    let student2 = student1;

    console.log(student1 === student2);
}


// ==========>>>> Different Objects ===========>>>

{
    let student1 = {
        name: "saif"
    };

    let student2 = {
        name: "saif"
    };

    console.log(student1 === student2); // note output false aaye q ki dono alag alag obj m hai 
}


//   Reference Check ===========>>>

{
    let car1 = {
        brand: "Alto"
    };
    let car2 = car1;
    
    car2.brand =  "Audi";

    console.log(car1.brand);
    console.log(car2.brand);
}


// ========== >>>> Object.hasOwn() hasOwnProperty()



{
    let student = {
        name: "Saif",
        age: 21
    };

    console.log(Object.hasOwn(student,"name"));

    console.log(Object.hasOwn(student,"city"));
}

//  hasOwn Property() =======>>>>

{
    let student = {
        name: "saif",
        age: 21
    };

    console.log(student.hasOwnProperty("name"));

    console.log(student.hasOwnProperty("city"));
}
// code 02 hasOwnProperty()


{
    let student = {
        name: "saif",
        age: 21
    };

    console.log(student.hasOwnProperty("name"));
    console.log(student.hasOwnProperty("city0"));
}


// ==========>>>> Object -Create () ==============>>>

{
    let person = {
        country: "India"
    };
    let student = Object.create(person);
    console.log(student.country);     /// Country prototype se milta hai islye console.log(student)
}                                       //direct nhi dikhegi


//  =====>>> Access Prototype Property ========>>>

{
    let person = {
        country: "India"
    };
    let student = Object.create(person);
    student.name = "saif";

    console.log(student.name);
    console.log(student.country);
}


// Check Prototype =====>>>>

{
    let person = {
        country: "India"
    };
    let student = Object.create(person);

    console.log(Object.getPrototypeOf(student));
}


// ======>>>> Object.fromEntries() convert an array of key-value pairs into an object.


// Code Object.formEntries()

{
    let data = [
        ["name", "saif"],
        ["age", 21]
    ];
    let student = Object.fromEntries(data);

    console.log(student);
}

// code -2 Properties >>>>>

{
    let data = [
        ["name", "Saif"],
        ["age", 21],
        ["city", "Patna"]
    ];

    let student = Object.fromEntries(data);
    console.log(student);
}


// code Numbers ====>>>>

{
    let marks = [
        ["Math", 90],
        ["English", 85],
        ["Science", 55]
    ];
    let result = Object.fromEntries(marks);

    console.log(result);
}





