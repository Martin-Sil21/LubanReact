import React from "react";
import Landing from "./components/Landing/Landing";
import Oportunidades from "./components/Oportunidades/Oportunidades";
import AboutUs from "./components/AboutUs/AboutUs";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Landing />
      <Oportunidades />
      <AboutUs/>

      
    </div>
  );
}

export default App;
