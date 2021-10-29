# Review 10/29/21: JavaScript Functions

- Used to group code statements together to be called by a single identifier invocation

## Defining functions

1. Declaration

   ```js
   function name(params) {}
   ```

2. Assign to a variable

   ```js
   const name = function (params) {};
   ```

## Using Functions

Call or _invoke_ functions by the name followed by parentheses, e.g. `name()`

## Function Body

Can contain ANY code statements, variable initializations, if/else, switch, loops, other functions, etc

## Scopes

1. Global, values can be seen anywhere in a program
2. Local, any inner scope to the global scope, typically defined by `{}`
   - Block, any code block delimited by `{}`, e.g. if, else, switch, loops
   - Function, any function body

General rule, visible from inner scopes, not visible in outer scopes
