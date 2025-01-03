// Product Data
const product = {
  title: "CT Ball Pen",
  ratings: 4,
  offer: 5,
  deal: true,
  totalPrice: 285,
  discount: "5% off",
};

document.getElementById("product-title").innerText = `Title: ${product.title}`;
document.getElementById(
  "product-ratings"
).innerText = `Ratings: ${product.ratings}`;
document.getElementById(
  "product-price"
).innerText = `Price: ₹${product.totalPrice}`;
document.getElementById(
  "product-discount"
).innerText = `Discount: ${product.discount}`;

// Profile Data
const profile = {
  userName: "iamsachinrv",
  posts: 36,
  followers: 569,
  following: 800,
  isFollowed: true,
  fullName: "Sachin R V",
  designation: "Creator",
  bio: "Empty Bio",
};

document.getElementById(
  "profile-username"
).innerText = `Username: ${profile.userName}`;
document.getElementById(
  "profile-followers"
).innerText = `Followers: ${profile.followers}`;
document.getElementById(
  "profile-following"
).innerText = `Following: ${profile.following}`;

// Function for Pre-Increment Check
function checkPreIncrement() {
  let num = parseInt(document.getElementById("preNumberInputIncrement").value); // Get the original number

  let preIncrementValue = ++num; // Pre-increment (increment first, then use the value)

  // Display the incremented value (preIncrementValue) and the original value (num - 1)
  document.getElementById(
    "preIncrementResult"
  ).innerText = `Pre-Increment: ${preIncrementValue} (num was initially ${
    num - 1
  })`;
}

// Function for Post-Increment Check
function checkPostIncrement() {
  let num = parseInt(document.getElementById("postNumberInputIncrement").value); // Get the original number

  let postIncrementValue = num++; // Post-increment: value is used first, then incremented

  // Display the incremented value (num) and the original value (postIncrementValue)
  document.getElementById(
    "postIncrementResult"
  ).innerText = `Post-Increment: ${num} (num was initially ${postIncrementValue})`;
}

// Function for Pre-Decrement Check
function checkPreDecrement() {
  let num = parseInt(document.getElementById("preNumberInputDecrement").value); // Get the original number

  let preDecrementValue = --num; // Pre-decrement (decrement first, then use the value)

  document.getElementById(
    "preDecrementResult"
  ).innerText = `Pre-Decrement: ${preDecrementValue} (num was initially ${
    num + 1
  })`;
}

// Function for Post-Decrement Check
function checkPostDecrement() {
  let num = parseInt(document.getElementById("postNumberInputDecrement").value); // Get the original number

  let postDecrementValue = num--; // Post-decrement: value is used first, then decremented

  // Display the result
  document.getElementById("postDecrementResult").innerText = `Post-Decrement: ${
    postDecrementValue - 1
  } (num was initially ${postDecrementValue})`;
}

// Check if number is a multiple of 5
function checkMultiple() {
  const num = document.getElementById("numberInput").value;
  const result =
    num % 5 === 0
      ? `${num} is a multiple of 5`
      : `${num} is not a multiple of 5`;
  document.getElementById("multipleResult").innerText = result;
}

// Calculate Grade based on marks
function calculateGrade() {
  const marks = document.getElementById("marksInput").value;
  let grade;

  if (marks >= 90 && marks <= 100) {
    grade = "Your Grade is A";
  } else if (marks >= 70 && marks < 90) {
    grade = "Your Grade is B";
  } else if (marks >= 60 && marks < 70) {
    grade = "Your Grade is C";
  } else if (marks >= 50 && marks < 60) {
    grade = "Your Grade is D";
  } else if (marks > 100 || marks < 0) {
    grade = "Please Enter a marks (0-100)";
  } else {
    grade = "You Grade is F";
  }
  document.getElementById("gradeResult").innerText = grade;
}

// Number Guessing Game
const secretNumber = 5;
function guessNumber() {
  const guess = document.getElementById("guessInput").value;
  if (parseInt(guess) === secretNumber) {
    document.getElementById("gameResult").innerText =
      "Correct number, Hurrahh!!";
  } else {
    document.getElementById(
      "gameResult"
    ).innerText = `Wrong number! correct number is: ${secretNumber}`;
  }
}

