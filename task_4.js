// Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

let arr = [1, 2, 3, 4, 5];
let str = "Raj";
let bool = true;
let obj = { n: "Raj", a: 23 };
let und;
let nul = null;

if (Array.isArray(arr)) {
  console.log("Yes This Is Array.");
} else {
  console.log("Sorry, This Is Not A Array.");
}
