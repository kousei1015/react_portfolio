import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Nabvar from "./component/Navbar/Navbar";
import About from "./component/About/About";
import Hero from "./component/Hero/Hero";
import Works from "./component/Woks/Works";

function App() {
  return <div className={styles.theme}>
    <Hero />
    <About />
    <Works />
  </div>;
}

export default App;
