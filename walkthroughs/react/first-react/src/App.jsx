/* eslint-disable eqeqeq */
import "./App.css";
import AppLayout from "./components/layouts/AppLayout";
import Title from "./components/Title";
import Game from "./components/Game";
import Codewars from "./components/Codewars";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Title value="React.js" />} />
          <Route path="game" element={<Game />} />
          <Route
            path="codewars"
            element={<Codewars username="Bryantellius" />}
          />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
