import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import GalleryImage from "../components/GalleryImage";

export default function Gallery({ size, bgsize, setBgsize }) {
  const currentPage = "gallery";

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
          animate={{ width: "60%", opacity: 0.8 }}
          exit={{
            width: "60%",
            opacity: 0.8,
            transition: { duration: 1 },
          }}
          id="hero-image"
          className="absolute h-full right-0 duration-1000 bg-zinc-50"
        ></motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        className="flex flex-col justify-center items-center gap-6 w-full lg:w-2/5 h-full pt-24 "
      >
        <p className=" text-black text-6xl lg:text-7xl font-dmSerif">
          Photoshoot 1
        </p>
        <div
          id="gallery-scroll"
          className="w-fit h-4/5 grid grid-cols-3 lg:grid-cols-3 auto-rows-auto gap-1 overflow-scroll"
        >
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
          <GalleryImage />
        </div>
      </motion.div>
    </div>
  );
}
