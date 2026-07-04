// ============ String Introduction ============


{
    // Double   Quotes

    let name = "Raju";

    // Single Quotes

    let course = 'JavaScript';

    // Template Literal (Backticks)

    let message = `Welcome to JavaScript`;

    console.log(name);
    console.log(course);
    console.log(message);

    console.log(typeof name);
    console.log(typeof course);
    console.log(typeof message);   //  this is used for check data types.. //
}


// ======= string Length ========== >>>>>

{
    let text = "JavaScript";
    console.log(text);
    console.log(text.length);
    console.log(text[0]);
    console.log(text[text.length-1]);
}


// ========== Access Charctor =======?>>>>>

{
    let text = "JavaScript";

    // 1. Bracket Notation
    console.log(text[0]);
    console.log(text[4]);

    // 2. CharAt()
    console.log(text.charAt(0));
    console.log(text.charAt(4));

    // 3. at()
    console.log(text.at(0));
    console.log(text.at(-1));  // last Character
}


// ------======>>>>> String Case Methods ==========----->>>

{
    let text = "   JavaScript   ";
    console.log(text);

    console.log(text.toUpperCase());
    console.log(text.toLowerCase());
    console.log(text.trim());
    console.log(text.trim().toUpperCase());
    console.log(text.trim().toLowerCase());
}


// -===== == =>>> >> includes ----->>>>>

{
    let text = "JavaScript";
    console.log(text.includes("Script"));
    console.log(text.startsWith("Java"));
    console.log(text.endsWith("Scripts"));
}


// ===========>>>>>>>>>>> Index OF =======>>>>

{
    let text = "JavaScript Java";


    console.log(text.indexOf("Java"));
    console.log(text.lastIndexOf("Java"));
    console.log(text.indexOf("Script"));
    console.log(text.indexOf("Python"));
}


// ============>>>>> slice() -======>>>>>>

{
    let text = "JavaScript";

    console.log(text.slice(0, 4));
    console.log(text.slice(4));
    console.log(text.slice(-6));
    console.log(text.slice(-6,-3));
}


// =========>>>> Search & Replace ======-- >>>

{
    let text = "Java is Best. Java is Easy.";
    
    console.log(text.includes("Java"));
    console.log(text.includes("Java"));
    console.log(text.replace("Java", "Python"));

    console.log(text.replaceAll("Java", "Python"));
}


// ====== string =======>>>

{
    let text = "HTML,  CSS,  JavaScript";

    console.log(text.split(", "));
    let firstName = "Prince";
    let lastName = "Khan";

    console.log (firstName.concat("", lastName));

    console.log("JS ". repeat(3));
}


// ======>>>>> Advanced String Batch-01 =====>>>>

{
    let text = "   JavaScript is Awesome  ";

    //1. String Immutability 
    console.log(text);

    // 2. Escape Character 
    console.log("Hello\nWorld");

    // 3. Method Chaning

    console.log(text.trim().toUpperCase().slice(0,10));

    // 4. Match()

    console.log(text.match("JavaScript"));

}
 


// ===========>>>>> Advaced strin -02 ==>>

{
    let text = "JavaScript is Awesome";

    // 1. search()

    console.log(text.search("script"));

    // 2. RegExp 

    console.log(text.search(/Awesome/));

    // 3. String Comparison

    console.log("Java" === "Java");

    console.log("Java" === "Python");

    // 04. Unicode & Emoji

    console.log("❤ JavaScript");
    console.log("😊");
}