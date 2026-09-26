import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import { meta } from "../../content_option";
import neobrutalistMe from "../../assets/images/neo-brutalist-me.jpg";

export const AfterHours = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>After Hours | {meta.title}</title>
        <meta name="description" content="What I do when the sun goes down." />
      </Helmet>

      <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-10 py-12 flex flex-col gap-20">
        {/* ────────────────────────────────────────────── */}
        {/* HERO: Illustration + Intro */}
        {/* ────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* LEFT: Illustration */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center">
            <div className="absolute inset-0 bg-neo-yellow border-4 border-black dark:border-white shadow-neo dark:shadow-neo-dark transform -rotate-2 z-0"></div>

            <div className="relative z-10 w-full max-w-xl bg-white dark:bg-neo-white-dark border-4 border-black dark:border-white shadow-neo dark:shadow-neo-dark transform rotate-1 p-2">
              <img
                src={neobrutalistMe}
                alt="Late night coding"
                className="w-full h-auto object-cover border-4 border-black dark:border-white"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-neo-red text-white font-black text-sm px-3 py-1 border-4 border-black dark:border-white shadow-neo-sm dark:shadow-neo-sm-dark transform -rotate-3">
                LATE NIGHT VIBE CODER
              </div>
            </div>

            {/* Squiggle */}
            <div className="absolute -bottom-6 right-8 z-20">
              <svg
                width="60"
                height="24"
                viewBox="0 0 80 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 15C15 5 25 25 35 15C45 5 55 25 65 15C75 5 80 10 80 10"
                  stroke="#00E599"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* RIGHT: Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="bg-black text-white font-black text-sm uppercase tracking-widest px-3 py-1 border-4 border-black dark:border-white self-start mb-6 transform -rotate-1">
              After Hours
            </span>

            <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6 text-black dark:text-white">
              When the sun goes down,{" "}
              <span className="bg-neo-yellow border-4 border-black dark:border-white px-2 inline-block transform -rotate-1 text-black">
                the code comes alive.
              </span>
            </h1>

            <p className="text-lg font-medium leading-relaxed text-black dark:text-gray-300">
              Honestly, most of my best work happens when I have AI on my side.
              Kidding! I love the part where I can debug, found out the root
              cause of what is happening in my code and when it finally make
              sense then I go to schleep.
            </p>
          </div>
        </div>

        {/* ────────────────────────────────────────────── */}
        {/* CARDS: What I do after hours */}
        {/* ────────────────────────────────────────────── */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl lg:text-4xl font-black text-black dark:text-white">
            What happens when I'm{" "}
            <span className="text-neo-red">off the clock</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-neo-white-dark border-4 border-black dark:border-white p-6 shadow-neo dark:shadow-neo-dark">
              <div className="bg-neo-yellow border-4 border-black dark:border-white w-14 h-14 flex items-center justify-center font-black text-2xl mb-4 transform -rotate-3">
                01
              </div>
              <h3 className="text-xl font-black mb-2 text-black dark:text-white">
                Building Side Projects
              </h3>
              <p className="font-medium leading-relaxed text-black dark:text-gray-300">
                Small tools, weird experiments, and half-finished ideas all in
                the pursuit of learning something new.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-neo-white-dark border-4 border-black dark:border-white p-6 shadow-neo dark:shadow-neo-dark">
              <div className="bg-neo-blue border-4 border-black dark:border-white text-white w-14 h-14 flex items-center justify-center font-black text-2xl mb-4 transform rotate-3">
                02
              </div>
              <h3 className="text-xl font-black mb-2 text-black dark:text-white">
                Chasing Curiosity
              </h3>
              <p className="font-medium leading-relaxed text-black dark:text-gray-300">
                Whether it's a new framework, a new tech stack. I always find it
                so fun when I am learning something new.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-neo-white-dark border-4 border-black dark:border-white p-6 shadow-neo dark:shadow-neo-dark">
              <div className="bg-neo-red border-4 border-black dark:border-white text-white w-14 h-14 flex items-center justify-center font-black text-2xl mb-4 transform -rotate-2">
                03
              </div>
              <h3 className="text-xl font-black mb-2 text-black dark:text-white">
                Recharging
              </h3>
              <p className="font-medium leading-relaxed text-black dark:text-gray-300">
                Working Out, Video Games, Coffee, Playing Basketball and Hanging
                Out is what I most like to do when I am in my free time. This
                helps me to think as well and relax.
              </p>
            </div>
          </div>
        </div>

        {/* ────────────────────────────────────────────── */}
        {/* CTA */}
        {/* ────────────────────────────────────────────── */}
        <div className="bg-neo-yellow border-4 border-black dark:border-white shadow-neo dark:shadow-neo-dark p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 transform -rotate-1">
          <div>
            <h3 className="text-3xl lg:text-4xl font-black mb-2 text-black">
              Got a project in mind?
            </h3>
            <p className="font-bold text-lg text-black">
              Let's build something worth staying up late for.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-black text-white font-black text-xl border-4 border-black dark:border-white px-8 py-4 shadow-neo-sm dark:shadow-neo-sm-dark hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all duration-150 flex items-center gap-2 whitespace-nowrap"
          >
            Let's Talk <span className="text-2xl">→</span>
          </Link>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default AfterHours;
