"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "“AI全自动交易让我省去盯盘时间，收益稳步增长。最喜欢它的风险控制功能，睡觉也能安心！”",
    name: "Lee Ketty",
    title: "From Kuala Lumpur",
    avatarImg: avatar1,
  },
  {
    text: "“退休人士最佳选择！自动化程度高，风险可控，不需专业知识也能获得稳定收益。值得信赖！”",
    name: "Jamie Chen",
    title: "From Johor Bahru",
    avatarImg: avatar2,
  },
  {
    text: "“从未想过投资可以这么轻松。AI系统24小时工作，抓住了我睡觉时的多个交易机会”",
    name: "Adam Liu",
    title: "From Selangor, KL",
    avatarImg: avatar3,
  },
  {
    text: "“试用一周立即升级了会员, 智能全自动交易， 短短三个月让我把之前亏损的都赚回来了！”",
    name: "Alec Gan",
    title: "From Pahang",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-medium tracking-tighter md:text-6xl">
          Beyond Expectations
        </h2>
        <p className="mx-auto mt-5 max-w-sm text-center text-lg tracking-tight text-white/70 md:text-xl">
          超出预期的回报
        </p>
        <div className="mt-10 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{
              translateX: "-50%",
            }}
            animate={{
              translateX: "0",
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
            className="flex flex-none gap-5 pr-5"
          >
            {[...testimonials, ...testimonials].map((testimonial) => (
              <div
                key={testimonial.name}
                className="max-w-xs flex-none rounded-xl border border-white/15 bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] p-6 md:max-w-md md:p-10"
              >
                <div className="text-lg tracking-tight md:text-2xl">{testimonial.text}</div>
                <div className="mt-5 flex items-center gap-3">
                  <div className="relative before:absolute before:inset-0 before:z-10 before:rounded-lg before:border before:border-white/30 before:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light after:content-['']">
                    <Image
                      src={testimonial.avatarImg}
                      alt={`Avatar for ${testimonial.name}`}
                      className="h-11 w-11 rounded-lg border border-white/30 grayscale"
                    />
                  </div>
                  <div className="">
                    <div>{testimonial.name}</div>
                    <div className="text-sm text-white/50">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
