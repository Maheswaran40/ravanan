
import { useRef } from "react";
import { motion, useScroll, useTransform,useSpring } from "framer-motion";

import Navbar from "./components/Navbar";

import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Six panels: move the track across five viewport widths
const xTransform = useTransform(
  scrollYProgress,
  [0, 1],
  ["0%", "-83.333333%"]
);

const x = useSpring(xTransform, {
  stiffness: 45,
  damping: 20,
  mass: 1.0,
});

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div
        ref={containerRef}
        className="horizontal-scroll-container"
      >
        <div className="horizontal-viewport">
          <motion.main
            style={{ x }}
            className="horizontal-track"
          >
            <section className="panel">
              <Home />
            </section>

            <section className="panel">
              <About />
            </section>

            <section className="panel">
              <Skills />
            </section>

            <section className="panel">
              <Projects />
            </section>

            <section className="panel">
              <Experience />
            </section>

            <section className="panel">
              <Contact />
            </section>
          </motion.main>
        </div>
      </div>
    </div>
  );
}

export default App;
