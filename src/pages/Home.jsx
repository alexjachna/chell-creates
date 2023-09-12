import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import resize from "../assets/resize.png";
import pause from "../assets/pause.png";

export default function Home({ size }) {
  return (
    <div className="relative w-full h-screen">
      <Navbar size={size} />
      {size >= 1024 && (
        <motion.div
          initial={{ width: "40%" }}
          animate={{ width: "60%" }}
          exit={{
            width: "60%",
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
        className="absolute flex flex-col items-center lg:items-start gap-8 w-full h-fit px-4 lg:px-48 m-auto left-0 right-0 top-0 bottom-0 "
      >
        <p className="text-zinc-700 tracking-[1rem] text-xl lg:text-2xl text-center">
          ALEX JACHNA PRESENTS
        </p>
        <p className="text-zinc-800 font-dmSerif text-8xl lg:text-9xl text-center">
          chell creates media.
        </p>
        {size >= 1024 && (
          <nav className="flex gap-4 lg:gap-24 xl:gap-48">
            <div className="p-4 w-48">
              <Link
                to="/galleries/"
                className="font-bold text-2xl text-zinc-700 tracking-widest"
              >
                Galleries
              </Link>
              <p className="text-zinc-500">
                Visit all my photoshoot galleries.
              </p>
            </div>
            <div className="p-4 w-48">
              <Link
                to="/galleries/"
                className="font-bold text-2xl text-zinc-700 tracking-widest"
              >
                About
              </Link>
              <p className="text-zinc-500">
                Learn more about me and what I do.
              </p>
            </div>
            <div className="p-4 w-48">
              <Link
                to="/galleries/"
                className="font-bold text-2xl text-zinc-700 tracking-widest"
              >
                Contact
              </Link>
              <p className="text-zinc-500">
                Feel free to get in touch with me.
              </p>
            </div>
          </nav>
        )}
        <button className="bg-purple-400 hover:bg-purple-500 transition-all p-4 w-40 text-white rounded-sm shadow-md">
          View Galleries
        </button>
      </motion.div>

      {size >= 1024 && (
        <div className="absolute flex justify-center items-center gap-2 bottom-3 right-5 rounded-sm w-24 h-12">
          <img
            src={resize}
            alt=""
            title="Resize Image"
            className="h-9 p-1 opacity-20 transition-all hover:cursor-pointer hover:opacity-80"
          />
          <img
            src={pause}
            alt=""
            title="Pause Slideshow"
            className="h-9 p-1 opacity-20 transition-all hover:cursor-pointer hover:opacity-80"
          />
        </div>
      )}
    </div>
  );
}