// String Concatination
function manipulateString() {
  const str = document.getElementById("stringInput").value;
  const result = `Lowercase: ${str.toLowerCase()}, Uppercase: ${str.toUpperCase()}, Trimmed: ${str.trim()}`;
  document.getElementById("stringResult").innerText = result;
}

//

// Array Sum and Avg Calculation
function calculateArraySum() {
  const marks = [];

  // Loop through each of the 5 input fields and collect the values
  for (let i = 1; i <= 5; i++) {
    const mark = document.getElementById("mark" + i).value.trim(); // Get the value and remove spaces
    marks.push(mark);
  }

  // Check if any value is empty or non-numeric
  for (let i = 0; i < marks.length; i++) {
    if (isNaN(marks[i]) || marks[i] === "") {
      document.getElementById("arrayResult").innerText =
        "Invalid input. Please enter valid numbers for all marks.";
      return; // Stop processing if any input is invalid
    }
  }

  // Convert the array of strings to an array of numbers
  const marksAsNumbers = marks.map((num) => parseFloat(num));
  console.log(marksAsNumbers);

  const total = marksAsNumbers.length;
  const sum = marksAsNumbers.reduce((acc, num) => acc + num, 0);
  const avg = sum / total;

  document.getElementById(
    "arrayResult"
  ).innerText = `Sum: ${sum}, Average: ${avg}`;
}

// Array Methods Example (Push, Pop, Shift)
function arrayMethods() {
  let arr1 = [10, 20, 30, 40, 50];
  let arr2 = ["arr2", "break", "caches", "debugger"];

  arr1.push(60); // Pushes 60 to the end of the array
  let pushResult = `Pushed 60: ${arr1}`;

  let popped = arr1.pop(); // Pops the last element (60)
  let popResult = `Popped Element: ${popped} | Array after pop: ${arr1}`;

  let shifted = arr1.shift(); // Removes the first element (10)
  let shiftResult = `Shifted Element: ${shifted} | Array after shift: ${arr1}`;

  let spliceResult = arr1.splice(1, 1, 101); // Splices the array at index 1
  let spliceOutput = `Spliced Result: ${spliceResult} | Array after splice: ${arr1}`;

  let concat = arr1.concat(arr2);
  let concatResult = `<br><strong> array 1: </strong>${arr1} <br> <strong> array 2: </strong> ${arr2} <br> <strong> Result: </strong> ${concat}`;

  let result = `
    <h3>Array Operations Results:</h3>
    <p><strong>Push Operation:</strong> ${pushResult}</p>
    <p><strong>Pop Operation:</strong> ${popResult}</p>
    <p><strong>Shift Operation:</strong> ${shiftResult}</p>
    <p><strong>Splice Operation:</strong> ${spliceOutput}</p>
    <p><strong>Concat Operation:</strong> ${concatResult}</p>
  `;

  document.getElementById("arrayOpResult").innerHTML = result;
}

// Regular function
function showRegularFunction() {
  document.getElementById("functionResult").innerText =
    "This message was generated using a regular function.";
}

// Arrow function
const showArrowFunction = () => {
  document.getElementById("functionResult").innerText =
    "This message was generated using an arrow function.";
};

// regular functions V/S arrow functions
// this: this is a special word in JavaScript that refers to the object that is calling the function.
// It helps you know which object the function is "talking about.

// For example, in a simple function, this could refer to an object:

// const person = {
//   name: "John",
//   greet: function() {
//     console.log("Hello, " + this.name);  // "this" refers to the person object
//   }
// };

// person.greet();  // Output: Hello, John

// Here, this refers to the person object.

// 2. Arrow Function vs Regular Function
// Now, let’s look at the difference between regular functions and arrow functions in simpler terms.

// Regular Function
// A regular function is like a normal, traditional function that you define with the function keyword.

// Example:
// function sayHello() {
//   console.log("Hello!");
// }

