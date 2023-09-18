import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function About({ size, bgsize, setBgsize }) {
  const currentPage = "about";

  return (
    <div className="relative w-full h-screen">
      <Navbar
        size={size}
        bgsize={bgsize}
        setBgsize={setBgsize}
        currentPage={currentPage}
      />
      {size >= 1024 && (
        <motion.div
          initial={{ width: bgsize, opacity: 0.5 }}
          animate={{ width: "0%", opacity: 0.5 }}
          exit={{
            width: "0%",
            opacity: 0.5,
            transition: { duration: 1 },
          }}
          id="hero-image"
          className={"absolute h-full right-0 duration-1000 bg-zinc-50"}
        ></motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 3 } }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        className="bg-red-300 w-2/5 h-full flex justify-center items-center"
      >
        <p className="text-black">About me.</p>
      </motion.div>
    </div>
  );
}
