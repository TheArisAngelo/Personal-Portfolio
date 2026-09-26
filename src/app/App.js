import React from "react";
import { Routes, Route } from "react-router-dom";
import Headermain from "../header";
import Socialicons from "../components/socialicons";
import Home from "../pages/home";
import { About } from "../pages/about";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { AfterHours } from "../pages/afterhours";

function App() {
  return (
    <div className="bg-neo-bg dark:bg-neo-bg-dark text-black dark:text-white min-h-screen font-sans overflow-x-hidden transition-colors duration-300">
      <Headermain />
      <Socialicons />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/afterhours" element={<AfterHours />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