// sayHello();  // Output: Hello!
// Regular functions have their own this. This means that when you use this inside a regular function, it changes based on how you call the function.
// Arrow Function
// An arrow function is a newer and shorter way to write functions using =>.

// Example:
// const sayHello = () => {
//   console.log("Hello!");
// };

// sayHello();  // Output: Hello!
// Arrow functions don’t have their own this. Instead, they use the this from where they were created (the surrounding code).
// 3. The Difference: this Binding
// The main difference between regular functions and arrow functions is how they handle this.

// Regular Function Example:
// In a regular function, this is determined by how the function is called. If you call the function using an object, this will refer to that object. But if you call it alone, this will refer to something else (like the global object).
// const person = {
//   name: "Alice",
//   greet: function() {
//     console.log(this.name);  // "this" refers to the "person" object
//   }
// };

// person.greet();  // Output: Alice

// const greetFunc = person.greet;
// greetFunc();  // Output: undefined (because "this" now refers to the global object)
// Here, when you call person.greet(), this refers to the person object, but when you call greetFunc(), this doesn’t refer to person anymore, and this.name is undefined.

// Arrow Function Example:
// In an arrow function, this is always the same as it was in the place where the arrow function was created. It doesn’t change based on how it is called.
// const person = {
//   name: "Alice",
//   greet: function() {
//     const arrowGreet = () => {
//       console.log(this.name);  // "this" refers to the "person" object because of lexical binding
//     };
//     arrowGreet();
//   }
// };

// person.greet();  // Output: Alice
// Here, the arrow function always uses the this from the greet method. So even though it's inside a function, this still refers to the person object.

// 4. When to Use Arrow Functions
// Why do we use arrow functions more often in modern JavaScript?

// Concise and Shorter: Arrow functions are shorter and easier to write, especially for simple functions. You don’t need to use the function keyword or curly braces {} if it's a one-liner.
// // Regular function:
// function add(a, b) {
//   return a + b;
// }

// // Arrow function:
// const add = (a, b) => a + b;
// Lexical this: The most important reason to use arrow functions is that they make handling this easier. Since arrow functions don’t change the value of this, you don’t have to worry about this pointing to the wrong thing inside your functions. This is especially useful when dealing with things like callbacks or event handlers.

// 5. When to Use Regular Functions
// Use regular functions when you need to use this dynamically (i.e., it changes based on how the function is called).
// Regular functions are also useful if you need access to the arguments object (which contains all the parameters passed to the function).

// What is Lexical Binding?
// Lexical binding refers to the way in which a function's this value is determined by the surrounding context where the function is defined, rather than by how the function is called.

// In JavaScript, regular functions and arrow functions behave differently when it comes to this. The key difference is that arrow functions have lexical binding of this, meaning they use the value of this from where the function is defined (or created), not from where the function is called.

// A Simple Analogy
// Think of lexical binding like this:

// Imagine you're in a room (the lexical environment).
// A regular function will look around to see who is calling it and decide who this is based on the "caller" in the current situation.
// An arrow function, however, will always stick with the room where it was created (the "lexical environment"). It doesn't look around to see who is calling it—it always uses the this from where it was defined.

// Regular function that accepts a callback
function processData(callback) {
  setTimeout(() => {
    // Simulate data processing and call the callback
    console.log("Data processed!");
    callback("Data processing complete!");
  }, 2000); // Simulate a delay of 2 seconds
}

// Callback function to display the result
function displayResult(message) {
  document.getElementById("result").innerText = message;
}

// Function that starts the process and passes displayResult as the callback
function startProcess() {
  document.getElementById("result").innerText = "Processing...";
  processData(displayResult); // Pass the callback function here
}

// DOM Manipulation

let isUpdated = false; // Variable to track if the DOM has been updated

