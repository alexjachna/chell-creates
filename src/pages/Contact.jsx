import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Contact({ size, bgsize, setBgsize }) {
  const currentPage = "contact";

  return (
    <div>
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
    </div>
  );
}
