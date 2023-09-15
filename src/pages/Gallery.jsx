import React from "react";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Gallery({ size }) {
  return (
    <div className="relative w-full h-screen">
      <Navbar size={size} />
      {size >= 1024 && (
        <motion.div
          initial={{ width: "40%", opacity: 0.5 }}
          animate={{ width: "60%", opacity: 0.8 }}
          exit={{
            width: "60%",
            opacity: 0.8,
            transition: { duration: 1 },
          }}
          id="hero-image"
          className={"absolute h-full right-0 duration-1000 bg-zinc-50"}
        ></motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        className="flex flex-col justify-center items-center gap-6 w-full lg:w-2/5 h-full py-6 bg-red-200"
      >
        <p className=" text-black text-6xl lg:text-7xl font-dmSerif">
          Photoshoot 1
        </p>
      </motion.div>
    </div>
  );
}
