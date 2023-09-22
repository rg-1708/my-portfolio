"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center 
    leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently pursuing my bachelor's degree in{" "}
        <span className="font-medium">Computer Science</span>, whilst working on
        projects like this, to fulfill my passion for programming. Previously
        I've enrolled into IT academy in my hometown, called StepIT and went
        trough <span className="font-medium">Software Development</span> course,
        spanning topics of{" "}
        <span className="text-gray-700 italic font-light">C++ and C# .Net</span>{" "}
        development. Then I've spent two years learning Java back-end
        development with a lot of different online materials and books. Which
        then made me want to learn front-end, and my choice fell upon NextJS.{" "}
        <span className="italic">My favorite part of programming</span> is the
        creativity aspect. I <span className="underline">love</span> the feeling
        of working on an exciting project, finding unique solution to a nice
        complex problem, just the idea of it is captivating. My core stack is{" "}
        <span className="font-medium">
          Java, NextJS, PostqreSQL and/or MongoDB
        </span>
        . Moreover, I am always looking to learn new technologies. I am
        currently looking for a{" "}
        <span className="font-medium">part-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy going to
        the gym, watching comedy, or a good series. I also enjoy{" "}
        <span className="font-medium">reading about </span>. about{" "}
        <span className="font-medium">history and different cultures</span>. I'm
        also play musical instruments like electric guitar and piano.
      </p>
    </motion.section>
  );
}
