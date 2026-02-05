import { motion } from "framer-motion";
import React, { useRef } from "react";

const Skill = ({ name, x, y }) => {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      className="cursor-pointer w-max origin-center absolute
       font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark
       lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3"
    >
      {name}
    </motion.div>
  );
};

const MobileSkill = ({ name }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="font-semibold bg-dark text-light py-2 px-4 rounded-full dark:bg-light dark:text-dark
       text-sm"
    >
      {name}
    </motion.div>
  );
};

const skills = [
  "NextJS", "Node.js", "JavaScript", "ReactJS", "Kotlin",
  "Typescript", "Git", "Java", "AWS", "AWS SDK", "Google Cloud"
];

const Skills = () => {
  const ref = useRef(null);
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl xs:text-4xl md:mt-32 xs:mt-16">
        Skills
      </h2>

      {/* Desktop/Tablet circular layout */}
      <div
        ref={ref}
        className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark flex items-center justify-center
        mb-64 md:mb-32 rounded-full
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:hidden"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer flex rounded-full font-semibold bg-dark text-light p-8 shadow-dark
          dark:bg-light dark:text-dark lg:p-6 md:p-4"
        >
          DevOps
        </motion.div>

        <Skill name="NextJS" x="-20vw" y="2vw" />
        <Skill name="Node.js" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="Kotlin" x="-20vw" y="-15vw" />
        <Skill name="Typescript" x="15vw" y="-12vw" />
        <Skill name="Git" x="-35vw" y="-5vw" />
        <Skill name="Java" x="32vw" y="-5vw" />
        <Skill name="AWS" x="0vw" y="-20vw" />
        <Skill name="AWS SDK" x="28vw" y="18vw" />
        <Skill name="Google Cloud" x="-25vw" y="18vw" />
      </div>

      {/* Mobile grid layout */}
      <div className="hidden xs:flex xs:flex-wrap xs:justify-center xs:gap-3 xs:py-8 xs:mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-bold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark"
        >
          DevOps
        </motion.div>
        {skills.map((skill, index) => (
          <MobileSkill key={index} name={skill} />
        ))}
      </div>
    </>
  );
};

export default Skills;
