import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    google,
    java,
    lifeline,
    carrent,
    jobit,
    tripguide,
    threejs,
    contact,
    employee,
    hospital,
   
    
    
  } from "../assets";
  
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Mobile Application Developer",
      icon: mobile,
    },
   
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
   
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
   
    {
      name: "java",
      icon: java,
    }
   
    
  ];
  
  const experiences = [
    {
      title: "Virtual Software Developer Intern",
      company_name: "Google",
       icon: google,
      iconBg: "#383E56",
      date: "March 2022 - Jun 2022",
      points: [
        "Developed Mobile Application using Kotlin .",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Mozaic",
      
      iconBg: "#383E56",
      date: "March 2023 - May 2023",
      points: [
        
        "Developed Contact us page in Wordpress website",
        "Fixing bugs and broken links.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
    
  ];
  
  
  const projects = [
    {
      name: "Contact Us List React Application",
      description:
        "Ract app that allows user to create new contact and save. This app allows to update and delete and with the help of database. I developed this react app using JSON api to call APIs. I have used MySql Databse to data user creates and to perfporm other CRUD function. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Mysql",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: contact,
      source_code_link: " https://github.com/kaylikecoding",
    },
    {
      name: "Aged-care Management System ",
      description:
        " Aged care management system website (DBMS healthcare portal): ACMS is user-side website which will help aged care staff to maintain patient’s health by recording patient's records, meals time and can also book appointment with GP. (WordPress, php, SQL database)",
      tags: [
        {
          name: "PHP(wordpree)",
          color: "blue-text-gradient",
        },
        {
          name: "Mysql",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: lifeline,
      source_code_link: "https://github.com/kaylikecoding",
    },
    {
      name: "E-commerce Hospital Website",
      description:
      "Hospital’s website (e-commerce website): A GUI website where people can book appointment and check out all services provided by hospitals also can buy medicine online. Also user can buy medicine as this website is e-commerce website and has payment gateway option as well.(WordPress)",
      
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: hospital,
      source_code_link: "https://github.com/kaylikecoding",
    },
    {
    name: "Employee Login Mobile App",
      description:
      "Employee login mobile application: employee can login to company by using validation of users credentials like id and password. (Android studio- java and SQLite",
      
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "SqlLite",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: employee,
      source_code_link: "https://github.com/kaylikecoding",
    },
  ];
  
  export { services, technologies, experiences,  projects };