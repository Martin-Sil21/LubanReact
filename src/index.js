import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Landing from "./components/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import AboutUs from "./components/AboutUs/AboutUs";
import Oportunidades from "./components/Oportunidades/Oportunidades";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import Empleos from "./components/Empleos/Empleos";
import Profile from "./components/Profile/Profile";
import Talentos from "./components/Talentos/Talentos";
import Cards from "./components/Cards/Cards";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Oportunidades" element={<Oportunidades />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Empleos" element={<Empleos />} />
        <Route path="/Empleos" element={<Talentos />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>

      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
