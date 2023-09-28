import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Events({
  size,
  bgsize,
  setBgsize,
  bgopacity,
  setBgopacity,
}) {
  const currentPage = "events";

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
          animate={{ width: "100%", opacity: 0.2 }}
          exit={{
            width: "100%",
            opacity: 0.2,
            transition: { duration: 1 },
          }}
          id="hero-image"
          className={"absolute h-full right-0 duration-1000 bg-zinc-50"}
        ></motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        className="my-auto top-0 bottom-0 right-0 w-full lg:w-full h-fit flex flex-col justify-center pt-24 pb-12 px-4 lg:pl-24 lg:pr-48"
      >
        <motion.p
          initial={{ x: "-100%" }}
          animate={{ x: 0, transition: { duration: 1, delay: 0.5 } }}
          exit={{ x: "-100%", transition: { duration: 1, delay: 0.3 } }}
          className="text-zinc-800 font-dmSerif text-7xl lg:text-9xl p-4"
        >
          Events.
        </motion.p>
        <div className="w-full h-fit  flex justify-center items-center gap-12">
          <div className="bg-red-200 w-60 h-96"></div>
          <div className="bg-red-200 w-60 h-96"></div>
          <div className="bg-red-200 w-60 h-96"></div>
          <div className="bg-red-200 w-60 h-96"></div>
        </div>

        <p className="leading-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque sint
          nobis tempora voluptates enim quibusdam sit corrupti. Explicabo nobis
          sequi iure veritatis eum ex similique eius at quibusdam porro beatae
          alias accusamus, illum labore dignissimos consectetur hic earum
          consequuntur aliquam nesciunt laboriosam maiores tempora consequatur.
          Excepturi ad voluptatum fuga. Nam?
        </p>
      </motion.div>

      <div className="w-full h-screen bg-blue-200"></div>
      <div className="w-full h-screen bg-red-200"></div>
    </div>
  );
}
