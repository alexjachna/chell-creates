import React from "react";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Photoshoot from "../components/Photoshoot";

export default function Galleries({ size }) {
  return (
    <div className="relative w-full h-screen">
      <Navbar size={size} />
      {size >= 1024 && (
        <motion.div
          initial={{ width: "60%" }}
          animate={{ width: "40%" }}
          exit={{
            width: "40%",
          }}
          id="hero-image"
          className={
            "absolute h-full right-0 transition-all duration-1000 bg-zinc-50"
          }
        ></motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        className="absolute flex flex-col justify-center items-center gap-6 m-auto top-0 bottom-0 left-0 w-3/5 h-full pt-24"
      >
        <p className=" text-black text-7xl font-dmSerif">Photoshoots.</p>
        <div class="h-screen w-full">
          <div class="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-4 h-5/6 w-4/5 mx-auto">
            <Photoshoot />
            <Photoshoot />
            <Photoshoot />
            <Photoshoot />
            <Photoshoot />
            <Photoshoot />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
