# Review 10/22/21: HTML and CSS

## HTML ID and Class

- Id's are unique, one per element
- Class names can be shared and repeated across any element

## Using/Linking Styles

- Inline via `style` attribute on html elements
- Embedded/internal, use `style` element in `head`
- External css file, use `link` element in `head`

## Anatomy of a CSS Ruleset

```css
selector {
  property: value; /* declaration */
  property: value;
  property: value;
  property: value;
}
```

## Selectors

### Simple Selectors

Specificity Order:

1. Id Selector, e.g.. `#id { ... }`
2. Class Selector, e.g. `.classname { ... }`
3. Tag Selector, e.g. `p { ... }`
4. Universal Selector, e.g. `* { ... }`

### Grouping Selectors

Group multiple selectors with commas:

```css
h1,
h2,
.class,
#id,
* {
  ...;
}
```

## Box Model

- Elements are represeneted as _boxes_
- Inside-out:
  1. Content
  2. Padding
  3. Border
  4. Margin

## Properties

| name             | desc                                           |
| ---------------- | ---------------------------------------------- |
| display          | changes the display of elements                |
| position         | changes the position of elements               |
| top              | changes the position of elements               |
| right            | changes the position of elements               |
| bottom           | changes the position of elements               |
| left             | changes the position of elements               |
| color            | text color                                     |
| background-color | element background color                       |
| background-image | element background image, `url(...)`           |
| font-size        | text size                                      |
| font-family      | font type                                      |
| text-align       | text alignment, `start, center, end`           |
| text-shadow      | text shadow (aka smeared eyeliner)             |
| opacity          | transparency of an element, from 0 to 1        |
| width            | element width                                  |
| min-width        | element minimum width                          |
| max-width        | element maximum width                          |
| height           | element height                                 |
| min-height       | element minimum height                         |
| max-height       | element maximum height                         |
| padding          | shorthand padding for top, right, bottom, left |
| margin           | shorthand margin for top, right, bottom, left  |
| border           | shorthand border for top, right, bottom, left  |

## Linking External CSS

```html
<head>
  <link rel="stylesheet" href="pathToFile.css" />
</head>
```
