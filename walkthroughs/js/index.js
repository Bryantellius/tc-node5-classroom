console.log("Hello World!");

// Multi-paradigmed
// Functional
// Procedural
// OOP

// Three pillars of JavaScript
// 1. Type Coercion
// 2. Scope
// 3. Prototypes

// JS is dynammically typed
// JS will interpret/change data types depending on the operations/statements executed

let name = "Ben";
let isOnline = true;

name + isOnline; // "Bentrue"

// JS is built on objects
// objects relate to objects as parent > child relationships,
// where properties of the parent are passed and added to the child objects

class Person {
  constructor(name) {
    this.name = name;
  }

  greeting() {
    console.log(this.name + " says hello!");
  }
}

class Coder extends Person {
  constructor(name, occ) {
    super(name);
    this.occupation = occ;
  }
}

new Coder("Ben", "Web developer").greeting(); // "Ben says hello!"

// Scope defines the visibility of values within program
// Lexical scoping refers to the visibility (inside out) of nested scopes
// Hoisting is defined by scope

// Global
// Local
// Function
// Block

if (true) {
  let value = true;
} else {
  let value = false;
}

// console.log(value);

function createMessage() {
  let message = "Hello World";

  return function (newMsg) {
    message = newMsg;
    console.log(message);
  };
}

let changeMessage = createMessage();

changeMessage("New Message");
changeMessage("Another message");
