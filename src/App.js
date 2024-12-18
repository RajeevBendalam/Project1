import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AskQuestion from "./pages/AskQuestion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ask-question" element={<AskQuestion />} />
      </Routes>
    </Router>
  );
}

export default App;
