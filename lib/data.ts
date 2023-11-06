import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import munioImg from "@/public/munio.png";
import commercioStoreImg from "@/public/commercio-store.png";
import commercioAdminImg from "@/public/commercio-admin.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "StepIt Academy",
    location: "Baku, Azerbaijan",
    description:
      "I studied software development for two years, learning c++, OOP principles in c++, then C# and .Net, SQL",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2020",
  },
  {
    title: "1C Developer (Intern)",
    location: "Baku, Azerbaijan",
    description:
      "I worked as a 1C developer during this internship, writing code to handle necessery logic for ERP system",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Java Mentor",
    location: "Houston, TX (Remote)",
    description:
      "I was working as a Java mentor for the group in Coding bootcamp, teaching them java, \
      starting from Zero to Object-oriented programming, Data Structures and Alghoritms",
    icon: React.createElement(FaReact),
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "Munio",
    description:
      "Elegantly crafted full-stack project, inspired by the ease of Discord and Slack.",
    tags: [
      "Next.js",
      "TypeScript",
      "MySQL",
      "Prisma",
      "Tailwind",
      "Socket.io",
      "Railway",
    ],
    imageUrl: munioImg,
  },
  {
    title: "Commercio Store",
    description:
      "E-commerce store frontend which allows to purchase products of the store, view them trough categories and filters. Connected to Stripe(Dev)",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "headlessui"],
    imageUrl: commercioStoreImg,
  },
  {
    title: "Commercio Admin",
    description:
      "E-commerce store admin panel, that allow to create multiple stores, banners, categories, and more. Sync with commerciostore.",
    tags: ["Next.js", "Prisma", "Tailwind", "TypeScript", "MySQL", "shadcn ui"],
    imageUrl: commercioAdminImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Spring Framework",
  "Spring boot",
  "Hibernate",
  "JDBC",
  "Microservices",
  "Rabbit MQ",
  "Docker",
  "Maven",
  "Html",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Framer Motion",
] as const;
