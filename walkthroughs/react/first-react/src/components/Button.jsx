import { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    return (
      <button
        onClick={this.props.updateNums}
        className={`btn btn-${this.props.style || "primary"}`}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
