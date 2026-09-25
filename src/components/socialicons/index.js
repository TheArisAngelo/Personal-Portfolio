import React from "react";
import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { socialprofils } from "../../content_option";

const Socialicons = () => {
  // Define the icons array mapping to your content_option keys
  const socials = [
    {
      icon: <FaGithub size={22} />,
      link: socialprofils.github,
      name: "Github",
    },
    {
      icon: <FaFacebookF size={22} />,
      link: socialprofils.facebook,
      name: "Facebook",
    },
    {
      icon: <FaLinkedinIn size={22} />,
      link: socialprofils.linkedin,
      name: "LinkedIn",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col items-center gap-4 fixed left-10 top-1/2 -translate-y-1/2 z-30">
      <div className="border-l-4 border-black dark:border-white h-16"></div>

      <div className="flex flex-col gap-2 border-4 border-black dark:border-white bg-white dark:bg-neo-white-dark p-1 shadow-neo-sm dark:shadow-neo-sm-dark">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            aria-label={social.name}
            className="bg-neo-bg dark:bg-neo-bg-dark text-black dark:text-white p-3 border-2 border-black dark:border-white hover:bg-neo-yellow hover:text-black hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-neo-sm transition-all"
          >
            {social.icon}
          </a>
        ))}
      </div>

      <div className="border-l-4 border-black dark:border-white h-16"></div>
      <span className="font-black text-sm tracking-widest uppercase whitespace-nowrap -rotate-90 origin-center translate-y-2 text-black dark:text-white">
      </span>
    </div>
  );
};

export default Socialicons;
