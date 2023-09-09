import React from "react";

export default function Navbar() {
  return (
    <div className="fixed flex justify-evenly items-center w-full h-20 bg-zinc-50 shadow-sm">
      <p className="text-zinc-800 font-dmSerif text-3xl border-b border-b-zinc-500">
        Chell Creates.
      </p>
      <nav className="flex gap-8 text-zinc-800 font-bold">
        <p>Galleries</p>
        <p>About</p>
        <p>Contact</p>
      </nav>
    </div>
  );
}
