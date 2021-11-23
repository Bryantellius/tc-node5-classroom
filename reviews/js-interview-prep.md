# JavaScript Interview Questions

1. What are the different data types present in javascript?

   - Primitive
     - `number`
     - `string`
     - `bigint`
     - `boolean`
     - `undefined`
     - `null`
     - `symbol`
   - Structural
     - `object`
     - `function`\*

2. Differences between declaring variables using var, let and const.

   - `var`, can be reassigned, function scoped, can be redeclared
   - `let`, can be reassigned, block scoped, cannot be redeclared
   - `const`, cannot be reassigned, block scoped, cannot be redeclared

3. Is javascript a statically typed or a dynamically typed language?

   - Dynamically typed, meaning that you do not have to declare data types for variables

4. Difference between `==` and `===` operators.

   - Loose equality, checks value AFTER type coercion, `6 == "6"` true
   - Strict equality, checks type and value WITHOUT type coercion, `6 === "6"` false

5. Explain Implicit Type Coercion in javascript.

   - Converting one value to a different data type
   - Ex: `1 || false` >> 1
   - Ex: `1 + true` >> 2
   - Truthy and Falsy
     - 0, 0n, "", '', ``, null, undefined, false >> false
     - Anything else is true, including [] and {}

6. Explain Hoisting in javascript.

   - Within scopes, variable and function declarations are "hoisted" to the beginning of the scope before execution
   - Technically `let` and `const` variables are hoisted, but the TDZ (**temporal dead zone**) prevents reference to these values

7. What is NaN value in JavaScript?

   - number data type
   - Ex: `"hello" * 10` >> NaN
   - `isNaN("hello" * 10)` >> true

8. Explain passed by value and passed by reference.

   - How we pass values in JS (e.g assigned to variables, passed as arguments to functions, assigned to properties, pushed to arrays...)
   - Primitive values are passed by value, copy of the original value, never the value itself
   - Structural values are passed by reference, addresses to data in memory

9. Explain Higher Order Functions in javascript.

   - Functions that
     1. Take a function value as a parameter
     2. Return a function value

10. Explain Scope and Scope Chain in javascript.

    - Visibility of values within containing code blocks, called scopes
    - Scope Chains just refer to the lexical nature of scopes within scopes, Outer > Inner > Most Inner

11. Explain `this` keyword.

    - Reference to the containing scope ("owner", usually but not limited to an object/instance)

12. What are arrow functions?

    - Can omit the `function` keyword
    - Uses the `=>` expression between parameter list and function body
    - **Implicit return**, where we can drop the function body syntax if the function only contains a single statement that needs to be returned, ex: `(num) => num + 2`
    - Can drop the parameter syntax if only one parameter, ex `num => num + 2`
    - All are _anonymous functions_

13. What is an Immediately Invoked Function in javascript?

    - IIFE, _Immediately Invoked Function Expression_
    - A function that is called at the point in which it is defined

14. What are callbacks?

    - A function that is passed as a parameter to a HOF, whether in promises consumers, array methods, event handlers, or any other function that calls the parameter after some event occurs.

15. What is recursion in a programming language?

    - A function that calls itself with new (but mostly different) parameters

16. What is DOM?

    - Document Object Model, used for manipulating the webpage through JS

17. What is the use of promises in javascript?

    - Asynchronous JS, with a class for dealing with post-action consumers (`.then`, `.catch`, `.finally`)

18. What are object prototypes?

    - Defaults, or models, for objects within our programs, that extend predefined properties and methods

19. What are classes in javascript?

    - Considered to be cleaner and simpler syntax than prototypes, they are for the same purpose^

20. What is the use of a constructor function in javascript?

    - Constructor functions created instances from prototypes

21. What is Object Destructuring?

    - Seperating property/values as variables within a scope or program

22. Explain Closures in JavaScript.
23. What is the rest parameter and spread operator?
24. Explain call(), apply() and, bind() methods.
