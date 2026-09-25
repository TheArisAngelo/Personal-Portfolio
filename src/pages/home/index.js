import React from "react";

const Home = () => {
  return (
    <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-10 py-12 flex flex-col lg:flex-row gap-12">
      {/* LEFT SIDE: Text & Buttons */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-10">
        {/* Headline */}
        <h1 className="text-5xl lg:text-6xl font-black mb-6 tracking-tight flex items-center gap-4 text-black dark:text-white">
          I'm Don! ...
        </h1>

        {/* Stacked Headline Blocks */}
        <div className="flex flex-col gap-3 mb-8">
          <div className="bg-neo-yellow border-4 border-black dark:border-white px-4 py-2 shadow-neo dark:shadow-neo-dark self-start transform -rotate-1">
            <h2 className="text-3xl lg:text-4xl font-black text-black">
              I'm passionate about
            </h2>
          </div>
          <div className="bg-white dark:bg-neo-white-dark border-4 border-black dark:border-white px-4 py-2 shadow-neo dark:shadow-neo-dark self-start ml-4 transform rotate-1">
            <h2 className="text-3xl lg:text-4xl font-black text-black dark:text-white">
              turning ideas into
            </h2>
          </div>
          <div className="bg-neo-blue border-4 border-black dark:border-white px-4 py-2 shadow-neo dark:shadow-neo-dark self-start ml-8">
            <h2 className="text-3xl lg:text-4xl font-black text-white">
              functional experiences.
            </h2>
          </div>
        </div>

        {/* Bio Text */}
        <p className="text-lg font-medium leading-relaxed mb-10 max-w-lg text-black dark:text-gray-300">
          ...
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-6 items-center">
          <button className="...">
            My Portfolio <span className="text-2xl">→</span>
          </button>
          <button className="bg-white dark:bg-neo-white-dark text-black dark:text-white border-4 border-black dark:border-white px-8 py-4 shadow-neo dark:shadow-neo-dark hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-neo-sm dark:hover:shadow-neo-sm-dark transition-all duration-150 flex items-center gap-2">
            Contact Me <span className="text-2xl">→</span>
          </button>
        </div>

        <div className="mt-4">
          <svg
            width="80"
            height="30"
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

      {/* RIGHT SIDE: Image Collage */}
      <div className="w-full lg:w-1/2 relative flex justify-center items-center mt-12 lg:mt-0">
        {/* Blue Background Shape */}
        <div className="absolute inset-0 bg-neo-blue border-4 border-black shadow-neo transform rotate-2 z-0"></div>

        {/* Yellow Image Frame */}
        <div className="relative z-10 w-full max-w-xl bg-neo-yellow border-4 border-black shadow-neo transform -rotate-1 p-2">
          {/* NOTE: Replace this placeholder image with your actual image from src/assets/images */}
          {/* Example: src={require('../../assets/images/react-portfolio.png')} */}
          <img
            src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Desk Setup"
            className="w-full h-auto object-cover border-4 border-black grayscale contrast-125"
          />

          {/* Overlapping Text Box */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black text-white font-black text-2xl px-6 py-2 border-4 border-white shadow-[4px_4px_0px_0px_#000] whitespace-nowrap">
            DEVELOPER
          </div>
        </div>

        {/* Decorative Red Starburst */}
        <div className="absolute top-0 right-0 z-20 transform translate-x-1/4 -translate-y-1/4">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 0L61.2257 25.2762L88.3022 15.4508L75.2762 40.0000L97.5528 55.2786L70.7107 62.1320L75.2762 90.4508L50 75.0000L24.7238 90.4508L29.2893 62.1320L2.44717 55.2786L24.7238 40.0000L11.6978 15.4508L38.7743 25.2762L50 0Z"
              fill="#FF4B4B"
              stroke="black"
              strokeWidth="4"
            />
          </svg>
        </div>

        {/* Decorative Green Squiggle */}
        <div className="absolute bottom-0 left-0 z-20 transform -translate-x-1/4 translate-y-1/4">
          <svg
            width="80"
            height="30"
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
    </div>
  );
};

export default Home;
