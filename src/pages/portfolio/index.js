import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio | {meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-10 py-12">
        {/* Page Header */}
        <div className="flex flex-col mb-12">
          <h1 className="text-6xl lg:text-7xl font-black tracking-tighter inline-block bg-neo-yellow border-4 border-black dark:border-white px-6 py-2 shadow-neo dark:shadow-neo-dark self-start transform -rotate-1 text-black">
            Portfolio<span className="text-neo-red">.</span>
          </h1>
          <p className="mt-6 text-xl font-bold max-w-2xl text-black dark:text-gray-300">
            A collection of projects I've built, from client websites to
            experimental side projects.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {dataportfolio.map((data, i) => (
            <div
              key={i}
              className="group relative flex flex-col bg-white dark:bg-neo-white-dark border-4 border-black dark:border-white shadow-neo dark:shadow-neo-dark hover:-translate-y-2 hover:shadow-neo-lg dark:hover:shadow-neo-lg transition-all duration-200"
            >
              {/* Image Container */}
              <div className="relative w-full h-56 border-b-4 border-black dark:border-white overflow-hidden bg-gray-200 dark:bg-gray-800">
                <img
                  src={data.img}
                  alt={data.description || "Project Image"}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-300"
                />
                {/* Floating Number Badge */}
                <div className="absolute top-4 right-4 bg-neo-red text-white font-black text-lg w-10 h-10 flex items-center justify-center border-4 border-black dark:border-white shadow-neo-sm dark:shadow-neo-sm-dark transform rotate-3">
                  {i + 1}
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-1 p-6">
                <p className="text-base font-bold leading-relaxed mb-6 flex-1 text-black dark:text-gray-300">
                  {data.description}
                </p>

                {/* Action Button */}
                <a
                  href={data.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-neo-yellow text-black font-black text-lg border-4 border-black dark:border-white px-6 py-3 shadow-neo-sm dark:shadow-neo-sm-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Portfolio;
