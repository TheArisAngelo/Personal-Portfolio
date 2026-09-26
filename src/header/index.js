import React, { useState } from "react";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <>
      {/* HEADER BAR - Sits at the top of everything (z-[100]) */}
      <header className="relative z-[100] flex items-center justify-between p-6 lg:p-8">
        {/* LOGO */}
        <Link
          to="/"
          onClick={() => isActive && handleToggle()} // Close menu if logo is clicked
          className="bg-neo-yellow border-4 border-black dark:border-white px-6 py-2 shadow-neo dark:shadow-neo-dark transform -rotate-3 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm dark:hover:shadow-neo-sm-dark transition-all"
        >
          <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter text-black">
            {logotext}
          </h1>
        </Link>

        {/* RIGHT CONTROLS */}
        <div className="flex items-center gap-3">
          <Themetoggle />

          {/* Menu Button */}
          <button
            onClick={handleToggle}
            className="bg-neo-yellow border-4 border-black dark:border-white p-3 shadow-neo dark:shadow-neo-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm dark:hover:shadow-neo-sm-dark transition-all text-black"
          >
            {isActive ? <VscClose size={24} /> : <VscGrabber size={24} />}
          </button>
        </div>
      </header>

      {/* FULL SCREEN MENU OVERLAY - Sits below header (z-[90]) but above page content */}
      <div
        className={`fixed inset-0 z-[90] bg-neo-bg dark:bg-neo-bg-dark transition-transform duration-300 ease-in-out ${
          isActive ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Add padding-top so links don't overlap the header logo */}
        <div className="flex flex-col h-full pt-28 lg:pt-32 pb-10 px-6 lg:px-20">
          {/* MENU LINKS */}
          <ul className="flex flex-col gap-6 list-none m-0 p-0">
            {[
              { name: "Home", path: "/" },
              { name: "Portfolio", path: "/portfolio" },
              { name: "About", path: "/about" },
              { name: "After Hours", path: "/afterhours" },
              { name: "Contact", path: "/contact" },
            ].map((item, index) => (
              <li key={index} className="w-full">
                <Link
                  onClick={handleToggle}
                  to={item.path}
                  className="inline-block bg-white dark:bg-neo-white-dark text-black dark:text-white border-4 border-black dark:border-white px-6 py-3 shadow-neo dark:shadow-neo-dark text-4xl lg:text-6xl font-black uppercase hover:bg-neo-yellow hover:text-black hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-neo-sm dark:hover:shadow-neo-sm-dark transition-all"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* MENU FOOTER (SOCIALS) */}
          <div className="mt-auto flex flex-col sm:flex-row justify-between items-end sm:items-center gap-6 pt-10 border-t-4 border-black dark:border-white">
            <div className="flex flex-wrap gap-4">
              {Object.entries(socialprofils).map(([key, value]) => (
                <a
                  key={key}
                  href={value}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-neo-blue text-white border-4 border-black dark:border-white px-4 py-2 font-bold shadow-neo-sm dark:shadow-neo-sm-dark hover:bg-neo-yellow hover:text-black transition-colors"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
              ))}
            </div>
            <p className="font-bold text-lg text-black dark:text-white">
              Copyright © {logotext}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headermain;
