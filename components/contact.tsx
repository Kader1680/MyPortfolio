"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const { theme } = useTheme();

  const links = [
    {
      href: "https://www.linkedin.com/in/abdelkader-ould-hennia/",
      label: "LinkedIn",
    },
    {
      href: "mailto:ouldhenniabaghdad@gmail.com",
      label: "Email",
    },
    
    {
      href: "https://www.fiverr.com/ouldhenniaabdel?up_rollout=true",
      label: "Fiverr",
    },
    {
      href: "https://wa.me/+213549891600", // Replace with your WhatsApp link
      label: "WhatsApp",
    },
  ];

  const followLinks = [
    {
      href: "https://www.youtube.com/@Bloomaster1792",
      label: "YouTube",
    },
    {
      href: "https://github.com/Kader1680",
      label: "GitHub",
    },
    {
      href: "https://dev.to/clever",
      label: "DEVTo",
    },
  ];

  return (
    <motion.section id="contact" ref={ref} className="mb-0 sm:mb-28 text-center">
      <SectionHeading ><p className="text-[#009658]">Contact Me</p></SectionHeading>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {links.map((link, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
            style={{
              background:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            <a
              className="text-lg font-semibold text-[#36bd63] hover:text-[#36bdb6]"
              target="_blank"
              rel="noopener noreferrer"
              href={link.href}
            >
              {link.label}
            </a>
          </div>
        ))}
      </div>

      <SectionHeading>Follow Me</SectionHeading>
      <div className="grid md:grid-cols-3 gap-4">
        {followLinks.map((link, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
            style={{
              background:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            <a
              className="text-lg font-semibold text-[#36bd63]  hover:text-[#36bdb6]"
              target="_blank"
              rel="noopener noreferrer"
              href={link.href}
            >
              {link.label}
            </a>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
