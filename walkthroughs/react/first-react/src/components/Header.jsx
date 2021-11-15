import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <p>{this.props.message}</p>
        <input
          type="text"
          name="message"
          id="message"
          value={this.props.message}
          onChange={(e) => this.props.updateMessage(e.target.value)}
        />
      </header>
    );
  }
}

export default Header;
