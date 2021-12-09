# Review 12/9/21: JavaScript

## Pillars

1. Type Coercion
2. Scope
3. Prototypes

## Scope

1. Global
2. Local
   - Function
   - Block

## Variable Declaration

- `var`
  - function scoped
- `let`
  - block scoped
- `const`
  - block scoped

## Datatypes

### Primitives

1. Boolean
2. BigInt
3. Number
4. Undefined
5. Null
6. String
7. Symbol

### Non-Primitives (Structure)

1. Objects
   - Functions
   - Arrays, Maps, Sets, HTMLCollections, etc

## Operators

### Assignment

| Symbol | Desc                           |
| ------ | ------------------------------ |
| `=`    | assignment                     |
| `+=`   | addition then assignment       |
| `-=`   | subtraction then assignment    |
| `*=`   | multiplication then assignment |
| `/=`   | division then assignment       |
| `%=`   | mod then assignment            |
| `**=`  | exponentiation then assignment |

### Arithmetic

| Symbol | Desc           |
| ------ | -------------- |
| `+`    | addition       |
| `-`    | subtraction    |
| `*`    | multiplication |
| `/`    | division       |
| `%`    | mod            |
| `**`   | exponentiation |

### Comparison

| Symbol | Desc                  |
| ------ | --------------------- |
| `==`   | loose equality        |
| `!=`   | loose inequality      |
| `===`  | strict equality       |
| `!==`  | strict inequality     |
| `>`    | greater than          |
| `>=`   | greater than or equal |
| `<`    | less than             |
| `<=`   | less than or equal    |

### Logical

| Symbol | Desc        |
| ------ | ----------- |
| `\|\|` | logical OR  |
| `&&`   | logical AND |
| `!`    | logical NOT |

### Ternary (Conditional) Operator

"Inline if/else statement THAT RETURNS A VALUE"

```js
let val1 = 2;
let val2 = 5;
console.log(val1 + val2 == 7 ? "correct" : "incorrect"); // logs "correct"
```

## Control Flow

- `if/else`
- `switch/case`

## Loops

- `while`
- `do/while`
- `for`
- `for/in`
- `for/of`

## Functions

### Function Definition

Define function values by:

1. The declaration keyword: `function name() {}`
2. Assigning a function value to a variable (either function keyword or arrow notation)

Arrow notation functions are _anonymous_ functions (nameless)

```js
function name() {}
name();
const name = function () {};
name();
const getName = function name() {};
getName();
const name = () => {};
name();
```

### Callback Functions

Function that is passed as a parameter to a higher-order function, that is used after some code or event is executed.

## Objects

### Built In/ Core Objects

- Object
  - `toString()`
- Array
  - `reduce()`
  - `forEach()`
  - `map()`
  - `sort()`
  - `reverse()`
  - `indexOf()`
  - ...
- Number
- String
- Boolean
- BigInt
- Map
- Set
- Symbol
- Math
  - `ceil()`
  - `floor()`
  - `round()`
  - `random()`
  - `pow()`
  - ...
- Date

### Properties

A value attached/assigned to an object, that we can access with a property name/identifier

### Methods

A function that is assigned as a property value on an object

Call with `obj.methodName()`

## Document Object Model (DOM)

Allows JavaScript to access and manipulate the loaded document.

The DOM API constructs a DOM Tree of elements from a document, and represents them as JS objects.

### Events

To name a few:

- load
- click
- keypress
- keyup
- keydown
- drag
- drop
- change
- focus
- blur
- ...

### Event Listeners

Functions (event handlers) that are subscribed to handle a triggered event.

## Promises

_Asynchronous_ JavaScript

Able to pass callback functions to promise methods (`.then()`, `.catch()`, `.finally()`) to _consume a promise_ (aka handle the result of a promise)

## Fetch API

Function that returns a _promise_ based on the result of a HTTP request.

Receives a url and request options (method, body, headers, ...).

```js
fetch(url, { method: "GET", mode: "cors" })
    .then(res => /* parse response body */)
    .then(data => /* use data */)
    .catch(err => /* handle errors */)
```

## Node.js

### EventEmitters

Objects that have methods for emitting (triggering) and listening (and handling) programmic events serverside.
