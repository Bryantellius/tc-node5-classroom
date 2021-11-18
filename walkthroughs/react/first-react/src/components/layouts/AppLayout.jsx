import Button from "../common/Button";
import { Fragment } from "react";

const AppLayout = (props) => {
  return (
    <main className="App">
      <nav>
        <ul>
          <li>Home</li>
          <li>Game</li>
          <li>
            {!props.isLoggedIn ? (
              <input
                aria-label="Enter your Codewars username"
                type="text"
                name="username"
                id="username"
                placeholder="Enter your Codewars Username.."
                title="Enter your Codewars Username"
                required
              />
            ) : null}
          </li>
          <li>
            <Button type="submit" onClick={props.toggleLogin}>
              {props.isLoggedIn ? "Signout" : "Login"}
            </Button>
          </li>
        </ul>
      </nav>
      <div className="mw-600">{props.children}</div>
    </main>
  );
};

export default AppLayout;
