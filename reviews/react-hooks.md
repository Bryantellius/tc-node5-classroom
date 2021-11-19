# Review 11/19/21: React Hooks

- Used in functional components
- Start with `use` conventionally

## `useState`

- Used in place of `this.state` and `this.setState()`
- Returns an array (tuple, aka array with two values) that contains the state value and a function to update that state

Ex:

```js
let [title, setTitle] = useState("Initial Value");
```

## `useEffect`

- Used in place of lifecycle methods (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`)
- Takes in a callback, calls on initial render, and each re-render. Also, on the unmounting of a component
- Dependency Array adds a dependency for when we should call the callback function after state changes
  - Either it's empty and only runs the callback function on mount and unmount stages
  - Or includes state values to check for changes, and runs the callback for mount, update or unmount stages

Ex:

```js
useEffect(() => {
  // do something on initial render or update
  return () => {
    // component cleanup
  };
}, [title]);
```
