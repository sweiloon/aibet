"use client";
import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative flex h-[492px] items-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:h-[800px]"
      style={{ backgroundImage: `url(${starsBg.src})`, backgroundPositionY }}
      animate={{
        backgroundPositionX: starsBg.width,
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 60,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      {/*Start Planet */}
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-purple-500 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0__50px_rgb(140,69,255)] md:h-96 md:w-96"></div>
      {/*End Planet */}
      {/*Start Ring 1*/}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 50,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[344px] w-[344px] -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-20 md:h-[580px] md:w-[580px]"
      >
        <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute left-full top-1/2 inline-flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white">
          <div className="h-2 w-2 rounded-full bg-white"></div>
        </div>
      </motion.div>
      {/*End Ring 1*/}
      {/*Start Ring 2*/}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[444px] w-[444px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20 md:h-[780px] md:w-[780px]"
      ></motion.div>
      {/*End Ring 2*/}
      {/*Start Ring 3*/}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[544px] w-[544px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white opacity-20 md:h-[980px] md:w-[980px]"
      >
        <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        <div className="absolute left-full top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
      </motion.div>
      {/*End Ring 3*/}
      <div className="container relative mt-16">
        <h1 className="bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] bg-clip-text py-8 text-center text-6xl font-semibold tracking-tighter text-transparent md:text-[118px] md:leading-none">
          AI Baccarat
        </h1>
        <div className="mx-auto mt-5 max-w-xl text-center">
          <h1 className="text-2xl text-white/70 md:text-2xl lg:text-3xl">
            全马首个AI百家乐智能操盘手
          </h1>
          <h2 className="mt-2 text-base text-white/50 md:text-sm lg:text-base">
            Step into the future of baccarat with AI precision. Let systems do the thinking while
            you focus on the results.
          </h2>
        </div>
        <div className="mt-5 flex justify-center">
          <Button>Join Now</Button>
        </div>
      </div>
    </motion.section>
  );
};
