import rwbImage from "./assets/images/rwb-project.jpg";
import pomodoroImage from "./assets/images/pomodoro-project.jpg";
import spendwiseImage from "./assets/images/spendwise-project.jpg";

const logotext = "Don";
const meta = {
  title: "Don Florentino",
  description:
    "I’m Don Florentino a Front-end Web Developer at Silver Goose 8 International",
};

const introdata = {
  title: "I’m Don!",
  animated: [
    {
      line1: "I'm passionate about",
      line2: "turning ideas into",
      line3: "functional experiences.",
    },
    {
      line1: "I create modern,",
      line2: "user-friendly websites",
      line3: "with clean designs.",
    },
    {
      line1: "I build web experiences",
      line2: "that are fast & accessible,",
      line3: "optimized for all devices.",
    },
  ],
  description:
    "Currently working as a Front-end Developer at Silver Goose 8 International. I'm passionate about all things web — whether it's building intuitive user interfaces or diving into back-end development to understand the full stack.",
  your_img_url:
    "https://images.unsplash.com/photo-1546146830-2cca9512c68e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
};

const dataabout = {
  title: "A little bit about my self",
  aboutme:
    "I am a Front-end Developer at Silver Goose 8 International. I'm interested in Web Development, Software Development. I'm currently learning Back-end Development, JS Libraries/FrameWorks, Three,js",
};
const worktimeline = [
  {
    jobtitle: "Web Developer",
    where: "Lloyds Financing Corporation",
    date: "2025",
  },
  {
    jobtitle: "Front-end Web Developer",
    where: "Silver Goose 8 International",
    date: "2025",
  },
];

const skills = [
  {
    name: "HTML",
    value: 90,
  },
  {
    name: "CSS",
    value: 80,
  },
  {
    name: "Javascript",
    value: 50,
  },
  {
    name: "React",
    value: 50,
  },
  {
    name: "NPM",
    value: "50",
  },
  {
    name: "PHP",
    value: "40",
  },
  {
    name: "CodeIgniter",
    value: "50",
  },
  {
    name: "Photoshop",
    value: "40",
  },
  {
    name: "CyberSecurity",
    value: "40",
  },
  {
    name: "Blockchain",
    value: "35",
  },
];

const services = [
  {
    title: "UI & UX",
    description:
      "If you guys want me to help you or collaborate on something, you should E-mail at aris.angelo.don@outlook.com",
  },
  {
    title: "Front-end Projects",
    description:
      "As a Front-end Developer, I would glady collaborate on projects that excites me and challenges me.",
  },
];

const dataportfolio = [
  {
    img: rwbImage,
    description:
      "My passion for making Cool Websites, produced this. A Car (RWB) Website.",
    link: "https://car-website-pearl-seven.vercel.app/",
  },
  {
    img: pomodoroImage,
    description:
      "Pomodoro Project that is a secret weapon for getting things done.",
    link: "https://pomodoro-project-lime.vercel.app/",
  },
  {
    img: spendwiseImage,
    description:
      "A Personal Budget Tracker, where you can note down your expenses, income, etc.",
    link: "https://spend-wise-7vbz.vercel.app/",
  },
];

const contactConfig = {
  YOUR_EMAIL: "aris.angelo.don@outlook.com",
  YOUR_FONE: "09563740075",
  description:
    "If you guys want to have a joint project or have a question about Programming, just let me know. Email & Phone number is provided. Take care as always. ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/TheArisAngelo",
  facebook: "https://web.facebook.com/TheArisAngelo/",
  linkedin: "https://www.linkedin.com/in/aris-angelo-don-florentino-100599313",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
