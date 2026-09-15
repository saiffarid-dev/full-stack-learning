// pattern 01   Squre Star

{
    let rows = 5;
    for (let i = 1; i <= rows; i++) {

        let star = " ";
        
        for (let j = 1; j <= rows; j++) { 
        
            star += "* ";
        }
        console.log(star);
    }
}


// Pattern 02 Right Triangle Star

{
    let rows = 5;
    for (let i = 1; i <= rows; i++) {

        let star = " ";

        for (let j = 1; j<= i; j ++) {
            star += "* ";
        }

        console.log(star);
    }
}

// Pattern 03 Reverse right Triangle

{
    let rows = 5;
    
    for (let i = rows; i >= 1; i --) {
        let star = "";
        for (let j = 1; j <= i; j++) {
            star += "* ";
        }

        console.log(star);
    }
}

// Pattern 04 Pyramid Star Pattern

{
    let rows = 5; 
    for (let i = 1; i <= rows; i++) {


        let star = "";


        // Space
        for (let j = 1; j <= rows -i; j++) {
            star += " ";
        }
        // Star
        for (let k = 1; k <= (2 * i - 1); k++) {
            star += "*";
        }
        console.log(star);
    }
}


// pattern 05 Diamond star Pattern

{
    let rows = 5;

    // upper Pyramind
    for (let i = 1; i <= rows; i++) {


        let star = "";

        // Spaces
        for (let j = 1; j <= rows -i; j++) {
            star += " ";
        }

        // Stars
        for(let k = 1; k <= (2 * i - 1); k++) {
            star += "*";
        }

        console.log(star);
    }

    // Lower Inverted Pyramid
    for (let i = rows - 1; i >= 1; i--) {
        let star = "";

        // Spaces

        for(let j = 1; j <= rows -i; j++) {
            star += " ";
        }

        // Stars 
        for (let k = 1; k <= (2 * i - 1); k++) {
            star += "*";
        }

        console.log(star);
    }

}