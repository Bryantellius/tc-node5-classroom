import { NavLink } from "react-router-dom";
import { routes } from "../../utils/data";

const AppLayout = (props) => {
  const activeLinkStyle = ({ isActive }) => (isActive ? "active link" : "link");

  return (
    <main className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={activeLinkStyle}>
              HOME
            </NavLink>
          </li>
          {Object.values(routes).map((route, idx) => {
            return (
              <li key={route.endpoint + idx}>
                <NavLink to={route.endpoint} className={activeLinkStyle}>
                  {route.endpoint.toUpperCase()}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mw-600">{props.children}</div>
    </main>
  );
};

export default AppLayout;
