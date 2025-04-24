"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";
import Image from "next/image";
import productImage1 from "@/assets/product-image-1.png";
import productImage2 from "@/assets/product-image-2.png";
import productImage3 from "@/assets/product-image-3.png";
import productImage4 from "@/assets/product-image-4.png";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";
import { useEffect, useRef } from "react";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (tab: (typeof tabs)[number]) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const xPercentage = useMotionValue(50);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%,black,transparent)`;

  useEffect(() => {
    if (!tabRef.current) return;
    const { height, width } = tabRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];
    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);

    animate(yPercentage, [0, 0, 100, 100, 0], options);
  });

  return (
    <div
      ref={tabRef}
      className="relative flex items-center gap-2.5 rounded-xl border border-white/15 p-2.5 lg:flex-1"
    >
      <motion.div
        style={{
          maskImage,
        }}
        className="absolute inset-0 -m-px rounded-xl border border-[#A369FF]"
      ></motion.div>
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-white/15">
        <DotLottiePlayer src={tab.icon} className="h-5 w-5" autoplay loop />
      </div>

      <div className="font-medium">{tab.title}</div>

      {tab.isNew && (
        <div className="rounded-full bg-[#8c44ff] px-2 py-0.5 text-xs font-semibold text-black">
          New
        </div>
      )}
    </div>
  );
};

export const Features = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-medium tracking-tighter md:text-6xl">
          Your First Ai Intelligent trader
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-lg tracking-tight text-white/70 md:text-xl">
          Your journey to financial freedom begins with Your FIRST AI Intelligent Trader -
          harnessing tomorrow&apos;s technology for today&apos;s trading opportunities.
        </p>
        <div className="mt-10 flex flex-col gap-3 lg:flex-row">
          {tabs.map((tab) => (
            <FeatureTab {...tab} key={tab.title} />
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-white/20 p-2.5">
          <Image src={productImage1} alt="Product Image" />
        </div>
        <div className="mt-3 rounded-xl border border-white/20 p-2.5">
          <Image src={productImage2} alt="Product Image" />
        </div>
        <div className="mt-3 rounded-xl border border-white/20 p-2.5">
          <Image src={productImage3} alt="Product Image" />
        </div>
        <div className="mt-3 rounded-xl border border-white/20 p-2.5">
          <Image src={productImage4} alt="Product Image" />
        </div>
      </div>
    </section>
  );
};
