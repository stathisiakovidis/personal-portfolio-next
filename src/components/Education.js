import React, { useRef } from "react";
import { motion, useScroll, useReducedMotion } from "framer-motion";
import AboutIcon from "./LiIcon";
import { TEXTS } from "@/custom/constants";

const Details = ({ type, time, place, info, prefersReducedMotion }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <AboutIcon reference={ref} prefersReducedMotion={prefersReducedMotion} />
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
          {type}
        </h3>
        <span className="capitalize text-dark-muted font-medium dark:text-light-muted xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark
          origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
          style={prefersReducedMotion ? { scaleY: 1 } : { scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-2">
          <Details
            type={TEXTS.education.bachelors.title}
            time={TEXTS.education.bachelors.time}
            place={TEXTS.education.bachelors.place}
            info={TEXTS.education.bachelors.field}
            prefersReducedMotion={prefersReducedMotion}
          />

          <Details
            type={TEXTS.education.courses.title}
            time={TEXTS.education.courses.time}
            place={TEXTS.education.courses.place}
            info={TEXTS.education.courses.description}
            prefersReducedMotion={prefersReducedMotion}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
