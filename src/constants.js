// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import nativeLogo from './assets/tech_logo/react-native.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import designLogo from './assets/tech_logo/responsive-design.png';
import webLogo from './assets/tech_logo/web.png';
import codeLogo from './assets/tech_logo/clean-code.png';
import scalabilityLogo from './assets/tech_logo/scalability.png';
import javaLogo from './assets/tech_logo/java.png';
import phpLogo from './assets/tech_logo/php.png';
import chromeLogo from './assets/tech_logo/chrome.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import pythonLogo from './assets/tech_logo/python.png';
import datascienceLogo from './assets/tech_logo/donut-chart.png';

// Experience Section Logo's
import egssLogo from './assets/company_logo/egss.png';
import webuniLogo from './assets/company_logo/webuni.png';
import jspLogo from './assets/company_logo/jsp.png';
import iciciLogo from './assets/company_logo/bank.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';
import vps2Logo from './assets/education_logo/favicon.png';


// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';


export const SkillsInfo = [
  {
    title: 'Frontend Technologies',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'React Native', logo: nativeLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend & Other Technologies',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Core php', logo: phpLogo },
    ],
  },
  {
    title: 'Practices',
    skills: [
      { name: 'Responsive Design', logo: designLogo },
      { name: 'Cross-Browser Compatibility', logo: webLogo },
      { name: 'Clean Code', logo: codeLogo },
      { name: 'Scalable UI', logo: scalabilityLogo },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Chrome DevTools', logo: chromeLogo},
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
  {
    title: 'AI/ML Exposure',
    skills: [
      { name: 'Data Science', logo: datascienceLogo },
      { name: 'Python basics', logo:  pythonLogo},
    ],
  },
];

  export const experiences = [
    {
      id: 1,
      img: egssLogo,
      role: "UI Developer",
      company: "E Global Soft Solutions",
      date: "June 2024 - July 2025",
      desc: "Proficient UI Developer skilled in creating interactive, user-friendly, and responsive web interfaces. Collaborated with product managers and backend teams to deliver scalable features while ensuring clean, maintainable code. Focused on modern frameworks, cross-browser compatibility, and frontend performance optimization using best practices in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Angular JS",
        "Node JS",
        "Tailwind CSS",
        "Laravel",
        "Core php",
        "Bootstrap",
      ],
    },
    {
      id: 2,
      img: webuniLogo,
      role: "Web Developer",
      company: "Web Universals",
      date: "January 2023 - May 2024",
      desc: "Accomplished Web Developer specializing in front-end technologies, skilled in building visually appealing, responsive, and user-focused web interfaces. Proficient in React.js, delivering seamless cross-device experiences while optimizing performance and usability in modern web applications.",
      skills: [
        "ReactJS",
        "JavaScript",
        "HTML",
        "CSS",
        "Core PHP",
        "Bootstrap",
      ],
    },
    {
      id: 3,
      img: jspLogo,
      role: "Full Stack Developer Trainee",
      company: "Spiders",
      date: "July 2022 - December 2022",
      desc: "Committed Full Stack Developer Trainee with strong expertise in both front-end and back-end technologies, dedicated to building efficient, scalable, and user-friendly web applications while continuously enhancing skills through hands-on development.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "ReactJS",
        "Java",
        "MySQL",
      ],
    },
    {
      id: 4,
      img: iciciLogo,
      role: "Assistant Manager",
      company: "ICICI Bank Limited",
      date: "March 2021 - March 2022",
      desc: "Efficiently managed daily branch operations, ensuring smooth processes and optimal performance while resolving customer inquiries and complaints promptly to maintain high levels of client satisfaction.",
      skills: [
        "Customer Service & Support",
        "Process Optimization",
        "Problem-Solving",
        "Team Collaboration",
        "Time Management",
      ],
    },
  ];
  
  export const education = [
    {
      id: 1,
      img: glaLogo,
      school: "STEP-HBTI",
      date: "July 2019 - November 2021",
      grade: "78%",
      desc: "Postgraduate in Management (PGDM) with dual specialization in IT and Marketing, skilled in combining technical expertise with strategic marketing knowledge to drive business growth and innovation. Proficient in leveraging technology to develop data-driven strategies, enhance customer engagement, and optimize operations while staying aligned with evolving industry trends.",
      degree: "PGDM (Marketing and IT)",
    },
    {
      id: 2,
      img: bsaLogo,
      school: "BBDEC, Lucknow",
      date: "August 2014 - June 2018",
      grade: "67.73%",
      desc: "Bachelor of Technology (B.Tech) graduate in Computer Science, with a strong foundation in software development, programming, and problem-solving. Skilled in applying technical knowledge to design and develop efficient solutions, with expertise in modern technologies and frameworks, while staying updated with emerging trends in the field of computer science.",
      degree: "Bachelor of Technology - B.tech (Computer Science)",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "BGIC, Lucknow",
      date: "July 2011 - June 2013",
      grade: "76%",
      desc: "Physics,Chemistry,Maths",
      degree: "(XII) - PCM",
    },
    {
      id: 4,
      img: vps2Logo,
      school: "SMIC, Lucknow",
      date: "July 2010 - June 2011",
      grade: "73.5%",
      desc: "Science",
      degree: "(X), Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "customercarehelp24X7",
      description:
        "Customer support services",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      webapp: "https://customercarehelp24x7.in/",
    },
    {
      id: 1,
      title: "Feenix Laqnguage Solution",
      description:
        "A language translation services company.",
      image: csprepLogo,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap","Php"],
      webapp: "https://www.feenixlanguage.com/",
    },
    {
      id: 2,
      title: "Jimz Estate LLC",
      description:
        "A real-estate company website.",
      image: movierecLogo,
      tags: ["HTML", "CSS", "JavaScript", "Laravel"],
      webapp: "https://jimzestatellc.com/",
    },
    {
      id: 3,
      title: "4SPINZ",
      description:
        "A visually appealing and dynamic website for a vehicle services company",
      image: npmLogo,
      tags: ["HTML", "CSS", "JavaScript", "Laravel"],
      webapp: "https://4spinz.com/",
    },
    {
      id: 4,
      title: "Jaya Madhava Trust",
      description:
        "A foundation for helping schools.",
      image: taskremLogo,
      tags: ["JavaScript", "Bootstrap", "HTML", "CSS","Php"],
      webapp: "https://vidya-pragathi.org/",
    },
    {
      id: 5,
      title: "Winterfell Investments",
      description:
        "The website for investment solutions company.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap","Php"],
      webapp: "https://winterfell-investments.netlify.app/",
    },
  ];  