"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import Link from "next/link";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";
export default function Contact() {
  const { ref } = useSectionInView("Contact");
  // const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    
    <div  className="row">
      <motion.section
      id="contact"
     
      className="mb-0 sm:mb-28 w-[min(100%,38rem)] text-center"
   
     
    ></motion.section>
        <SectionHeading>Contact Me</SectionHeading>

 



         

<div className=" flex items-center gap-2 mb-5">


  
<div className=" w-full" style={{ background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                 textAlign: "center",
                padding: "1.3rem 2rem",}}>
         
          <a target="_blank" href="https://www.linkedin.com/in/abdelkader-ould-hennia/">Linkdin</a>

    </div>

    <div className=" w-full  "  style={{ background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                 textAlign: "center",
                padding: "1.3rem 2rem",}}
                 
                >
          <a target="_blank" href="mailto:ouldhenniabaghdad@gmail.com">Email</a>

                   

    </div>

    <div className=" w-full  "  style={{ background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                 textAlign: "center",
                padding: "1.3rem 2rem",}}
                 
                >
          <a target="_blank" href="https://web.facebook.com/baghdad.ouldhennia.9">Facebook</a>

                   

    </div>
    <div className=" w-full" style={{ background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                 textAlign: "center",
                padding: "1.3rem 2rem",}}>

                   
<a target="_blank" href="https://www.fiverr.com/ouldhenniaabdel?up_rollout=true">Fiverr</a>

    </div>

    <div className=" w-full" style={{ background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                 textAlign: "center",
                padding: "1.3rem 2rem",}}>

                   
<a target="_blank" href="https://www.linkedin.com/in/abdelkader-ould-hennia/">whatsapp</a>

    </div>

</div>

    <SectionHeading >Follow Me</SectionHeading>
    <div className=" flex items-center gap-2">


  
<div className=" w-full" style={{ background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                 textAlign: "center",
                padding: "1.3rem 2rem",}}>
         
          <a target="_blank" href="https://www.youtube.com/@Bloomaster1792">Youtube</a>

    </div>

    <div className=" w-full  "  style={{ background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                 textAlign: "center",
                padding: "1.3rem 2rem",}}
                 
                >
          <a target="_blank" href="https://github.com/Kader1680">Github</a>

                   

    </div>
    <div className=" w-full  " style={{ background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "center",
                padding: "1.3rem 2rem",}}>

                   
       <a target="_blank" href="https://dev.to/clever">DEVTo</a>

    </div>

 


   

</div>


        
    </div>
  );
}
