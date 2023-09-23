import React from "react";
import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Photoshoot from "../components/Photoshoot";
import Footer from "../components/Footer";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";

const myGalleries = [
  { id: "photoshoot 1", image: p1 },
  { id: "photoshoot 2", image: p2 },
  { id: "photoshoot 3", image: p3 },
  { id: "photoshoot 4", image: p4 },
  { id: "photoshoot 5", image: p5 },
  { id: "photoshoot 6", image: p6 },
];

export default function Galleries({
  size,
  bgsize,
  setBgsize,
  bgopacity,
  setBgopacity,
}) {
  const currentPage = "galleries";

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
          animate={{ width: "40%", opacity: 0.5 }}
          exit={{
            width: "40%",
            opacity: 0.5,
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
        className="flex flex-col justify-center items-center gap-6 w-full lg:w-3/5 h-full pt-24 lg:pt-28"
      >
        <p className=" text-black text-6xl lg:text-7xl font-dmSerif">
          Photoshoots.
        </p>
        <div className="h-screen w-full ">
          <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-3 lg:grid-rows-2 gap-4 h-5/6 w-4/5 mx-auto">
            {myGalleries.map((item, i) => (
              <Link
                to={`/gallery/${item.id}`}
                onClick={() => {
                  setBgsize("40%");
                  setBgopacity(0.5);
                }}
              >
                <motion.div
                  key={item.id}
                  id="photoshoot-box"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 + i * 0.1 }}
                  className="relative flex justify-center items-center overflow-hidden transition-all durat w-full h-full"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="object-cover min-w-full min-h-full opacity-80 hover:opacity-100 hover:blur-sm"
                  />
                  <p className="absolute lg:hidden text-zinc-700 text-xl lg:text-3xl font-montserrat">
                    {item.id}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
