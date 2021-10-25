# Review 10/25/21: Forms, Tables, Flexbox, and Grid

## Forms

- Use a form any time you need to allow the user to input data
- Can nest forms in tables

### Types of inputs

- checkbox
- number
- text
- radio
- email
- password
- date
- datetime
- color
- range
- submit

### Other Input Attributes

- placeholder
- name
- id
- required

### Other form elements

- `select` element with nested `option` elements
- `textarea` for multi-line text input
- `label`
- `button`, also of type submit

## Tables

- Displaying tabular data

### Elements

- `table`
- `colgroup`
- `col`
- `thead` table heading
- `th` column headers
- `tbody` table body
- `tr` row
- `td` data cell
- `tfoot` table footer

## Flexbox

### Architecture

- Main Axis
- Cross Axis

### Properties/Values

- `display: flex` to enable flexbox
- flex-direction determines the main axis, defaulted to row
- justify-content determines the position of elements on the main axis
- align-items determines the position of elements on the cross axis
- align-self determines the position of an individual element on the cross axis
- flex-wrap determines whether the next element needs to be on a new row dependent on the container and item widths
- flex-grow determines the ratio of how large an individual item will stretch depending on how much space is available
- flex-shrink determines the ratio of how small an individual item will stretch depending on how much space is available
- flex-basis determines the ratio of how large or small an individual item will stretch/shrink depending on how much space is available

## Grid

- `display: grid`
- grid-template-columns how many columns
- grid-template-rows how many rows
- grid-row-start row for and grid item to start
- grid-column-start column for and grid item to start
- grid-row-end row for and grid item to end
- grid-column-end column for and grid item to start

- minmax(minimum, maximum)
- repeat(how many times, value)
