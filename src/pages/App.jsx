import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Galleries from "./Galleries";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chell-creates/" element={<Home />} />
        <Route path="/galleries/" element={<Galleries />} />
      </Routes>
    </Router>
  );
}

export default App;
