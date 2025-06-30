"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import p from "../public/abdel.jpg";

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
        </div>
      </div>

      {/* Video Section */}
      {/* <video style={{ margin: "10px auto" }} width="800" controls>
        <source src="/aze.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </section>
  );
}
