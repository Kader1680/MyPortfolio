"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import p from "../public/profil.png";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[110rem] px-6 text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="md:grid grid-cols-4 items-center gap-10">
        {/* Profile Image Section */}
        <div className="flex items-center justify-center col-span-1">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <Image
              src={p}
              alt="Abdelkader Ould Hennia"
              quality={100}
              priority
              className="rounded-xl object-cover border-4 border-white shadow-2xl 
                         w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64"
            />
          </motion.div>
        </div>

        {/* Intro Text and Links */}
        <div className="col-span-3">
          <motion.h1
            className="mb-8 mt-4 px-4 text-2xl font-semibold sm:text-4xl text-start"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hello, I'm <span className="font-bold">Abdelkader.</span>
            <br />
            <span className="font-bold">
              Full-Stack Software Engineer Specializing in Backend Development.
            </span>
            <br />
            Passionate about building scalable and secure web solutions.
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-start gap-4 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {/* Contact Button */}
            <Link
              href="#contact"
              className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full hover:bg-gray-950 focus:scale-110 hover:scale-110 active:scale-105 transition"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me here
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            {/* Download CV Button */}
            <a
              href="/CV.pdf"
              download
              className="group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full hover:scale-110 active:scale-105 transition cursor-pointer border border-gray-300 dark:bg-white/10"
            >
              Download CV
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>

            {/* LinkedIn Profile */}
            <a
              href="https://www.linkedin.com/in/abdelkader-ould-hennia/"
              target="_blank"
              className="bg-white p-4 text-gray-700 hover:text-gray-950 rounded-full hover:scale-110 active:scale-105 transition border border-gray-300 dark:bg-white/10 dark:text-white/60"
            >
              <BsLinkedin className="text-xl" />
            </a>

            {/* GitHub Profile */}
            <a
              href="https://github.com/Kader1680"
              target="_blank"
              className="bg-white p-4 text-gray-700 hover:text-gray-950 rounded-full hover:scale-110 active:scale-105 transition border border-gray-300 dark:bg-white/10 dark:text-white/60"
            >
              <FaGithubSquare className="text-2xl" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
