import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Contact({
  size,
  bgsize,
  setBgsize,
  bgopacity,
  setBgopacity,
}) {
  const currentPage = "contact";

  return (
    <div>
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
            opacity: 0.5,
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
          id="contact-image"
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
          Contact me.
        </motion.p>
        <p className="text-zinc-500 text-center">
          Feel free to get in touch with me.
        </p>
        <form className=" flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col w-1/2">
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              className="h-12 p-4 border-2 outline-none"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              className="h-12 p-4 border-2 outline-none"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="email">Your email</label>
            <textarea
              name=""
              id=""
              rows="6"
              className="resize-none h-24 p-4 border-2 outline-none"
            ></textarea>
          </div>
          <button className="bg-purple-400 hover:bg-purple-500 transition-all p-4 w-40 text-white rounded-sm shadow-md">
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
}
