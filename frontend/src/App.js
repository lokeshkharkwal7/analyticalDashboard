import React from "react";
import Home from "./components/home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import StartPage from "./components/start";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
