/* eslint-disable eqeqeq */
import "./App.css";
import Title from "./components/Title";
import Game from "./components/Game";
import { Component } from "react";

const App = () => {
  return (
    <main className="App">
      <div className="mw-600">
        <Title />
        <Game />
      </div>
    </main>
  );
};

export default App;
