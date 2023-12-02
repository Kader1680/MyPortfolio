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
      In this duration, I have learned a lot of technologies, created many cool websites, collaborated with great developers and contributed to open source projects.
      As software Developer i had  experience with Laravel, React. Great understanding of OOP principles, Data Structures, Algorithms. Experience in responsive WEB development. Works with client-side and service-side. Experience with web systems running on various OS and browsers, including older versions. Strong understanding of CSS pre-processors (SASS / SCSS) and also building an API. 
      So I'm always seeking to have an opportunity that matches my skills, to make the best use of all what I have learned.
      </p>
    </motion.section>
  );
}
