import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

// Import your profile picture here (adjust filename if necessary)
import profilePic from "../../assets/images/FB Dp.jpg";

export const About = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-10 py-12 flex flex-col lg:flex-row gap-16">
        {/* LEFT COLUMN: Portrait & Quick Bio */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start relative z-10">
          {/* Big Page Title */}
          <h1 className="text-6xl lg:text-7xl font-black mb-8 tracking-tighter text-black dark:text-white">
            About <span className="text-neo-red">Me.</span>
          </h1>

          {/* Rotated Image Frame */}
          <div className="relative w-full max-w-sm bg-neo-yellow border-4 border-black dark:border-white shadow-neo dark:shadow-neo-dark p-2 transform -rotate-2 mb-8">
            <img
              src={profilePic}
              alt="Don Florentino"
              className="w-full h-auto object-cover border-4 border-black dark:border-white grayscale contrast-125"
            />

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-neo-red text-white font-black text-xl px-4 py-2 border-4 border-black dark:border-white shadow-neo-sm dark:shadow-neo-sm-dark transform rotate-3">
              HELLO!
            </div>
          </div>

          {/* Quick Intro */}
          <p className="text-xl font-bold leading-relaxed text-center lg:text-left text-black dark:text-gray-300">
            {dataabout.title}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
            <a
              href="/#contact"
              className="bg-neo-blue text-white font-black text-lg border-4 border-black dark:border-white px-6 py-3 shadow-neo dark:shadow-neo-dark hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-neo-sm dark:hover:shadow-neo-sm-dark transition-all duration-150"
            >
              Let's Talk →
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-white dark:bg-neo-white-dark text-black dark:text-white font-black text-lg border-4 border-black dark:border-white px-6 py-3 shadow-neo dark:shadow-neo-dark hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-neo-sm dark:hover:shadow-neo-sm-dark transition-all duration-150"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Story, Skills, Experience, Services */}
        <div className="w-full lg:w-2/3 flex flex-col gap-10 relative z-10 pt-4">
          {/* 1. The Story Card */}
          <div className="bg-white dark:bg-neo-white-dark border-4 border-black dark:border-white p-6 lg:p-8 shadow-neo dark:shadow-neo-dark">
            <h2 className="text-3xl font-black mb-4 inline-block bg-neo-yellow border-2 border-black dark:border-white px-3 py-1 transform -rotate-1 text-black">
              My Story
            </h2>
            <div className="text-lg font-medium leading-relaxed space-y-4 text-black dark:text-gray-300">
              <p>{dataabout.aboutme}</p>
            </div>
          </div>

          {/* 2. Work Timeline Card */}
          <div className="bg-neo-bg dark:bg-neo-bg-dark border-4 border-black dark:border-white p-6 shadow-neo dark:shadow-neo-dark">
            <h2 className="text-2xl font-black mb-6 uppercase border-b-4 border-black dark:border-white pb-2 inline-block text-black dark:text-white">
              Work Timeline
            </h2>
            <div className="flex flex-col gap-6">
              {worktimeline.map((data, i) => (
                <div
                  key={i}
                  className="relative pl-6 border-l-4 border-black dark:border-white"
                >
                  <div className="absolute w-4 h-4 bg-neo-yellow border-2 border-black dark:border-white rounded-full -left-[10px] top-1"></div>
                  <h3 className="font-black text-lg text-black dark:text-white">
                    {data.jobtitle}
                  </h3>
                  <p className="font-bold text-sm text-gray-700 dark:text-gray-400">
                    {data.where}
                  </p>
                  <p className="text-sm font-medium mt-1 text-black dark:text-gray-300">
                    {data.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Grid for Skills & Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 3. Skills Card */}
            <div className="bg-neo-bg dark:bg-neo-bg-dark border-4 border-black dark:border-white p-6 shadow-neo dark:shadow-neo-dark">
              <h2 className="text-2xl font-black mb-6 uppercase border-b-4 border-black dark:border-white pb-2 inline-block text-black dark:text-white">
                Tech Stack
              </h2>
              <div className="flex flex-col gap-4">
                {skills.map((data, i) => (
                  <div key={i} className="w-full">
                    <div className="flex justify-between items-end mb-1">
                      <h3 className="font-bold text-sm uppercase text-black dark:text-white">
                        {data.name}
                      </h3>
                      <span className="font-black text-xs text-black dark:text-white">
                        {data.value}%
                      </span>
                    </div>
                    <div className="w-full bg-white dark:bg-neo-white-dark border-2 border-black dark:border-white h-6 p-1">
                      <div
                        className="bg-neo-blue h-full border border-black dark:border-white"
                        style={{ width: `${data.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Services Card */}
            <div className="bg-neo-bg dark:bg-neo-bg-dark border-4 border-black dark:border-white p-6 shadow-neo dark:shadow-neo-dark">
              <h2 className="text-2xl font-black mb-6 uppercase border-b-4 border-black dark:border-white pb-2 inline-block text-black dark:text-white">
                Services
              </h2>
              <div className="flex flex-col gap-6">
                {services.map((data, i) => (
                  <div
                    key={i}
                    className="border-l-4 border-black dark:border-white pl-4"
                  >
                    <h5 className="font-black text-lg text-black dark:text-white">
                      {data.title}
                    </h5>
                    <p className="text-sm font-medium mt-1 text-black dark:text-gray-300">
                      {data.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="absolute -bottom-10 right-0 z-0 opacity-20 dark:opacity-10 pointer-events-none">
            <svg
              width="200"
              height="200"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                className="text-black dark:text-white"
                strokeWidth="4"
                strokeDasharray="10 10"
              />
            </svg>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default About;
