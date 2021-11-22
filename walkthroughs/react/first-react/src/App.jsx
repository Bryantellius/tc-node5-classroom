/* eslint-disable eqeqeq */
import "./App.css";
import AppLayout from "./components/layouts/AppLayout";
import Title from "./components/Title";
import ListIndex from "./components/ListIndex";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./utils/data";
import SingleView from "./components/SingleView";

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Title value="React Routing" />} />
          {Object.values(routes).map((route, idx) => {
            return (
              <Route
                key={idx + route.endpoint}
                path={route.endpoint}
                element={
                  <ListIndex endpoint={route.endpoint} title={route.title} />
                }
              >
                <Route path=":id" element={<SingleView />} />
              </Route>
            );
          })}
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
