import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import profileImg from "../assets/profile.jpg";

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
          initial={{ width: bgsize, opacity: 0.3 }}
          animate={{ width: "0%", opacity: 0.3 }}
          exit={{
            width: "0%",
            opacity: 0.3,
            transition: { duration: 1 },
          }}
          id="hero-image"
          className={"absolute h-full right-0 duration-1000 bg-zinc-50"}
        ></motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2, delay: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 1 } }}
        className="absolute w-4/5 h-4/5 m-auto left-0 right-0 top-0 bottom-0 flex flex-col gap-4 justify-center items-center"
      >
        <p className="text-black text-5xl font-dmSerif">About me.</p>
        <div className="flex flex-col items-center lg:flex-row">
          <img src={profileImg} alt="" className="basis-1/2 w-full max-w-xl" />
          <p className="basis-1/2 p-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            sint nobis tempora voluptates enim quibusdam sit corrupti. Explicabo
            nobis sequi iure veritatis eum ex similique eius at quibusdam porro
            beatae alias accusamus, illum labore dignissimos consectetur hic
            earum consequuntur aliquam nesciunt laboriosam maiores tempora
            consequatur. Excepturi ad voluptatum fuga. Nam?
          </p>
        </div>
      </motion.div>
    </div>
  );
}
