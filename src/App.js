import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Hire from "./Hire/Hire";
import Projects from "./ProjectT/projects";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hire" element={<Hire />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default App;
