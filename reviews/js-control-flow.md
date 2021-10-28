# Review 10/18/21: Control Flow and Loops

## Control Flow

### Selection Statements

- `if` a condition is met, run some code
- `if/else` a condition is met, run some code, otherwise run some other code
- `else/if` a condition isn't met, run another condition

### Switch Cases

- `switch`

```js
switch (expression) {
  case value1:
    // do something is expression == value1
    break;
  default:
  // do something if no case is matched, or no break statement has been reached
}
```

## Loops

Can be used to _iterate_, e.g. over array values, counting

### Types

- `for` loop

```js
for (let x = 10; x < 100; x += 5) {
  // code to repeat
  if (x == 50) {
    // break stops the loop
    break;
  }
}
```

- `while` loop

```js
while (isOnline) {
  // do something
}
```

- `do/while` loop

```js
do {
  // do something
} while (isOnline);
```

## Keywords

- `continue`, jumps to the next iteration of the loop
- `break`, discontinues the loop
