import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <div className="relative flex w-full h-screen">
      <Navbar />
      {size >= 1024 && (
        <>
          <div className="h-full w-1/2 left-0 bg-zinc-50"></div>
          <div className="h-full w-1/2 right-0 bg-stone-200"></div>
        </>
      )}

      <div className="absolute flex flex-col items-center lg:items-start gap-8 w-full h-fit px-4 lg:px-48 m-auto left-0 right-0 top-0 bottom-0 ">
        <p className="text-zinc-400 tracking-[1rem] text-xl lg:text-2xl text-center">
          ALEX JACHNA PRESENTS
        </p>
        <p className="text-zinc-800 font-dmSerif text-8xl lg:text-9xl text-center">
          chell creates media.
        </p>
        {size >= 1024 && (
          <nav className="flex gap-4 lg:gap-44">
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
      </div>
    </div>
  );
}
