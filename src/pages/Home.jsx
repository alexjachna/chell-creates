import React from "react";
import { Navigate, Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full h-screen bg-slate-400">
      <p className="text-red-400">hello world</p>
      <Link to="/galleries/">Galleries</Link>
    </div>
  );
}
