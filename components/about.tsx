"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am Abdelkader, a software engineer specializing in backend development with the capability to handle front-end work when needed. I excel at solving complex problems, debugging, and writing secure, clean, and well-documented code. Adhering to SOLID principles, I take pride in delivering maintainable, high-quality solutions.
<br></br>
I am self-taught in computer science and have a solid understanding of essential concepts like Object-Oriented Programming (OOP), Data Structures and Algorithms (DSA), and security. My passion for open-source projects reflects my commitment to continuous learning and community collaboration.
<br></br>
Beyond technical skills, I am a strong team player with excellent communication abilities. I work effectively within teams, ensuring that everyone is on the same page, and I thrive in environments where collaboration is key to success. I also place a significant emphasis on testing to ensure the reliability of the software I build.
      </p>
    </motion.section>
  );
}
