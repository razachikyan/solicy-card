import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Instructions } from "./components/Instructions/Instructions";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Instructions />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
