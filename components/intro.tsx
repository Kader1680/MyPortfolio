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
import p from "../public/profil.png"
export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[110rem] text-center sm:mb-0 scroll-mt-[100rem]"
     >
      
      <div className=" md:grid grid-cols-4 items-center">

      
      <div className="flex items-center justify-center col-span-1 k">
        <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Image style={{ width:"100%", height:"100%" }}
                src={p}
                alt="Abdelkader Ould Hennia"
                
                quality="95"
                priority={true}
                className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              />
            </motion.div>

          {/* <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span> */}
        </div>
      </div>

     <div className=" col-span-3">
     <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-start ms-5"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Abdelkader.</span> <br></br>
        <span className="font-bold">Full-Stack Software Engineer Specializing in Backend Development, Passionate About Building & Maintaining Scalable, Secure Websites</span>
      </motion.h1>
      <motion.div
        className="flex  flex-col sm:flex-row items-center justify-start ms-5 gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >


        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here 
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/abdelkader-ould-hennia/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Kader1680"
          target="_blank"
        >
          <FaGithubSquare />
        </a>

        
      </motion.div>
     </div>
      </div>
    </section>
  );
}
