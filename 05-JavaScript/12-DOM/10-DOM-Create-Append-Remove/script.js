// =================== Select Elements ===============
const container = document.getElementById("container");
const heading = document.getElementById("heading");
const paragraph = document.getElementById("paragraph");


// =================== 1. Create Element() ============

const h2 = document.createElement("h2");
h2.textContent = "New Heading";

// =============== 2. append () =============
container.append(h2);

// =================== 3. appendChild () =========
const button = document.createElement("button");
button.textContent = "Click Me";
container.appendChild(button);

// ============== 4. prepend () ==============

const h3 = document.createElement("h3");

h3.textContent = "First Heading";
container.prepend(h3);

// =============== 5.before() ==========

const beforeText = document.createElement("P");
beforeText.textContent = "Paragraph Before Heading";
heading.before(beforeText);

// ================= 6. after () ============

const afterText = document.createElement("p");
afterText.textContent = "Paragraph After Heading";

heading.after(afterText);
 
// =================== remove() ============
button.remove();


// ==================== 8. RemoveChild () ============

container.removeChild(paragraph);

// ============== 9. replaceChile() ===========

const newHeading = document.createElement("h1");
newHeading.textContent = "DOM Completed";

container.replaceChild(newHeading, heading);

 