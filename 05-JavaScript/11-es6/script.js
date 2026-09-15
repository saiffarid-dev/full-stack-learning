// ============ ----->>>> ES6 -----========>>>>>

{
    // 1. Let 

    let name = "Saif";
    name = "Ali";

    // 2. Const

    const country = "India";

    // 3. Template Literal

    console.log(`Name: ${name}`);
    console.log(`Country: $ {Country}`);

    // 4. Default Parameter

    function greet(user = "Guest"){
        console.log(`Welcome $ {user}`);
    }
    greet("Saif");
    greet();

}




// ===========>>>>>>>> ES6 - Batch - 2 =======>>>>>>

{
    // Arrow Function

    const greet = (name) => {
        return `Hello ${name}`;
    };
    console.log(greet("saif"));

    // Destructuring 
    const  student = {
        name: "Saif",
        age: 21
    };

    const { name, age } = student;

    console.log(name);
    console.log(age);

    // Spread Operato r==

    const numbers = [10, 20, 30];
    const copyNumbers = [...numbers];

    console.log(copyNumbers);

    // Rest Operator 
    function total(... marks) {
        console.log(marks);

    }

    total (80, 90, 95);
}

// =========>>>>>> ES6 - 03 ======>>>>

{
    // 1. For...of
    const colors = ["Red", "Green", "Blue"];

    for (const color of colors) {
        console.log(color);
    }

    // 2 for...in 
    const student = {
        name: "Ali",
        age: 21
    };

    for (const key in student) {
        console.log(key,":", student[key]);
    }

    // 3 & 4. Enhanced Object Literal + Property Shorthand

    const name = "Saif";
    const age = 21;

    const user = {
        name,
        age
    };
    console.log(user);
}


// ===================>>>>>>> ES6-- Intermediate - ==============>>>> 

// 1. Class 

{
    class Book {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    // 2 Getter

    get bookPrice() {
        return this.price;
    }

    // 3. Setter
    set bookPrice(value) {
        this.price = value;
    }

    // 4. Static Method
    static category () {
        return "Programming Books";
    }
    
}
const book1 = new Book ("JavaScript Guide", 799);
console.log(book1.title);
console.log(book1. bookPrice);
book1. bookPrice = 999,
console.log(book1.bookPrice);
console.log(Book.category());
}


// ======== ES6 ======


{
    // 1. Computed Property Name
    let key = "productName";
    const product = {
        [key] : "Laptop",
        price: 65000
    };
    console.log(product);

    // 2. Optional Chaining

    console.log(product.company?.name);

    // 3. Nullish Cocalescing
    let discount = null;
    
    console.log(discount ?? "No Discount");

    // 4. Object.entries()

    console.log(Object.entries(product));
}


// ============--- ES6 - Advanced --   ---==========>>>

{
    // Promise
    let order = new
    Promise((resolve, reject) => {
        resolve("Oder Delivered");
    });
    
    order.then((result) => {
        console.log(result);
    });

    // async & await

    async function showMessage() {
        let data = await
        Promise.resolve("Welcome User");
        console.log(data);
    }
    showMessage();
    // Map

    let employee = new Map();
    employee = new Map();

    employee.set("id", 101);
    employee.set("name", "Aman");

    console.log(employee.get("name"));
}



// =========>>>>>>>> ES6- - Advanced -2 ===>>>>

{
    // 1. Set 
    const marks = new Set([80, 90, 95, 90, 80]);

    console.log(marks);

    // 2. WeakMap

    const person = {};

    const studentData = new WeakMap();

    studentData.set (person, "Passed");

    console.log(studentData.get(person));

    // 3.WeakSet

    const user = {};

    const onlineUsers = new WeakSet();

    onlineUsers.add(user);

    console.log(onlineUsers.has(user));

    // 4. Symbol

    const id = Symbol("Id");

    console.log(id);

}


// ========= -- -==>>>> ES6- Advanced ========>>>

{
    // Iterator 
    const fruits = ["Apple", "Mango"];

    const iterator = fruits[Symbol.iterator]();

    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());

    // Generator

    function* numbers () {
        yield 10; 
        yield 20;
    }

    const gen = numbers();

    console.log(gen.next());
    console.log(gen.next());

    // Proxy 
    const mobile = { brand: 
        "Samsung"};
        const proxy =  new Proxy(mobile, {});
        

        console.log(proxy.brand);

        // Reflect 

        console.log(Reflect. get(mobile, "brand"));
}


// ===========>>>>>>> ES6-- Advanced last == =======>>>>>>

{

    // 1. BigInt 
    const amount = 123456789123456789123456789123456789n;
    console.log(amount);

    // 2. Dynamic Import

    console.log("import('./math.js')");

    // 3. Object.formEntries()
    const data =  [
        ["city", "Delhi"],
        ["pain", 110001]
    ];

    console.log(Object.fromEntries(data));

    // 4. globalThis

    globalThis.company = "OpenAI";

    console.log(globalThis.company);
} 


