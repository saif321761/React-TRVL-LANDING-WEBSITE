import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Services from "./components/Services";
import Products from "./components/Products";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/services" Component={Services} />
          <Route path="/products" Component={Products} />
          <Route path="/sign-up" Component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
