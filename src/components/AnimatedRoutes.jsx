import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Galleries from "../pages/Galleries";
import Gallery from "../pages/Gallery";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const [bgsize, setBgsize] = useState("0%");
  const [bgopacity, setBgopacity] = useState(0.3);
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
        <Route
          path="/"
          element={
            <Home
              size={size}
              bgsize={bgsize}
              setBgsize={setBgsize}
              bgopacity={bgopacity}
              setBgopacity={setBgopacity}
            />
          }
        />
        <Route
          path="/galleries"
          element={
            <Galleries
              size={size}
              bgsize={bgsize}
              setBgsize={setBgsize}
              bgopacity={bgopacity}
              setBgopacity={setBgopacity}
            />
          }
        />
        <Route
          path="/gallery/:id"
          element={
            <Gallery
              size={size}
              bgsize={bgsize}
              setBgsize={setBgsize}
              bgopacity={bgopacity}
              setBgopacity={setBgopacity}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              size={size}
              bgsize={bgsize}
              setBgsize={setBgsize}
              bgopacity={bgopacity}
              setBgopacity={setBgopacity}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              size={size}
              bgsize={bgsize}
              setBgsize={setBgsize}
              bgopacity={bgopacity}
              setBgopacity={setBgopacity}
            />
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
