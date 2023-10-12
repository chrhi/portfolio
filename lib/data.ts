// @ts-nocheck

import React from "react";
import { CgWorkAlt } from "react-icons/cg";

import { LuGraduationCap } from "react-icons/lu";
import agency from "@/public/agency.PNG";

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
    title:
      "Information and software integration engineering , university M’hamed Bougara of Boumerdes , Boumerdes",
    location: "Boumerdes, Algeria",
    description:
      "I graduated from Mohamed Bougherra University in Boumerdes, where I gained a solid foundation in programming. This education provided me with the skills needed to excel in this field",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Full stack intern at Sonatrach , Boumerdes ",
    location: "Boumerdes, Algeria",
    description:
      "I worked as a full-stack intern at Sonatrach, one of the leading Algerian companies, contributing to the development of a tailor-made project management platform known as ProjectFlow. This experience allowed me to actively support the company's operations and improve its project management capabilities.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title:
      "Computer technology (IT), university M’hamed Bougara of Boumerdes , Boumerdes",
    location: "Boumerdes, Algeria",
    description:
      "I am currently pursuing a Master's degree in it, with a special focus on enhancing my skills, especially in the field of web development, using technologies such as React and Next.js.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Agency website",
    description:
      "Abdullah Agency is a sleek and engaging multi-page agency website template, skillfully crafted using Next.js, Tailwind CSS, and Framer Motion by the talented Tailwind CSS team.",
    tags: ["React", "Next.js", "Tailwind", "Javascript"],
    imageUrl: agency,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",

  "Express",
  "PostgreSQL",

  "Framer Motion",
] as const;
