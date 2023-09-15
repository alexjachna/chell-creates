import React from "react";

export default function Photoshoot({ image, photoshootTitle }) {
  return (
    <div
      id="photoshoot-box"
      className="relative flex justify-center items-center overflow-hidden transition-all durat w-full h-full bg-red-200"
    >
      <img
        src={image}
        alt=""
        className="object-cover min-w-full min-h-full opacity-80 hover:opacity-100 hover:blur-sm"
      />
      <p className="absolute hidden text-zinc-700 text-3xl font-montserrat">
        {photoshootTitle}
      </p>
    </div>
  );
}
