import React, { useRef } from "react";
import { motion, useScroll, useReducedMotion } from "framer-motion";
import LiIcon from "./LiIcon";
import { TEXTS } from "@/custom/constants";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  prefersReducedMotion,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} prefersReducedMotion={prefersReducedMotion} />
      <motion.div
        initial={prefersReducedMotion ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 0.5, type: "spring" }
        }
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark-muted font-medium dark:text-light-muted xs:text-sm">
          {time} | {address}
        </span>
        <p className="whitespace-pre-line font-medium w-full md:text-sm">
          {work}
        </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark
            origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
          style={prefersReducedMotion ? { scaleY: 1 } : { scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position={TEXTS.experience.exp2.title}
            company={TEXTS.experience.exp2.company}
            companyLink={TEXTS.experience.exp2.companyLink}
            time={TEXTS.experience.exp2.time}
            address={TEXTS.experience.exp2.companyAddress}
            work={TEXTS.experience.exp2.description}
            prefersReducedMotion={prefersReducedMotion}
          />

          <Details
            position={TEXTS.experience.exp1.title}
            company={TEXTS.experience.exp1.company}
            companyLink={TEXTS.experience.exp1.companyLink}
            time={TEXTS.experience.exp1.time}
            address={TEXTS.experience.exp1.companyAddress}
            work={TEXTS.experience.exp1.description}
            prefersReducedMotion={prefersReducedMotion}
          />

          <Details
            position={TEXTS.experience.intern.title}
            company={TEXTS.experience.intern.company}
            companyLink={TEXTS.experience.intern.companyLink}
            time={TEXTS.experience.intern.time}
            address={TEXTS.experience.intern.companyAddress}
            work={TEXTS.experience.intern.description}
            prefersReducedMotion={prefersReducedMotion}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
