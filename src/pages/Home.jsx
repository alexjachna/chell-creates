import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="relative flex w-full h-screen">
      <Navbar />
      <div className="h-full w-1/2 left-0 bg-zinc-50"></div>
      <div className="h-full w-1/2 right-0 bg-stone-200"></div>
      <div className="absolute flex flex-col gap-8 w-full h-full p-60 m-auto left-0 right-0 top-0 bottom-0 ">
        <p className="text-zinc-400 tracking-[1rem] text-2xl">
          ALEX JACHNA PRESENTS
        </p>
        <p className="text-zinc-800 font-dmSerif text-9xl">
          Chell Creates Media.
        </p>
        <nav className="flex gap-44">
          <div className="p-4 w-48">
            <Link
              to="/galleries/"
              className="font-bold text-2xl text-zinc-700 tracking-widest"
            >
              Galleries
            </Link>
            <p className="text-zinc-500">Visit all my photoshoot galleries.</p>
          </div>
          <div className="p-4 w-48">
            <Link
              to="/galleries/"
              className="font-bold text-2xl text-zinc-700 tracking-widest"
            >
              About
            </Link>
            <p className="text-zinc-500">Learn more about me and what I do.</p>
          </div>
          <div className="p-4 w-48">
            <Link
              to="/galleries/"
              className="font-bold text-2xl text-zinc-700 tracking-widest"
            >
              Contact
            </Link>
            <p className="text-zinc-500">Feel free to get in touch with me.</p>
          </div>
        </nav>
        <button className="bg-purple-400 hover:bg-purple-500 transition-all p-4 w-40 text-white rounded-sm shadow-md">
          View Galleries
        </button>
      </div>
    </div>
  );
}
