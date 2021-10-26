# Review 10/26/21: CSS Responsive Design

## Responsive Units

- vw - viewport width, percentage of browser window's viewport width
- vh - viewport height, percentage of browser window's viewport height
- vmax - viewport length maximum to base percentage
- vmin - viewport length minimum to base percentage
- % - percentage of the containing space
- fr - fraction units, ratio of container space
- em - ratio of the inherited font size
- rem - ratio of the root font size

## Media Queries

- Media queries will determine css rulesets to be applied depending on a conditional value

```css
@media only screen and (min-width: 768px) {
  main {
    padding: 4rem;
  }
}
```
