import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme") || "light");

  const themeswitch = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    settheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    // Ensure the correct class is set on initial load
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="flex items-center">
      <button
        onClick={themeswitch}
        className="bg-neo-yellow border-4 border-black p-3 shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm transition-all text-black flex items-center justify-center"
        aria-label="Toggle Dark Mode"
      >
        {/* You can swap this icon for a sun/moon icon of your choice */}
        <WiMoonAltWaningCrescent4 size={24} />
      </button>
    </div>
  );
};

export default Themetoggle;