# Review 10/21/21: HTML

> HyperText Markup Language

- Markup language, _structure and content_ of a website
- Easy to use, _loosely written_
- ~180 elements as of HTML5

## Block vs Inline Elements

- Block level elements take up the full available space on a row
- Inline level elements only take up the space needed to render the element

## Anatomy of an HTML Element

- Opening and closing\* tags, `<tag></tag>`
- Attributes are in the opening tag, after the tagname, `<tag attibute="value"></tag>`
- Inner HTML, child nodes

## Attribute

> Defines a behavior or property of an html element

- Ex: `name="value"`

| attribute | desc                                                                     |
| --------- | ------------------------------------------------------------------------ |
| title     | title of an element, creates a tooltip                                   |
| href      | hypertext reference for anchor tags, links                               |
| src       | hypertext reference for loading images                                   |
| alt       | alternative text description for images, important for web accessibility |

## Example

```html
<html lang="en">
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <div>
      <h1>This is the heading</h1>
    </div>
  </body>
</html>
```

## Elements

| element    | meaning                                                                |
| ---------- | ---------------------------------------------------------------------- |
| p          | paragraph                                                              |
| ul         | unordered list                                                         |
| ol         | ordered list                                                           |
| li         | list item                                                              |
| title      | title of the document                                                  |
| meta       | usually describes the document, typically has _name_ and _content_     |
| br         | line break                                                             |
| em         | italics (emphasis)                                                     |
| i          | italics (emphasis)                                                     |
| strong     | bold (important)                                                       |
| b          | bold (important)                                                       |
| u          | underlined                                                             |
| s          | strikethrough                                                          |
| small      | fine print                                                             |
| div        | generic container                                                      |
| img        | renders images                                                         |
| video      | renders videos                                                         |
| a          | links                                                                  |
| main       | main content of a page                                                 |
| section    | a section of the main content of a page                                |
| aside      | ancillary content to the main content                                  |
| article    | article content container                                              |
| header     | page header information, e.g. site logo, nav, etc                      |
| footer     | page footer information, e.g. site links, company desc, copyright, etc |
| span       | inline container                                                       |
| h1         | heading 1, one per page                                                |
| h2         | heading 2                                                              |
| h3         | heading 3                                                              |
| h4         | heading 4                                                              |
| h5         | heading 5                                                              |
| h6         | heading 6                                                              |
| iframe     | embedding multi-media                                                  |
| button     | clickable button                                                       |
| form       | webforms                                                               |
| blockquote | multi-line quotes                                                      |
| q          | single-line quotes                                                     |
| table      | table layouts                                                          |
| script     | loads/runs JavaScript scripts                                          |
| style      | runs embedded CSS                                                      |
| link       | loads/runs external CSS stylesheets                                    |
| figure     | figure container                                                       |
| figcaption | figure text/caption                                                    |
