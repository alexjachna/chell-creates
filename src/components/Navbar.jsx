import React, { useEffect, useState } from "react";
import menu from "../assets/menu.png";

export default function Navbar() {
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
    <div className="fixed flex justify-evenly items-center w-full h-20 bg-zinc-50 shadow-sm z-10">
      <p className="text-zinc-800 font-dmSerif text-3xl border-b border-b-zinc-500">
        chell creates.
      </p>
      {size >= 1024 ? (
        <nav className="flex gap-8 text-zinc-800 font-bold">
          <p>Galleries</p>
          <p>About</p>
          <p>Contact</p>
        </nav>
      ) : (
        <img src={menu} alt="hamburger menu" className="w-10" />
      )}
    </div>
  );
}
