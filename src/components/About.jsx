import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { triggerOnce: true, threshold: 0.2 });

  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-200"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          ref={aboutRef}
          initial={{ x: "-100px", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-2">About</p>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }} // Starts from below
          animate={{ y: 0, opacity: 1 }} // Moves up to normal position
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <p className="text-xl mt-4 text-gray-200">
            Hi, I’m Ayush Maharjan! <br />
            <br />
            I’m a passionate designer and developer with a flair for turning
            ideas into visually stunning and user-friendly interfaces. With
            expertise in React.js, Laravel, and Figma, I specialize in crafting
            seamless digital experiences that not only look great but also
            function effortlessly.
            <br />
            <br />
            Creativity and technology are at the heart of everything I do.
            Whether it’s designing intuitive layouts in Figma, building dynamic
            web applications with React, or developing robust backend solutions
            with Laravel, I’m always striving to push boundaries and deliver
            solutions that exceed expectations.
            <br />
            Let’s build something amazing together!
          </p>
        </motion.div>

      </div>
    </div>
  );
}
