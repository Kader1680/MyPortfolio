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
      id="about"
      className="mb-28 text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175, duration: 0.6 }}
    >
      <SectionHeading>About Me</SectionHeading>

      <div className="md:flex md:items-center md:justify-between gap-12 mt-10">
        {/* Text Content */}
        <motion.div
          className="md:w-1/2 text-start space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-7">
            I am a software engineer specializing in backend development with
            the capability to handle front-end work when needed. I excel at
            solving complex problems, debugging, and writing secure, clean, and
            well-documented code. Adhering to <strong>SOLID</strong> principles, I take pride in delivering maintainable, high-quality solutions.
          </p>

          <p className="text-gray-600 dark:text-gray-300 text-lg leading-7">
            Self-taught in computer science, I possess a solid understanding of
            essential concepts like Object-Oriented Programming (OOP), Data Structures and Algorithms (DSA), and security. My passion for open-source projects reflects my commitment to continuous learning and community collaboration.
          </p>

          <p className="text-gray-600 dark:text-gray-300 text-lg leading-7">
            Beyond technical skills, I am a strong team player with excellent
            communication abilities. I work effectively within teams, ensuring
            smooth collaboration. I place significant emphasis on testing to ensure the reliability of the software I build.
          </p>

          <p className="text-gray-600 dark:text-gray-300 text-lg leading-7">
            I am always seeking opportunities that align with my skills to make the best use of everything I’ve learned.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <img
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            src="/me.png"
            alt="Abdelkader"
            width={700}
            height={700}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