function updateDOM() {
  if (isUpdated) {
    console.log("DOM has already been updated.");
    return; // Exit the function if updates are already done
  }

  // 1. Accessing and modifying elements by ID
  let heading = document.getElementById("heading");
  heading.innerText = "Updated Heading!"; // Update heading text

  // 2. Accessing and modifying elements by class name
  let boxes = document.getElementsByClassName("box");
  for (let box of boxes) {
    box.style.backgroundColor = "lightblue"; // Change background color
    box.innerText = box.innerText + " - Updated"; // Modify text inside box
  }

  // 3. Accessing elements using querySelector
  let firstPara = document.querySelector("p");
  firstPara.innerText = "First paragraph updated via querySelector!"; // Update the first paragraph

  // 4. Adding a new element (Button) ONLY ONCE
  let newBtn = document.createElement("button");
  newBtn.innerText = "New Button Added!";
  newBtn.style.backgroundColor = "green";
  newBtn.style.color = "white";
  document.body.append(newBtn); // Add button to the body

  // 5. Changing styles dynamically for box elements
  let divs = document.querySelectorAll(".box");
  divs[0].style.fontSize = "24px"; // Change font size for Box 1
  divs[1].style.fontWeight = "bold"; // Make Box 2 text bold

  // 6. Modifying attributes using setAttribute
  let para = document.querySelector(".para");
  para.setAttribute("class", "newClass"); // Change class name for the first paragraph

  // 7. Using classList to add a new class
  let newPara = document.querySelector(".newClass");
  newPara.classList.add("highlighted"); // Add another class to change the style

  // 8. Adding a new element before the first paragraph
  let newHeading = document.createElement("h3");
  newHeading.innerHTML = "This is a new heading added by JavaScript.";
  document.querySelector("body").prepend(newHeading); // Add new heading at the top of the body

  // 9. Modifying the innerHTML of a div
  let div = document.createElement("div");
  div.innerHTML = "<strong>This content is added dynamically.</strong>";
  document.body.appendChild(div); // Append new div to the body

  // Mark the DOM as updated
  isUpdated = true;
}

// Event Handling using External JS
let button1 = document.querySelector("#button1");
button1.addEventListener("click", (evt) => {
  console.log("Button clicked!");
  console.log(evt.target); // Targeting the element
  console.log(evt.type); // Type of the event (click)
  console.log(evt.clientX, evt.clientY); // Mouse position
});

// Toggle between Light and Dark Mode
let currentMode = "light";
let body = document.querySelector("body");
let container = document.querySelector(".container");

let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  console.log("Current mode:", currentMode);
  if (currentMode === "light") {
    currentMode = "dark";
    body.style.backgroundColor = "black";
    container.style.backgroundColor = "black";
    body.style.color = "white";
    container.style.color = "white";
  } else {
    currentMode = "light";
    body.style.backgroundColor = "white";
    container.style.backgroundColor = "white";
    body.style.color = "black";
    container.style.color = "black";
  }
  console.log("Changed mode to", currentMode);
});

// Classes and Objects Example
const student = {
  fullName: "Sachin",
  marks: 9.4,
  fullMarks: function () {
    return `Marks are: ${this.marks}`; // "this" refers to student object
  },
};

document.querySelector("#createStudent").addEventListener("click", () => {
  const result = student.fullMarks(); // Calling function from the student object
  document.querySelector("#studentOutput").innerText = result; // Show result in the UI
});

// Error Handling Example
document.querySelector("#errorExample").addEventListener("click", () => {
  let a = 10;
  let b = 20;
  let output = `a + b = ${a + b}\n`;

  try {
    // This will cause an error as 'bb' is not defined
    output += `a + bb = ${a + bb}`;
  } catch (error) {
    output += `Error caught: ${error.message}`;
  }
  document.querySelector("#errorOutput").innerText = output;
});

// Sync Programming Example
document.querySelector("#syncExample").addEventListener("click", () => {
  console.log("Sync Programming Example Started");
  let output = `Sync Example Output:\n`;
  output += "a\n";
  output += "b\n";
  output += "c\n";
  output += "d\n";
  output += "e\n";
  document.querySelector("#syncOutput").innerText = output;
  console.log("Sync Output: a b c d e");
  console.log("Sync Programming Example Ended");
});

