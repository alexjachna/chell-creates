import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Galleries() {
  return (
    <div className="relative flex w-full h-screen">
      <Navbar />
      <div className="absolute m-auto top-0 left-0 right-0 bottom-0 bg-red-400 w-1/2 h-1/2"></div>
    </div>
  );
}
