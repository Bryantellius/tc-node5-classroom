# Review 11/3/21: JavaScript Object Oriented Programming

## Prototypes

> Models (linkages) between objects where pre-defined properties and methods are made accessible to any instance of a prototype

## Class Notation

- `class`, syntax sugar for JS _prototypes_, aka models for objects
- `constructor` method builds (_creates an instance_) an object
- `extends`, used for adding/defining _inheritence_ between prototypes
  - how we create _prototype chaining_ with class notation
- Ex:

```js
class ClassName {
  constructor() {
    this.prop = "value";
  }

  method() {
    // does something
  }
}
```

## Objects and Iterables

- Arrays, strings, maps, sets, etc
- Can use (_consume_) iterables with `for/of`
