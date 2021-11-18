/* eslint-disable eqeqeq */
import "./App.css";
import AppLayout from "./components/layouts/AppLayout";
import Title from "./components/Title";
import Game from "./components/Game";
import Codewars from "./components/Codewars";
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let [username, setUsername] = useState(null);

  function toggleLogin() {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      setUsername(null);
    } else {
      let usernameInput = document.querySelector("#username");

      if (!usernameInput.value.trim()) {
        alert("Invalid Username. Try again.");
        usernameInput.classList.add("invalid");
      } else {
        usernameInput.classList.remove("invalid");
        setUsername(usernameInput.value);
        setIsLoggedIn(true);
      }
    }
  }

  return (
    <AppLayout isLoggedIn={isLoggedIn} toggleLogin={toggleLogin}>
      <Title />
      <Codewars username={username} />
      {/* <Game /> */}
    </AppLayout>
  );
};

export default App;
