"use client";
import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";
import { useEffect } from "react";

export const Footer = () => {
  const scrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Adding smooth scrolling behavior
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFeaturesMiddle = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      // Calculate the position to scroll to (middle of the features section)
      const featuresRect = featuresSection.getBoundingClientRect();
      const middlePosition =
        window.pageYOffset + featuresRect.top + featuresRect.height / 2 - window.innerHeight / 2;

      // Scroll to the calculated position
      window.scrollTo({
        top: middlePosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Handle direct URL with hash
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 0);
    }
  }, []);

  return (
    <footer className="border-t border-white/15 py-5">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex items-center gap-2 lg:flex-1">
            <Logo className="h-8 w-8" />
            <div className="font-medium">AIBET.ASIA</div>
          </div>

          <nav className="flex flex-col gap-7 lg:flex-1 lg:flex-row lg:justify-center lg:gap-7">
            <a
              className="cursor-pointer text-white/70 transition hover:text-white"
              onClick={() => scrollToSection("features")}
            >
              功能
            </a>

            <a
              className="cursor-pointer text-white/70 transition hover:text-white"
              onClick={scrollToFeaturesMiddle}
            >
              价格
            </a>
            <a
              className="cursor-pointer text-white/70 transition hover:text-white"
              onClick={() => scrollToSection("testimonials")}
            >
              客户反馈
            </a>
            <a
              className="cursor-pointer text-white/70 transition hover:text-white"
              onClick={() => scrollToSection("footer")}
            >
              联系我们
            </a>
          </nav>

          <div className="flex items-center gap-5 lg:flex-1 lg:justify-end">
            <XSocial className="text-white/70 transition hover:text-white" />
            <InstaSocial className="text-white/70 transition hover:text-white" />
            <YTSocial className="text-white/70 transition hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
};
