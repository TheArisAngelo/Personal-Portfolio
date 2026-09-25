import React from "react";
import Headermain from "../header";
import Socialicons from "../components/socialicons";
import Home from "../pages/home";

function App() {
  return (
    <div className="bg-neo-bg dark:bg-neo-bg-dark text-black dark:text-white min-h-screen font-sans overflow-x-hidden transition-colors duration-300">
      <Headermain />
      <Socialicons />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
