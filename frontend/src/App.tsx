import React from "react";
import { Route, Routes } from "react-router-dom";
import { root } from "./config/routes";
import Home from "./pages/Home";
import Template from "./pages/Template";

const App: React.FC = () => {
  return (
  <Routes>
    <Route path={root["Home"].path} element={<Home />} />
    <Route path={root["Template"].path} element={<Template />} /> 
  </Routes>
  );
};

export default App;