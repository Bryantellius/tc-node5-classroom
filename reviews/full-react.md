# Review 12/10/21: React

JavaScript library for building _single page applications_ (SPAs)

- meaning that only one html file is loaded, but the script (with the ReactDOM), dynammically renders different content to the screen
- UI is built with reusable _components_
- Limits server requests

## ReactDOM

Handles the _virtual DOM_, by parsing and constructing a DOM tree of our rendered JSX

Keeps the virtual DOM in-sync with the real DOM tree

```js
ReactDOM.render(<App />, document.getElementById("root"));
```

## Components

Functional

- functions that return JSX

```jsx
const App = (props) => {
  return <h1>{props.title}</h1>;
};
```

Class

- classes that can handle state, setState, and render JSX

```jsx
class App extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
```

## Props

Values passed from parent to child (_uni-directionally_) components, as property/value pairs on an object called `props`

```jsx
<App title="Hello World" />;

// Inside of the App component
// how to access within a class
this.props.title;
// or
// how to access within a function
props.title;
```

## State

Values that are persistent through the lifecycle of a component on the DOM, that, when updated, _cause a re-render_

Within a class:

```jsx
// in the constructor
// define state as
this.state = {
  someState: initialValue,
};

// update state with
this.setState({ someState: newValue });
```

Within a function:

```jsx
// define state with
let [someState, setSomeState] = useState(initialValue);

// update state with
setSomeState(newValue);
```

### useState

As seen above, the `useState` hook is used to provide state functionality and updates to a functional component.

Returns an array of two values that are de-structured into a variable containing the current state value, and a function for updating new state.

## Component Lifecycle

A component lifecycle consists of:

1. Creation
   - **class**, _constructor_ method called to create the component instance
   - **function**, the function is called
2. Render
   - **class**, _render_ method called to return JSX to the ReactDOM
   - **function**, function called to return JSX to the ReactDOM
3. Mount
   - **class**/**function**, the rendered component is inserted into the DOM tree
   - **class**, `componentDidMount` method is called
   - Uses:
     - fetching data
     - add event listeners
     - set timers/intervals

\* State is updated, causing a re-render

4. Update
   - **class**/**function**, the component is re-rendered and the DOM tree updated
   - **class**, `componentDidUpdate` method is called
   - Uses:
     - fetching data
     - updating UI
5. Unmount
   - **class**/**function**, the component is removed from the DOM tree
   - **class**, `componentWillUnmount` method is called
   - Uses:
     - cancelling pending fetch requests
     - remove event listeners
     - cancel timers/intervals

### useEffect

Receives a callback function will combined logic for `componentDidMount`, `componentDidUpdate` and `componentWillUnmount`

Second parameter can be an array (_dependency array_) of values that checked and dependent for re-renders

```jsx
useEffect(() => {
  fetchData();
  return function cleanup() {
    abortController.abort();
    element.removeEventListener("keyup", enterSubmit);
  };
}, [someState]);

// for the dependency array, if someState has changed since the last render, the callback function is executed. Otherwise, the callback is skipped for the component update
```
