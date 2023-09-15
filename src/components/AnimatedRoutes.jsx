import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Galleries from "../pages/Galleries";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const [largeBg, setLargeBg] = useState(null);
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

  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home size={size} />} />
        <Route path="/galleries" element={<Galleries size={size} />} />
      </Routes>
    </AnimatePresence>
  );
}
