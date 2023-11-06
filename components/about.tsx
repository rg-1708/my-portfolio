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
      className="mb-28 max-w-[19.5rem] text-sm sm:text-md sm:max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a <span className="font-semibold">Software Developer</span>{" "}
        specializing in web development. Since{" "}
        <span className="italic">2018</span>, I've been dedicated to mastering
        programming and building a strong foundation in this field. Currently, I
        am pursuing studies at <span className="font-semibold">CVUT</span> to
        further enhance my skills and knowledge.
      </p>
      <p className="mb-3">
        My focus lies in creating web applications, and I have a good grasp of
        various programming languages. I am passionate about learning and
        problem-solving, always eager to take on new challenges in the
        ever-evolving tech landscape.
      </p>
      <p className="mb-3">
        I pride myself on being highly versatile and a quick learner in the
        realm of software development. Adaptability has been a key strength,
        allowing me to swiftly grasp new concepts and technologies while
        effectively applying them in real-world scenarios. I find immense value
        in exchanging ideas and fostering open communication with colleagues to
        collectively discover innovative solutions and streamline existing
        processes through refactoring.
      </p>
      <p className="mb-3">
        I value collaboration and believe in the power of teamwork for
        successful project outcomes. My goal is to leverage my expertise to
        create impactful solutions in the field of software development.
      </p>
    </motion.section>
  );
}