// Async Programming Example
document.querySelector("#asyncExample").addEventListener("click", () => {
  console.log("Async Programming Example Started");

  let output = `Async Example Output:\n`;
  output += "a\n";
  output += "b\n";
  document.querySelector("#asyncOutput").innerText = output; // Display "a" and "b" immediately
  console.log("Async Output: a b (initial steps)");

  setTimeout(() => {
    output += "hello (after 3 second)\n";
    document.querySelector("#asyncOutput").innerText = output; // Update the output after 3 seconds
    console.log("Async Output: hello after 3 seconds");
  }, 3000);

  // Continue to update output synchronously
  output += "c\n";
  output += "d\n";
  output += "e\n";
  console.log("Async Output: a b c d e (before delay)");

  // Display the final result immediately without waiting
  document.querySelector("#asyncOutput").innerText = output;
  console.log("Async Programming Example Ended");
});

// Callback Hell Example
function getData(dataId, getNextData) {
  console.log(`Fetching Data with ID: ${dataId}`);
  setTimeout(() => {
    let output = `DataId: ${dataId}\n`;
    document.querySelector("#callbackHellOutput").innerText += output;
    console.log(`DataId: ${dataId} fetched`);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

document.querySelector("#callbackHell").addEventListener("click", () => {
  console.log("Callback Hell Example Started");
  document.querySelector("#callbackHellOutput").innerText =
    "Callback Hell Example Output:\n";
  getData(1, () => {
    getData(2, () => {
      getData(3, () => {
        getData(4);
      });
    });
  });
  console.log("Callback Hell Example Ended");
});

// Promise Chaining Example
function getDataPromise(dataId) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching Data with ID (Promise): ${dataId}`);
    setTimeout(() => {
      let output = `DataId: ${dataId}\n`;
      document.querySelector("#promiseChainingOutput").innerText += output;
      console.log(`DataId: ${dataId} fetched (Promise)`);
      resolve();
    }, 2000);
  });
}

document.querySelector("#promiseChaining").addEventListener("click", () => {
  console.log("Promise Chaining Example Started");
  document.querySelector("#promiseChainingOutput").innerText =
    "Promise Chaining Example Output:\n";
  getDataPromise(1)
    .then(() => getDataPromise(2))
    .then(() => getDataPromise(3))
    .then(() => getDataPromise(4))
    .then(() => console.log("Promise Chaining Example Ended"));
});

// Async/Await Example
async function getDataAsync(dataId) {
  console.log(`Fetching Data with ID (Async/Await): ${dataId}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      let output = `DataId: ${dataId}\n`;
      document.querySelector("#asyncAwaitOutput").innerText += output;
      console.log(`DataId: ${dataId} fetched (Async/Await)`);
      resolve();
    }, 2000);
  });
}

document.querySelector("#asyncAwait").addEventListener("click", async () => {
  console.log("Async/Await Example Started");
  document.querySelector("#asyncAwaitOutput").innerText =
    "Async/Await Example Output:\n";
  await getDataAsync(1);
  await getDataAsync(2);
  await getDataAsync(3);
  console.log("Async/Await Example Ended");
});

// API Call Example using Fetch API
let URL = "https://cat-fact.herokuapp.com/facts";
let factsData = document.querySelector("#facts");

async function getFacts() {
  console.log("Fetching Cat Fact (API Call) Started");

  try {
    let response = await fetch(URL);
    let data = await response.json();
    factsData.innerText = `Cat Fact: ${data[0].text}`;
    console.log("Cat Fact Fetched: ", data[0].text);
  } catch (error) {
    console.log("Error fetching the cat fact:", error);
    factsData.innerText = "Error fetching cat fact. Please try again later.";
  }

  console.log("Fetching Cat Fact (API Call) Ended");
}

document.querySelector("#apiButton").addEventListener("click", getFacts);

function showRegularFunction() {
  document.getElementById("functionResult").innerText =
    "This message was generated using a regular function.";
}

// Function to redirect to the homepage
function goHome() {
  window.location.href = "/index.html";
}

// event listener to the close button with ID
document.getElementById("close-btn").addEventListener("click", goHome);
