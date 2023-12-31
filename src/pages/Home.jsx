import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Home({
  size,
  bgsize,
  setBgsize,
  bgopacity,
  setBgopacity,
}) {
  const currentPage = "home";

  return (
    <div className="w-full h-screen">
      <Navbar
        size={size}
        setBgsize={setBgsize}
        setBgopacity={setBgopacity}
        currentPage={currentPage}
      />
      {size >= 1024 && (
        <motion.div
          initial={{ width: bgsize, opacity: bgopacity }}
          animate={{ width: "60%", opacity: 0.3 }}
          exit={{
            width: "60%",
            opacity: 0.3,
            transition: { duration: 1 },
          }}
          id="hero-image"
          className={"absolute h-full right-0 duration-1000 bg-zinc-50"}
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
          <nav className="flex lg:gap-12 xl:gap-24">
            <div className="p-4 w-48">
              <Link
                to="/galleries"
                className="font-bold text-2xl text-zinc-700 tracking-widest"
                onClick={() => {
                  setBgsize("60%");
                  setBgopacity(0.3);
                }}
              >
                Galleries
              </Link>
              <p className="text-zinc-500">
                Visit all my photoshoot galleries.
              </p>
            </div>
            <div className="p-4 w-48">
              <Link
                to="/events"
                className="font-bold text-2xl text-zinc-700 tracking-widest"
                onClick={() => {
                  setBgsize("60%");
                  setBgopacity(0.3);
                }}
              >
                Events
              </Link>
              <p className="text-zinc-500">Follow any Events I attend.</p>
            </div>
            <div className="p-4 w-48">
              <Link
                to="/about"
                className="font-bold text-2xl text-zinc-700 tracking-widest"
                onClick={() => {
                  setBgsize("60%");
                  setBgopacity(0.3);
                }}
              >
                About
              </Link>
              <p className="text-zinc-500">
                Learn more about me and what I do.
              </p>
            </div>
            <div className="p-4 w-48">
              <Link
                to="/contact"
                className="font-bold text-2xl text-zinc-700 tracking-widest"
                onClick={() => {
                  setBgsize("60%");
                  setBgopacity(0.3);
                }}
              >
                Contact
              </Link>
              <p className="text-zinc-500">
                Feel free to get in touch with me.
              </p>
            </div>
          </nav>
        )}
        <Link
          to="/galleries"
          onClick={() => {
            setBgsize("60%");
            setBgopacity(0.3);
          }}
        >
          <button className="bg-purple-400 hover:bg-purple-500 transition-all p-4 w-40 text-white rounded-sm shadow-md">
            View Galleries
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
