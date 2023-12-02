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
    name: "Projects",
    hash: "#projects",
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
    title: "Open Source Contributor",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer Fiverr Freelancer",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "Blog Post Laravel",
    description:
      "you can create your own blog and edit or delelte just your blog, also i add feature to delete all blog",
    tags: ["Php", "Laravel", "Mysql", "Bootstrap 5", "Javascript"],
    imageUrl: laravel,
  },
  {
    title: "Start React Website",
    description:
      "you can swip form English to Arabic that will change content to current langage",
    tags: ["React Js", "Bootstrap", "Html Css", "Javascript"],
    imageUrl: L,
  },
  {
    title: "Php Mysql Crud Application",
    description:
      "i used pure php with mysql without use any libray or framework, you can add new city or delete, update",
    tags: ["Php", "Mysql", "SQL", "Bootstrap", "Html css Javascript"],
    imageUrl: PH,
  },
  {
    title: "IT Employer C++",
    description:
      "choise you role as employer or product ",
    tags: ["C++", "Object Oriented Programming"],
    imageUrl: k,
  },
  {
    title: "Old Portflio Website",
    description:
      "My old portflio website using react js it's responsive design",
    tags: ["React", "Html", "Css", "JavzScipt", "Bootstrap"],
    imageUrl: p,
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
