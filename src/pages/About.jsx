import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import profileImg from "../assets/profile.jpg";

export default function About({
  size,
  bgsize,
  setBgsize,
  bgopacity,
  setBgopacity,
}) {
  const currentPage = "about";

  return (
    <div className="relative w-full h-screen">
      <Navbar
        size={size}
        setBgsize={setBgsize}
        setBgopacity={setBgopacity}
        currentPage={currentPage}
      />
      {size >= 1024 && (
        <motion.div
          initial={{ width: bgsize, opacity: bgopacity }}
          animate={{ width: "0%", opacity: 0.3 }}
          exit={{
            width: "0%",
            opacity: 0.3,
            transition: { duration: 1 },
          }}
          id="hero-image"
          className={"absolute h-full right-0 duration-1000 bg-zinc-50"}
        ></motion.div>
      )}

      {size >= 1024 && (
        <motion.div
          initial={{ width: "0%", opacity: 0.3 }}
          animate={{ width: "40%", opacity: 0.3 }}
          exit={{
            width: "0%",
            opacity: 0.3,
            transition: { duration: 0.2 },
          }}
          id="about-me-image"
          className={"absolute h-full left-0 duration-1000 bg-zinc-50"}
        ></motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        className="absolute my-auto top-0 bottom-0 right-0 w-full lg:w-3/5 h-fit flex flex-col justify-center pt-24 pb-12 px-4 lg:pl-24 lg:pr-48"
      >
        <motion.p
          initial={{ x: "-100%" }}
          animate={{ x: 0, transition: { duration: 1, delay: 0.5 } }}
          exit={{ x: "-100%", transition: { duration: 1, delay: 0.3 } }}
          className="text-zinc-800 font-dmSerif text-7xl lg:text-9xl p-4"
        >
          about me.
        </motion.p>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 1, delay: 1 } }}
          exit={{
            x: "-100%",
            opacity: 0,
            transition: { duration: 2, delay: 0.5 },
          }}
          className="relative "
        >
          <span className="absolute top-0 left-0 text-zinc-500 font-thin font-dmSerif text-7xl">
            "
          </span>
          <p className="text-zinc-500 font-thin font-dmSerif text-4xl py-12 text-center">
            I'm Chell, a Photographer and Cosplayer based in Toronto, Ontario.
          </p>
          <span className="absolute bottom-0 right-0 text-zinc-500 font-thin font-dmSerif text-7xl">
            "
          </span>
        </motion.div>

        <p className="leading-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque sint
          nobis tempora voluptates enim quibusdam sit corrupti. Explicabo nobis
          sequi iure veritatis eum ex similique eius at quibusdam porro beatae
          alias accusamus, illum labore dignissimos consectetur hic earum
          consequuntur aliquam nesciunt laboriosam maiores tempora consequatur.
          Excepturi ad voluptatum fuga. Nam?
        </p>
      </motion.div>
    </div>
  );
}
