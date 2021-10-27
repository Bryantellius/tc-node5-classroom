# Review 10/27/21: JavaScript Intro

## Variables

### Declaring Variables

Use declaration keywords to create variables

- `let` - block scoped, can be reassigned
- `const` - block scoped, cannot be reassigned
- `var` - function scoped, can be reassigned or redeclared

### Naming Conventions

Allowed at the start of a variable **identifier**:

- `_`, `A-z`, `$`
- camelCaseIsLikeThis

## Type Coercion

> JS will change/morph data types of values to complete operations/expression

## Operators

1. Unary
2. Binary
3. Ternary (aka conditional)

Types

- Arithmetic

  | Symbol | Desc                       |
  | ------ | -------------------------- |
  | `+`    | addition remainder         |
  | `-`    | subtraction remainder      |
  | `*`    | multiplication remainder   |
  | `/`    | division remainder         |
  | `**`   | exponentiation remainder   |
  | `%`    | modulus/division remainder |

- Assignment

  | Symbol | Desc                             |
  | ------ | -------------------------------- |
  | `=`    | assignment                       |
  | `+=`   | addition then assignment         |
  | `-=`   | subtraction then assignment      |
  | `*=`   | multiplication then assignment   |
  | `/=`   | division then assignment         |
  | `**=`  | exponentiation then assignment   |
  | `%=`   | modulus/division then assignment |

- Comparison

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

- Logical

  | Symbol | Desc                                       |
  | ------ | ------------------------------------------ |
  | `&&`   | logical AND, both values must be true      |
  | `\|\|` | logical OR, one of two values must be true |
  | `!`    | logicl NOT, opposite boolean value         |
