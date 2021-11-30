# Review 11/30/21: SQL

- SQL, _Structured Query Language_
- Used to manage data within a database, usually tied to an application
- CRUD
  1. _Create_, `INSERT INTO table (columns...) VALUES (values...);`
  2. _Read_, `SELECT columns... FROM table;`
  3. _Update_, `UPDATE table SET column=value...;`
  4. _Delete_, `DELETE FROM table;`

## Clauses

- `WHERE`, followed by a conditional that, if met, will determine which records to work with
- `ORDER BY`, sorting results
- `LIKE`, followed by a string pattern

## Modifiers

| Symbol   | Desc                  |
| -------- | --------------------- |
| `=`      | equality              |
| `<>, !=` | inequality            |
| `>`      | greater than          |
| `>=`     | greater than or equal |
| `<`      | less than             |
| `<=`     | less than or equal    |
| `%`      | wildcard, 0 or more   |

## Arithmetic Operators

| Symbols | Desc                        |
| ------- | --------------------------- |
| `+`     | addition                    |
| `-`     | subtraction                 |
| `*`     | multiplication              |
| `/`     | division                    |
| `%`     | modulus, division remainder |

## Aggregate Functions

Reduce many values to a single value

- `COUNT()`, returns the count of records
- `SUM()`, returns the sum of values
- `AVG()`, returns the average of values
- `MAX()`, returns the average of values
- `MIN()`, returns the average of values

## Math Functions

- `ROUND()`
- `CEIL()`
- `FLOOR()`
- `POW()`
