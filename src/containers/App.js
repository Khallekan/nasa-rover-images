// import { useState } from "react";
import Header from "../components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Spirit from "./Spirit";
import Opportunity from "./Opportunity";
import Curiosity from "./Curiosity";
import "../styles/App.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path={`curiosity/*`} element={<Curiosity />} />
        <Route path={`spirit/*`} element={<Spirit />} />
        <Route path={`opportunity/*`} element={<Opportunity />} />
        <Route path={`*`} element={<div>Page does not exist</div>} />
      </Routes>
    </div>
  );
}

export default App;
