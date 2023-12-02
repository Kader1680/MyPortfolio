"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import Link from "next/link";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    
    <div className="row">
      <motion.section
      id="contact"
      ref={ref}
      className="mb-0 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    ></motion.section>
        <SectionHeading>Contact me</SectionHeading>

<p className="text-gray-700  dark:text-white/80">
  Please contact me directly at{" "}
  <a className="underline" href="mailto:ouldhenniabaghdad@gmail.com">
    example@gmail.com
  </a>{" "}
  or through this form.
</p>
        <div className="grid grid-cols-4 gap-4 ">
         
          <div>
            <a  target="_blank" href="https://web.facebook.com/baghdad.ouldhennia.9">
              <img width="100" height="100"  src="data:image/png;base64,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" />      
            </a>
          </div>
          <div>
            <a target="_blank" href="https://www.linkedin.com/in/abdelkader-ould-hennia/">
              <img width="100" height="100"  src="data:image/png;base64,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" />

            </a>
          </div>
          <div>
            <a target="_blank" href="https://www.upwork.com/freelancers/~010cebad8e4d284f21"></a>
            <img width="100" height="100"  src="https://assets-global.website-files.com/603fea6471d9d8559d077603/6092b7514135708162a4be92_Favicon%20256.png" />

          </div>

        </div>
    </div>
  );
}
