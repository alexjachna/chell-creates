import React, { useEffect, useState } from "react";
import menu from "../assets/menu.png";
import about from "../assets/about.png";
import contact from "../assets/contact.png";
import galleries from "../assets/galleries.png";
import myGallery from "../assets/my-gallery.png";
import { Link } from "react-router-dom";

export default function Navbar({ size }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="flex justify-evenly items-center w-full h-20 bg-zinc-50 shadow-sm z-10">
      <Link to="/chell-creates/">
        <p className="text-zinc-800 font-dmSerif text-3xl border-b border-b-zinc-500">
          chell creates.
        </p>
      </Link>

      {size >= 1024 ? (
        <nav className="flex items-center gap-8 text-zinc-800 font-bold">
          <Link to="/galleries/">
            <p>Galleries</p>
          </Link>

          <p>About</p>
          <p>Contact</p>
          <img src={myGallery} alt="" className="h-8 px-8 border-l-2" />
        </nav>
      ) : (
        <img
          src={menu}
          onClick={() => setShowNav(!showNav)}
          alt="hamburger menu"
          className="w-10"
        />
      )}
      <div
        className={
          "absolute top-0 w-screen h-screen transition-all duration-500 z-10 " +
          (showNav ? "left-0" : "left-[-100%]")
        }
      >
        <div className="absolute flex flex-col gap-4 top-0 left-0 w-3/4 h-screen p-4 bg-zinc-100">
          <p className="text-zinc-800 font-dmSerif text-5xl">chell creates.</p>

          <div className="flex gap-4 p-4 border-b-4 border-t-4">
            <img src={myGallery} alt="" className="w-6" />
            <p>Your gallery</p>
          </div>

          <div className="flex gap-4 p-4">
            <img src={galleries} alt="" className="w-6" />
            <p>Galleries</p>
          </div>
          <div className="flex gap-4 p-4">
            <img src={about} alt="" className="w-6" />
            <p>About</p>
          </div>
          <div className="flex gap-4 p-4">
            <img src={contact} alt="" className="w-6" />
            <p>Contact</p>
          </div>
        </div>
        <div
          className="absolute top-0 right-0 w-1/4 h-screen"
          onClick={() => setShowNav(!showNav)}
        ></div>
      </div>
    </div>
  );
}
