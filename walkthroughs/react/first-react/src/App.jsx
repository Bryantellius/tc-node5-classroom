import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.title = "Rendering Lists";
    this.state = {
      count: 1,
      list: [1, 2, 3, 4, 5],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  updateNum = (idx) => {
    let newList = this.state.list.map((num, i) => (i == idx ? num + 1 : num));
    this.setState({ list: newList });
  };

  render() {
    return (
      <main className="App">
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>Increment Count</button>
        <ul>
          {this.state.list.map((num, idx) => {
            return (
              <li key={`key${num}+${idx}`} onClick={() => this.updateNum(idx)}>
                {num}
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default App;
