import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import laravel from "@/public/5.png";
import rmtdevImg from "@/public/rmtdev.png";
import L from "@/public/landy.png";
import PH from "@/public/PH.png";
import k from "@/public/k.png";
import p from "@/public/p.png";
import todo from "@/public/todo.png";
import v from "@/public/valleu.png";
import m from "@/public/m.png";
import s from "@/public/s.png";
import a from "@/public/1.png";
import auth from "@/public/auth.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Services",
    hash: "#services",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Blog",
    hash: "#blog",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
   
  
] as const;

export const experiencesData = [

  {
 
    title: "Full Stack Developer",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Backend Developer on Open Source Project",
    description:
      "I start Contributing in Open Source as backend specialize in laravel to solve issue & adding new feature also testing the code",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Junior Backend Developer",
    description:
      "I worked on build RESTFULL API and write the testing, docs. also start to make Unit Testing & feature testing , fixing bugs",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Front End Developer Freelancer AT Fiverr",
    description:
      "I build Landing Page Responsive desing, update some template & fix bug",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },


] as const;

export const projectsData = [
  {
    title: "Authentication using Jwt Laravel",
    description:
      "you can register or loign and will refirect to home page that will display you username and email",
    tags: ["Php", "Laravel", "Mysql", "JWT", "Javascript"],
    imageUrl: auth,
    urlGithub: "https://github.com/Kader1680/Laravel-Authentication",
    demo: "http://authen.byethost10.com/?fbclid=IwAR0327M2jDFfCW8t3D58MVBoo83FIuVvYoYAIMP2MyCt0P41rKcUAxeTtDU",
  },
  {
    title: "Blog Post Laravel",
    description:
      "you can create your own blog and edit or delelte just your blog, also i add feature to delete all blog",
    tags: ["Php", "Laravel", "Mysql", "Bootstrap 5", "Javascript"],
    imageUrl: laravel,
    urlGithub: "https://github.com/Kader1680/fisrt-laravel-app",
    demo: "",
  },
  
  {
    title: "Todo List Reactjs",
    description:
      "you can add, remove and update task",
    tags: ["React Js", "Bootstrap", "Html Css", "Javascript"],
    imageUrl: todo,
    urlGithub: "https://github.com/Kader1680/CRUD-APP-REACT/deployments/github-pages",
    demo: "https://kader1680.github.io/CRUD-APP-REACT/",
  },
  {
    title: "Smal socila media website php",
    description:
      "you can login or register, create profile, add friend and upload picter",
    tags: ["php", "mysql", "Html Css", "Javascript", "sql"],
    imageUrl: v,
    urlGithub: "https://github.com/Kader1680/Social-Media-Website",
    demo: "",
  },
  {
    title: "Landing Page",
    description:
      "landing page with diffrent langage ",
    tags: ["php", "mysql", "Html Css", "Javascript", "sql"],
    imageUrl: L,
    urlGithub: "https://github.com/Kader1680/Social-Media-Website",
    demo: "",
  },
  {
    title: "Stock Medicament Php Mysql",
    description:
      "i used pure php with mysql without use any libray or framework, you can add new city or delete, update",
    tags: ["Php", "Mysql", "SQL", "Bootstrap", "Html css Javascript"],
    imageUrl: PH,
    urlGithub: "https://github.com/Kader1680/Stock_Medicament",
    demo: "",
  },
  {
    title: "IT Employer C++",
    description:
      "choise you role as employer or product ",
    tags: ["C++", "Object Oriented Programming"],
    imageUrl: k,
    urlGithub: "https://github.com/Kader1680/System-It-Member",
    demo: "",
  },
  {
    title: "Old Portflio Website",
    description:
      "My old portflio website using react js it's responsive design",
    tags: ["React", "Html", "Css", "JavzScipt", "Bootstrap"],
    imageUrl: p,
    urlGithub: "https://github.com/Kader1680/Potfolio-Website/tree/main/app",
    demo: "https://kader1680.github.io/Potfolio-Website/",
  }
  


  ,
  {
    title: "Static Store website",
    description:
      "multipage website static",
    tags: ["React", "Html", "Css", "JavzScipt", "Bootstrap"],
    imageUrl: s,
    urlGithub: "https://github.com/Kader1680/Online-Store",
    demo: "https://kader1680.github.io/Online-Store/",
  }




  ,
  {
    title: "Medical Website",
    description:
      "mutipages website with more 3 section and form validation",
    tags: ["React", "Html", "Css", "JavzScipt", "Bootstrap"],
    imageUrl: m,
    urlGithub: "https://github.com/Kader1680/Newlife-with-scss",
    demo: "https://kader1680.github.io/Newlife-with-scss/",
  }


  ,
  {
    title: "CRUD APP using MYSQL",
    description:
      "mutipages website with more 3 section and form validation",
    tags: ["React", "Html", "Css", "JavzScipt", "Bootstrap"],
    imageUrl: a,
    urlGithub: "https://github.com/Kader1680/Newlife-with-scss",
    demo: "https://kader1680.github.io/Newlife-with-scss/",
  }


] as const;

export const skillsData = [
  "C++",
  "Php",
  "Laravel",
  "Mysql",
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",  
  "Object Oritented Programming",  
  "Data Structure",  
  "Algorithm",  

] as const;
