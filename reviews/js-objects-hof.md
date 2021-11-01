# Review 11/1/21: JavaScript Objects and HOF

## Objects

- Object literal syntax `{}`
- Collection of property/value pairs
- Properties that are function values
- Can hold _any_ values

## Arrays

- Are objects
- List of similar or _like_ values
- Can hold _any_ values
- Array literal syntax `[]`
- Values are stored at indices, `0, 1, 2, 3, ...` (zero-indexed)
  - Positions of values in a list
  - Just Properties
- Must use bracket notation to access values `arr[0]`, `arr.length`, `arr.forEach`

### Accessing Property Values

1. Dot Notation, e.g. `person.firstname`
2. Bracket Notation, e.g. `person["firstname"]`

### `this`

- Refers to the _owner_, or containing scope, of a function/value

## Higher-Order Functions

- Functions that
  1. Take in function values as parameters
  2. Return function values

## For/in

- Used in objects
- Iterate over properties

```js
const person = {
    name: "Ben",
    city: "Hoover"
}

for (let prop in person) [
    console.log(prop);
]

// "name"
// "city"
```

## For/of

- Can be used in iterable objects, i.e. arrays, sets, maps...
- Iterate over values

```js
const people = [
    "Ben",
    "Hoover"
]

for (let val of people) [
    console.log(val);
]

// "Ben"
// "Hoover"
```
