import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
