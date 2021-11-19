import { NavLink } from "react-router-dom";

const AppLayout = (props) => {
  const activeLinkStyle = ({ isActive }) => (isActive ? "active" : null);

  return (
    <main className="App">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={activeLinkStyle}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="game"
              className={activeLinkStyle}
            >
              Game
            </NavLink>
          </li>
          <li>
            <NavLink
              to="codewars"
              className={activeLinkStyle}
            >
              Bryantellius
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="mw-600">{props.children}</div>
    </main>
  );
};

export default AppLayout;
