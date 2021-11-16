# Review 11/16/21: React, State and Props

- React is a JS library that allows you to create a dynammic SPA (_Single Page Application_)
- Reduced redundancy with reusable components and DOM optimal manipulation
- JavaScript Library, includes **JSX** (JavaScript XML) that is parsed by the ReactDOM
- JSX resembles HTML, but it is not. JS protected keywords cannot be used where they would be applied in HTML (e.g. `class`)

## Components

### Class

- `render()` method that returns JSX

### Functional

- Return JSX

## State

- Data that should persist throughout the lifecycle of a component (including re-renders), that when updated, triggers a re-render for the component(s) to which the state belongs

```jsx
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: "Initial Title",
      count: 1,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <main>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>Increment Count</button>
      </main>
    );
  }
}

export default App;
```

## Props

- Properties (data) passed from parent to child components
  - Object with name/value pairs
