"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import Contact from "./_components/Contact";
import ShinyText from "./_components/ShinyText/ShinyText";
import Particles from "./_components/Particles/Particles";
import Marquee from "./_components/marquee";
import Flip from "./_components/flip";
import Card from "./_components/Card";

import { useScroll } from "framer-motion";
import Lenis from "lenis";

import { projects } from "../../../constance";
export default function Home() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main className="p-6">
      <div className="relative ">
        <div
          className="flex flex-col"
          style={{ width: "100%", height: "100vh" }}
        >
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={900}
            particleSpread={40}
            speed={0.3}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={true}
          />

          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[480px] md:bottom-[375px]">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=" text-neutral-100 "
            >
              <article className="space-y-4 text-center">
                {["Front-End", "Developer"].map((item) => (
                  <Flip key={item}>{item}</Flip>
                ))}
              </article>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-center mt-2 text-[12px] md:text-[16px]"
            >
              <ShinyText
                text="I am a front-end developer at Zock Studio!"
                disabled={false}
                speed={3}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <section className="w-full md:w-[80%] mx-auto mt-44">
        <Marquee />
      </section>

      <Contact />

      <div className="mt-[10vh]" ref={container}>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={project.id}
              {...project}
              i={i}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </main>
  );
}
