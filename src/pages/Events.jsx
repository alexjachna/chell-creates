import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";

const EventsImages = [
  { id: "photoshoot 1", image: p1 },
  { id: "photoshoot 2", image: p2 },
  { id: "photoshoot 3", image: p3 },
  { id: "photoshoot 4", image: p4 },
];

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
          animate={{ width: "0%", opacity: 0.2 }}
          exit={{
            width: "0%",
            opacity: 0.2,
            transition: { duration: 1 },
          }}
          id="hero-image"
          className={"absolute h-full right-0 duration-1000 bg-zinc-50"}
        ></motion.div>
      )}

      <div className="w-full h-screen ">
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

          <div className="w-full h-fit flex justify-center items-center gap-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.25 }}
              className="w-48 h-96"
            >
              <img src={p1} alt="" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-48 h-96"
            >
              <img src={p2} alt="" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.75 }}
              className="w-48 h-96 hidden lg:block"
            >
              <img src={p3} alt="" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="w-48 h-96 hidden lg:block"
            >
              <img src={p4} alt="" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          <p className="px-36 py-12 leading-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            sint nobis tempora voluptates enim quibusdam sit corrupti. Explicabo
            nobis sequi iure veritatis eum ex similique eius at quibusdam porro
            beatae alias accusamus, illum labore dignissimos consectetur hic
            earum consequuntur aliquam nesciunt laboriosam maiores tempora
            consequatur. Excepturi ad voluptatum fuga. Nam?
          </p>
        </motion.div>
      </div>

      <div className="w-full h-fit px-36 pt-12 pb-36 flex justify-center items-center">
        <div className="w-1/2 h-5/6 flex flex-col justify-center ">
          <p className="text-zinc-800 font-dmSerif text-7xl lg:text-9xl p-4">
            Book a shoot.
          </p>
          <p className="px-36 py-12 leading-10">
            Want a photoshoot at the next con? Book a photoshoot with me here.
          </p>
        </div>
        <div className="w-1/2 h-5/6  flex justify-center">
          <form className="w-full flex flex-col gap-4 justify-center items-center">
            <div className="flex flex-col w-full">
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                className="h-12 p-4 border-2 outline-none"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                className="h-12 p-4 border-2 outline-none"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email">Your Message</label>
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
        </div>
      </div>
    </div>
  );
}
