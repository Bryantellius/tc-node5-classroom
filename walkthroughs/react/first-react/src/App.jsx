/* eslint-disable eqeqeq */
import "./App.css";
import Title from "./components/Title";
import Game from "./components/Game";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
      hasUser: false,
    };

    this.searchUser = this.searchUser.bind(this);
  }

  searchUser(e) {
    e.preventDefault();
    let username = document.querySelector("#username").value;

    fetch("https://www.codewars.com/api/v1/users/" + username)
      .then((res) => res.json())
      .then((data) => this.setState({ user: data, hasUser: true }))
      .catch((err) => alert(err.message));
  }

  render() {
    return (
      <main className="App">
        <div className="mw-600">
          <Title />
          {/* <Game /> */}
          <form action="" onSubmit={this.searchUser}>
            <input
              type="text"
              name="username"
              placeholder="Bryantellius"
              id="username"
            />
            <button type="submit">Search</button>
          </form>
          <hr />
          {this.state.hasUser ? (
            <ul id="userDetails">
              <li id="username">{this.state.user.username}</li>
              <li id="honor">{this.state.user.honor}</li>
              <ul id="skills">
                {Object.keys(this.state.user.ranks.languages).map(
                  (lang, idx) => (
                    <li key={`${lang} + ${idx}`}>{lang}</li>
                  )
                )}
              </ul>
            </ul>
          ) : null}
        </div>
      </main>
    );
  }
}

export default App;
