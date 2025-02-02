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
import img1 from "../public/image1.jpg";
import img2 from "../public/image2.png";
import img3 from "../public/image3.jpg";
import img4 from "../public/image4.png";

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
        </div>
      </div>


      <video  style={{margin:"10px auto"}}  width="800" controls>
      <source src="/aze.mp4" type="video/mp4" />
      Your browser does not support the video tag.
      </video>
{/* 
      <br></br>
      <br></br>
      <hr></hr>
      <h1 style={{fontSize:"28px"}} className="font-bold">Latest Action & News </h1>
      <hr></hr>
      <br></br>
      

      <br></br>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
       
        <div className="relative group">
          <Image
            src={img1}
            alt="Image 1"
            className="rounded-lg object-cover w-full h-64 sm:h-80"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
            <h1 style={{fontSize:"25px"}} className="text-[#20c300] bg-black p-2 rounded-lg font-semibold text-lg">My Blog On Dev Commuinity</h1>
          </div>
        </div>
        <div className="relative group">
          <Image
            src={img2}
            alt="Image 2"
            className="rounded-lg object-cover w-full h-64 sm:h-80"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
            <h1 style={{fontSize:"25px"}} className="text-[#20c300] bg-black p-2 rounded-lg  font-semibold text-lg">Sharing Information On Linkdin</h1>
          </div>
        </div>
      </div>

      <br></br>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
       
        <div className="relative group">
          <Image
            src={img3}
            alt="Image 1"
            className="rounded-lg object-cover w-full h-64 sm:h-80"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
            <h1 style={{fontSize:"25px"}} className="text-[#20c300] bg-black p-2 rounded-lg font-semibold text-lg">Steraming when I Start Coding</h1>
          </div>
        </div>
        <div className="relative group">
          <Image
            src={img4}
            alt="Image 2"
            className="rounded-lg object-cover w-full h-64 sm:h-80"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
            <h1 style={{fontSize:"25px"}} className="text-[#20c300] bg-black p-2 rounded-lg  font-semibold text-lg">Sharing Ticks & Trips About Progamming</h1>
          </div>
        </div>
      </div> */}
    </section>
  );
}
