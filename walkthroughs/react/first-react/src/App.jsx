import "./App.css";
import { Component } from "react";
import Header from "./components/Header";

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: "Hello World!",
    };

    this.updateMessage = this.updateMessage.bind(this);
  }

  updateMessage(value) {
    this.setState({
      message: value,
    });
  }

  render() {
    return (
      <div className="App">
        <Header
          message={this.state.message}
          updateMessage={this.updateMessage}
        />
      </div>
    );
  }
}

export default App;
